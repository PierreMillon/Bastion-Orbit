#!/usr/bin/env node
'use strict';
/*
 * Bastion Orbit — simulateur de difficulté (headless, sans rendu).
 *
 * Demandé en session (priorité n°1 de Pierre sur les 3 jeux) : un
 * simulateur qui rejoue le jeu avec plusieurs "politiques" de joueur
 * (naïf / correct / bon), pour mesurer objectivement la courbe de
 * difficulté et régler les constantes de jeu sans avoir besoin de
 * testeurs humains.
 *
 * MODÈLE RETENU (voir BACKLOG.md pour les sources) :
 *  - Canal de flow (Csikszentmihalyi / Jenova Chen) : le joueur "correct"
 *    doit rester dans la zone challenge≈compétence — ni ennui (trop
 *    facile) ni anxiété (trop dur). C'est la métrique qu'on optimise :
 *    le taux de survie du joueur "correct" sur les cibles de Pierre.
 *  - Motif "dents de scie" (tension sawtooth, cf. Left 4 Dead AI
 *    Director, analyses Kingdom Rush) : la difficulté ne doit pas
 *    monter en ligne droite — des paliers de répit après les pics
 *    permettent au joueur de "recalibrer" et de ressentir chaque pic
 *    suivant comme un vrai pic, pas comme "encore plus de la même
 *    chose". Bastion Orbit n'a PAS ça aujourd'hui : `toSpawn`/`speed`
 *    montent de façon strictement monotone avec la vague, jamais de
 *    palier de récupération. Voir la section "constantes modifiées".
 *
 * FIDÉLITÉ AU JEU RÉEL : ce n'est PAS un port ligne à ligne de
 * index.html — c'est un modèle agrégé des mêmes règles (mêmes
 * constantes, citées ci-dessous avec leur ligne d'origine à l'audit
 * v0.45), simplifié sur les points suivants (documentés honnêtement) :
 *  - Pas de géométrie 2D réelle (angles, routes, buissons, caméra) —
 *    la route/le pont sont modélisés comme des probabilités agrégées
 *    plutôt que des positions.
 *  - Le combat au corps-à-corps (viser un ennemi précis à l'écran)
 *    est résumé en un DPS moyen dépendant du "skill de caméra" de la
 *    politique (facingMultiplier réel : 1x / 1.5x / 2x selon l'angle).
 *  - La formation des engins de siège (clusterSiegeEngines, vraie
 *    logique de proximité spatiale) est résumée en un seuil de
 *    "combien d'attaquants non tués s'accumulent au mur avant le
 *    prochain contrôle" — fidèle à l'esprit (un DPS de défense
 *    insuffisant fait apparaître des engins) sans reproduire les
 *    coordonnées exactes.
 *  - Sortie/Huile sont modélisées comme des bonus de DPS/anti-siège
 *    activés par la politique quand la situation le justifie, pas
 *    comme des actions au tick près.
 *
 * Objectif : signal directionnel fiable sur QUOI régler, pas une
 * réplique pixel-perfect. Pour une vraie certification finale, vérifier
 * en jeu (Playwright / partie manuelle) après avoir réglé les constantes
 * ici — voir BACKLOG.md, section difficulté.
 */

// ---------------------------------------------------------------------
// Constantes copiées de index.html (v0.45 au moment de l'écriture). Si
// une constante change côté jeu, la reporter ici — pas de lecture
// automatique du fichier (beaucoup de ces valeurs sont des littéraux
// noyés dans des fonctions, pas des `const NOM = ...` isolés).
// ---------------------------------------------------------------------
const K = {
  // donjon / défaite
  CASTLE_MAX_H: 208,          // index.html:872 CASTLE_MAX_H
  CASTLE_MIN_H: 16,           // index.html:873 CASTLE_MIN_H (castleDestroyed en dessous)
  JUMP_H: 56,                 // index.html:874 JUMP_H
  JUMP_CHANCE_MAX: 0.16,      // update(): jumpChance = 0.16 * (1 - castleH/JUMP_H)
  REPAIR_RATE: 8 / 0.5,       // CASTLE_HEAL_STEP(8) / REPAIR_TICK(0.5) = 16 hauteur/s en réparation active
  PLAYER_HP: 5,               // state.player.hp/maxHp
  PRINCESS_HP: 5,             // state.princess.hp/maxHp

  // ennemis (spawnEnemy(), TOUT est plat — aucune montée en puissance
  // individuelle avec la vague, seuls le nombre/la fréquence/la vitesse
  // montent — constat de l'audit difficulté, voir BACKLOG.md)
  // ENEMY_HP réel était (avant ce tour) un littéral plat "2", jamais mis
  // à l'échelle par vague — constat central de l'audit difficulté : ça
  // rendait le jeu bimodal (soit la défense achetée tôt suffit pour
  // toujours, soit elle ne suffit jamais, aucun entre-deux). Réglé au
  // sim jusqu'à tenir les cibles de Pierre (correct ~55-65% autour de la
  // vague 28-30, bon quasiment toujours jusque-là) puis reporté dans
  // index.html:enemyHp() — GARDER LES DEUX SYNCHRONISÉS.
  ENEMY_HP: 2,
  // hpMul mutable : change-le (K.hpMul = X) pour tester un autre
  // palier de difficulté sans réassigner toute la fonction — voir
  // DIFFICULTY_TIERS plus bas, == DIFFICULTY_TIERS/enemyHp() dans
  // index.html. 4.5 = palier "Normal" par défaut.
  // ARC DE 20 VAGUES (2026-09-14) : le jeu devient un niveau unique qui se
  // termine. Les formules (3+2w, 2+floor(w/div), 1.1-0.05w) sont remplacées
  // par une table explicite — chaque vague a une intention lisible et se
  // règle seule, sans déformer toutes les autres. C'était la demande :
  // "un seul niveau avec 20 vagues, comme ça on pourra équilibrer
  // beaucoup plus précisément".
  //
  // Les paliers de répit (5, 10, 15) sont maintenant POSÉS plutôt que
  // tombant sur les multiples de 5 par effet de bord du modulo.
  // GARDER SYNCHRONISÉ avec WAVES dans index.html.
  WAVE_COUNT: 20,
  WAVES: [
    // effectif, PV, vitesse, cadence, échelles, débarquement.
    // Calibrage : le "poids" d'une vague (effectif x PV) suit la courbe
    // déjà éprouvée du jeu, compressée d'un facteur ~1,35 en index de
    // vague — la vague 20 pèse ce que pesait la vague 27, pas davantage.
    // Un premier jet plus raide (620 de poids et 5 échelles en vague 20)
    // faisait tomber le joueur "correct" à 0% de réussite.
    { n: 6,  hp: 2, sp: 26, iv: 1.05, lad: 0, boat: false }, // 1  éclaireurs
    { n: 9,  hp: 2, sp: 28, iv: 1.00, lad: 0, boat: false }, // 2
    { n: 11, hp: 2, sp: 30, iv: 0.95, lad: 0, boat: false }, // 3
    { n: 14, hp: 3, sp: 31, iv: 0.90, lad: 1, boat: false }, // 4  première échelle
    { n: 12, hp: 3, sp: 33, iv: 0.88, lad: 1, boat: false }, // 5  RÉPIT
    { n: 19, hp: 3, sp: 35, iv: 0.82, lad: 1, boat: true  }, // 6  premier débarquement
    { n: 22, hp: 4, sp: 36, iv: 0.76, lad: 1, boat: false }, // 7
    { n: 25, hp: 4, sp: 38, iv: 0.70, lad: 1, boat: false }, // 8
    { n: 27, hp: 4, sp: 40, iv: 0.64, lad: 1, boat: true  }, // 9
    { n: 21, hp: 5, sp: 41, iv: 0.60, lad: 1, boat: false }, // 10 RÉPIT
    { n: 33, hp: 5, sp: 43, iv: 0.54, lad: 1, boat: true  }, // 11
    { n: 35, hp: 5, sp: 45, iv: 0.48, lad: 2, boat: false }, // 12
    { n: 38, hp: 5, sp: 46, iv: 0.44, lad: 2, boat: true  }, // 13
    { n: 41, hp: 6, sp: 48, iv: 0.40, lad: 2, boat: false }, // 14
    { n: 30, hp: 6, sp: 49, iv: 0.40, lad: 2, boat: true  }, // 15 RÉPIT
    { n: 46, hp: 6, sp: 51, iv: 0.38, lad: 2, boat: false }, // 16
    { n: 46, hp: 6, sp: 53, iv: 0.37, lad: 3, boat: true  }, // 17
    { n: 48, hp: 7, sp: 55, iv: 0.36, lad: 3, boat: true  }, // 18
    { n: 46, hp: 7, sp: 57, iv: 0.35, lad: 3, boat: false }, // 19
    { n: 49, hp: 7, sp: 58, iv: 0.35, lad: 3, boat: true  }  // 20 ASSAUT FINAL
  ],
  // au-delà de la vague 20 le jeu est gagné ; on prolonge quand même la
  // dernière ligne pour que --waves=50 reste utilisable en diagnostic
  waveDef: (w) => K.WAVES[Math.min(Math.max(1, w), K.WAVE_COUNT) - 1],
  // le palier de difficulté devient un MULTIPLICATEUR de PV. L'ancien
  // diviseur donnait 8 PV en Difficile ET en Très difficile à la vague 20
  // (2+floor(20/3.2) = 2+floor(20/2.9) = 8) : les deux paliers étaient
  // littéralement identiques en fin de partie. Le multiplicateur les
  // sépare vraiment.
  hpMul: 1.0,
  enemyHp: (wave) => Math.max(1, Math.round(K.waveDef(wave).hp * K.hpMul)),
  ENEMY_WALL_DMG: 6,           // attackBase: castleH -= 6
  ENEMY_WALL_TICK: 1.2,        // attackBase: e.timer = 1.2
  ONTOP_TICK: 1.4,             // onTop: attaque toutes les 1.4s
  ONTOP_PLAYER_DMG: 1,         // onTop -> joueur: p.hp -= 1
  ONTOP_TURRET_DMG: 2,         // onTop -> tourelle: def.ref.hp -= 2
  BASE_SPEED: 24,              // conservé : sert encore de repère hors table
  SPEED_PER_WAVE: 1.5,
  WAVE_SPEED: (w) => K.waveDef(w).sp,
  // "dents de scie" (tension sawtooth, cf. Left 4 Dead AI Director /
  // analyses Kingdom Rush — voir BACKLOG.md) : sans ça, la pression monte
  // en ligne droite, sans jamais de palier de répit pour "recalibrer" le
  // joueur avant le pic suivant. Toutes les 5 vagues, une vague de
  // répit à -30% d'effectif — le pic suivant se ressent comme un vrai
  // pic, pas comme "encore plus de la même chose".
  countMul: 1.0,
  SPAWN_COUNT: (w) => Math.max(1, Math.round(K.waveDef(w).n * K.countMul)),
  SPAWN_INTERVAL: (w) => K.waveDef(w).iv,
  WAVE_LADDERS: (w) => K.waveDef(w).lad,
  LADDER_SETUP_TIME: 2.2,      // LADDER_SETUP_TIME
  ROAD_CHANCE: 0.4,            // ROAD_CHANCE
  ROAD_SPEED_MUL: 1.45,        // ROAD_SPEED_MUL
  FLEE_CHANCE_PER_CYCLE: 0.012,// update(): spooked chance per mood cycle (~toutes les 1.5-4s)
  MOOD_CYCLE_S: 2.5,           // durée moyenne d'un cycle de mood (moodTimer)

  // approche (distances approximatives — géométrie réelle simplifiée)
  R: 49, BASE_R: 49 + 25,      // BASE_R = R + 25 = 74
  SPAWN_R_BASE: 480,           // SPAWN_R_BASE (plancher réel, la vraie valeur dépend de l'écran)

  // joueur / tourelles (combat)
  PLAYER_ATK_COOLDOWN: 0.9,    // p.atkTimer = 0.9
  TOWER_ATK_COOLDOWN: 1.0,     // t.atkTimer = 1.0
  TOWER_DMG: 1,                // dmg de base d'une tourelle
  TOWER_COST: 5,               // towerBtn: state.gold < 5
  FACING_MUL: { naive: 1, correct: 1.5, good: 2 }, // facingMultiplier() réel : 1x/1.5x/2x
  PLAYER_RAMPART_ATK_MUL: 2, // == index.html PLAYER_RAMPART_ATK_MUL ("attaque dans l'axe" +100%, demandé le 2026-09-08)

  // princesse
  PRINCESS_GOLD_BONUS: 1.5,        // ×1.5 revenu jardin quand elle est en bas
  PRINCESS_ATK_BONUS: 1.015,       // +1.5% dmg joueur quand elle est en haut
  PRINCESS_DEATH_ATK_MUL: 0.1,     // -90% dmg joueur, définitif, si elle meurt
  PRINCESS_DEATH_TURRET_MUL: 1.1,  // tourelles +10% si elle meurt ("se battent pour sa mémoire")
  PRINCESS_DANGER_TICK: 1.2,       // PRINCESS_DMG_TICK

  // jardin (formule géométrique, sans plafond)
  GARDEN_BASE_COST: 15, GARDEN_BASE_RATE: 1, GARDEN_GROWTH: 1.35, GARDEN_TICK: 5,
  gardenCost: (n) => Math.round(15 * Math.pow(1.35, n - 1)),
  gardenRate: (n) => 1 * Math.pow(1.35, n - 1),

  // douves
  MOAT_TIERS: [
    { cost: 20, r: 87 }, { cost: 50, r: 122 }, { cost: 200, r: 148 }, { cost: 500, r: 178 }
  ],
  moatSpeedMul: (lvl) => lvl <= 0 ? 1 : Math.max(0.15, 0.55 - 0.1 * (lvl - 1)),
  BRIDGE_BUILD_TIME: 2.5, BRIDGE_MAX_COUNT: 2, BRIDGE_BUILDERS_PER_WAVE: 2,

  // engins de siège
  SIEGE_TIERS: [
    { name: 'bouclier', hp: 6, passive: true, rangedResist: 0.2 },
    { name: 'arbalete', hp: 8, dmg: 5, cooldown: 1.6 },
    { name: 'trebuchet', hp: 14, dmg: 10, cooldown: 2.2 },
    { name: 'tour', hp: 20, dmg: 2, cooldown: 1.6, isTower: true }
  ],
  SIEGE_GROUP_STALL_THRESHOLD: 2, // clusterSiegeEngines: group.length < 2 -> pas d'engin
  SIEGE_CHECK_INTERVAL: 1.2,
  SIEGE_HP_REGEN_PER_CREW: 1.5,
  siegeCrewCap: (tierIdx) => tierIdx + 3,
  TOWER_GROW_RATE: 0.28, TOWER_MAX_H: 4, TOWER_DANGER_H: 3,

  // sortie / huile (actions du joueur, résumées en bonus quand actives)
  SORTIE_DMG: 4, SORTIE_TICK: 0.4,
  OIL_DMG: 3, OIL_TICK: 1.6,
};

// ---------------------------------------------------------------------
// RNG déterministe (mulberry32) — pour des runs reproductibles par seed
// ---------------------------------------------------------------------
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------
// Politiques de joueur — chaque axe correspond à une vraie décision du
// joueur dans le jeu (les autres, réparation/ciblage de combat, sont
// automatiques côté FSM et donc identiques pour toutes les politiques).
// ---------------------------------------------------------------------
const POLICIES = {
  naive: {
    label: 'naïf',
    facing: 'naive',        // ne suit jamais la cible à la caméra
    maxTurrets: 2,          // achète 1-2 tourelles, sans discipline
    buysGarden: false,
    buysMoat: false,
    usesPrincess: false,    // ne la fait jamais descendre (aucun risque, aucun gain)
    usesSortie: false,
    usesOil: false,
  },
  correct: {
    label: 'correct',
    facing: 'correct',
    maxTurrets: 5,
    buysGarden: true,
    buysMoat: true,
    moatMaxTier: 2,
    usesPrincess: true,
    princessThreatLimit: 3, // la rappelle si ≥3 attaquants stagnent au mur
    usesSortie: true,
    usesOil: false,
  },
  good: {
    label: 'bon',
    facing: 'good',
    maxTurrets: 8,
    buysGarden: true,
    buysMoat: true,
    moatMaxTier: 4,
    usesPrincess: true,
    princessThreatLimit: 1, // très prudent, la rappelle au moindre risque
    usesSortie: true,
    usesOil: true,
  },
};

// paliers de difficulté == DIFFICULTY_TIERS dans index.html — GARDER
// SYNCHRONISÉS. Un seul levier par palier (hpMul, via K.hpMul),
// calibré séparément pour chacun (voir BACKLOG.md, section difficulté).
const DIFFICULTY_TIERS = [
  // Deux leviers par palier, et pas seulement les PV : les PV d'un ennemi
  // sont un petit entier (2 à 7), si bien que round(hp*1.10) et
  // round(hp*1.15) tombent sur LE MÊME entier — le palier est quantifié et
  // Difficile revenait coller à Très difficile (27% contre 28% mesurés).
  // L'effectif, lui, est un grand nombre : un multiplicateur dessus se
  // règle finement. GARDER SYNCHRONISÉ avec DIFFICULTY_TIERS d'index.html.
  { key: 'facile', label: 'Facile', hpMul: 0.8, countMul: 0.85 },
  { key: 'normal', label: 'Normal', hpMul: 1.0, countMul: 1.0 },
  { key: 'difficile', label: 'Difficile', hpMul: 1.08, countMul: 1.06 },
  { key: 'tresDifficile', label: 'Très difficile', hpMul: 1.18, countMul: 1.14 }
];

// ---------------------------------------------------------------------
// Simulation d'une partie, jusqu'à `maxWaves` vagues ou la défaite.
// Pas à pas discret (dt fixe) — assez fin pour les cycles les plus
// courts du jeu réel (ONTOP_TICK=1.4s, PLAYER_ATK_COOLDOWN=0.9s).
// ---------------------------------------------------------------------
function simulateRun(policyName, seed, maxWaves) {
  const pol = POLICIES[policyName];
  const rng = mulberry32(seed);
  const dt = 0.2;

  let wave = 1;
  let castleH = K.CASTLE_MAX_H;
  let playerHp = K.PLAYER_HP;
  let princessHp = K.PRINCESS_HP;
  let princessAlive = true;
  let princessDown = false;
  let gold = 0;
  let turretCount = 0;
  let gardenLevel = 0;
  let moatLevel = 0;
  let bridges = 0;

  // file d'attaquants au mur (chacun {ladder, timer, onTop})
  let wallQueue = [];
  // ennemis en approche (chacun {dist, speed})
  let approaching = [];
  // engins de siège actifs
  let siegeEngines = [];

  let toSpawn = K.SPAWN_COUNT(wave);
  let spawnInterval = K.SPAWN_INTERVAL(wave);
  let spawnTimer = 0.75; // FIGHT_BANNER_SPAWN_DELAY
  let laddersToSpawn = K.WAVE_LADDERS(wave);
  let bridgeBuildersLeft = 0;
  let siegeCheckTimer = K.SIEGE_CHECK_INTERVAL;

  const waveLog = []; // {wave, castleH, playerHp, gold, turretCount, siegeCount}

  let t = 0;
  const maxT = maxWaves * 400; // garde-fou temps réel simulé (évite une boucle infinie si un palier ne se termine jamais)
  let deathCause = null;
  let waveStartT = 0;
  // un bouclier (tier passif) n'est JAMAIS achevé par le tir à distance
  // seul, dans le jeu réel comme ici (hp plafonné à 1, régénéré tant que
  // l'équipage est vivant — voir "équipage vivant" dans BACKLOG.md) :
  // seule une sortie tue l'équipage directement. Une politique qui
  // n'utilise jamais la sortie peut donc rester bloquée indéfiniment sur
  // une vague — pas une vraie défaite (pas d'écran de fin), mais pas une
  // progression non plus. Traité ici comme un échec effectif après un
  // délai largement au-dessus de la durée normale d'une vague.
  const STALL_LIMIT_S = 240;

  while (wave <= maxWaves && t < maxT) {
    t += dt;
    if (t - waveStartT > STALL_LIMIT_S) {
      deathCause = 'vague bloquée indéfiniment (engin de siège jamais détruit — pas de sortie)';
      break;
    }

    // --- achats (le joueur dépense dès qu'il peut, dans l'ordre de sa politique) ---
    if (turretCount < pol.maxTurrets && gold >= K.TOWER_COST) {
      gold -= K.TOWER_COST; turretCount++;
    } else if (pol.buysGarden && gold >= K.gardenCost(gardenLevel + 1) &&
               // ne sacrifie pas les tourelles pour le jardin tant que le mur est sous pression
               (gardenLevel < 3 || wallQueue.length === 0)) {
      gold -= K.gardenCost(gardenLevel + 1); gardenLevel++;
    } else if (pol.buysMoat && moatLevel < (pol.moatMaxTier || 0) &&
               gold >= K.MOAT_TIERS[moatLevel].cost) {
      gold -= K.MOAT_TIERS[moatLevel].cost; moatLevel++;
    }

    // --- princesse : descend/remonte selon le seuil de menace de la politique ---
    if (pol.usesPrincess && princessAlive) {
      const threat = wallQueue.length;
      if (!princessDown && threat < pol.princessThreatLimit) princessDown = true;
      else if (princessDown && threat >= pol.princessThreatLimit) princessDown = false;
    }
    // le jardin passif tombe toutes les GARDEN_TICK secondes
    // (approximé en continu ici : rate/s = gardenRate/GARDEN_TICK)
    if (gardenLevel > 0) {
      const effGarden = Math.max(0, gardenLevel - moatLevel);
      if (effGarden > 0) {
        let rate = K.gardenRate(effGarden) / K.GARDEN_TICK;
        if (princessDown) rate *= K.PRINCESS_GOLD_BONUS;
        gold += rate * dt;
      }
    }
    // la princesse en bas risque sa vie si trop d'attaquants sont au mur
    // en même temps (proxy de PRINCESS_DANGER_R réel)
    if (princessDown && princessAlive && wallQueue.length >= 4) {
      princessHp -= dt / K.PRINCESS_DANGER_TICK;
      if (princessHp <= 0) { princessAlive = false; princessDown = false; }
    } else if (princessAlive && princessHp < K.PRINCESS_HP) {
      princessHp = Math.min(K.PRINCESS_HP, princessHp + dt * 0.5); // se soigne lentement une fois hors de danger
    }

    // --- spawns ---
    if (toSpawn > 0) {
      spawnTimer -= dt;
      if (spawnTimer <= 0) {
        spawnTimer = spawnInterval;
        toSpawn--;
        const isLadder = laddersToSpawn > 0;
        if (isLadder) laddersToSpawn--;
        const isBuilder = !isLadder && bridgeBuildersLeft > 0;
        if (isBuilder) bridgeBuildersLeft--;
        const onRoad = !isLadder && !isBuilder && rng() < K.ROAD_CHANCE;
        const bridged = moatLevel > 0 && bridges > 0 && rng() < Math.min(0.6, bridges * 0.25);
        approaching.push({
          ladder: isLadder, builder: isBuilder, onRoad, bridged,
          speed: K.WAVE_SPEED(wave),
          dist: K.SPAWN_R_BASE - K.BASE_R,
          fled: false,
        });
      }
    }

    // --- approche ---
    const stillApproaching = [];
    for (const e of approaching) {
      // vagabondage/frayeur : une petite fraction abandonne en route (fuite)
      if (!e.fled && rng() < (K.FLEE_CHANCE_PER_CYCLE * dt) / K.MOOD_CYCLE_S) { e.fled = true; continue; }
      let mul = 1;
      if (e.onRoad) mul *= K.ROAD_SPEED_MUL;
      const insideMoat = moatLevel > 0 && !e.bridged;
      if (insideMoat) {
        if (e.builder && bridges < K.BRIDGE_MAX_COUNT && bridgeBuildersLeft >= 0) {
          // le bâtisseur s'arrête et construit — un pont de plus, gratuit
          // ensuite pour une partie des futurs arrivants (voir "bridged" ci-dessus)
          bridges++;
          continue; // ne rejoint jamais le mur lui-même
        }
        mul *= K.moatSpeedMul(moatLevel);
      }
      e.dist -= e.speed * mul * dt;
      if (e.dist > 0) { stillApproaching.push(e); continue; }
      wallQueue.push({ ladder: e.ladder, timer: e.ladder ? K.LADDER_SETUP_TIME : 1.2, onTop: false, onTopTimer: 0, hp: K.enemyHp(wave) });
    }
    approaching = stillApproaching;

    // --- attaquants au mur : chip castleH, ou grimpent (échelle / saut) ---
    const stillAtWall = [];
    for (const a of wallQueue) {
      if (a.onTop) {
        a.onTopTimer -= dt;
        if (a.onTopTimer <= 0) {
          a.onTopTimer = K.ONTOP_TICK;
          // cible : tourelle si disponible, sinon le joueur (approx de nearestDefender)
          if (turretCount > 0 && rng() < 0.5) turretCount = Math.max(0, turretCount - (rng() < 0.15 ? 1 : 0));
          else {
            playerHp -= K.ONTOP_PLAYER_DMG;
            if (playerHp <= 0) { deathCause = 'joueur à 0 PV (ennemi monté sur la plateforme)'; break; }
          }
        }
        stillAtWall.push(a);
        continue;
      }
      a.timer -= dt;
      if (a.timer <= 0) {
        if (a.ladder) { a.onTop = true; a.onTopTimer = K.ONTOP_TICK; stillAtWall.push(a); continue; }
        const jumpChance = castleH <= K.JUMP_H ? K.JUMP_CHANCE_MAX * (1 - castleH / K.JUMP_H) : 0;
        if (jumpChance > 0 && rng() < jumpChance) {
          a.onTop = true; a.onTopTimer = K.ONTOP_TICK; stillAtWall.push(a); continue;
        }
        castleH = Math.max(K.CASTLE_MIN_H, castleH - K.ENEMY_WALL_DMG);
        if (castleH <= K.CASTLE_MIN_H) { deathCause = 'château détruit'; break; }
        a.timer = 1.2;
      }
      stillAtWall.push(a);
    }
    wallQueue = stillAtWall;
    if (deathCause) break;

    // --- formation d'engins de siège : au-delà du seuil d'attaquants non
    // tués accumulés, une partie se regroupe (fidèle à l'esprit de
    // clusterSiegeEngines, sans la géométrie exacte) ---
    siegeCheckTimer -= dt;
    if (siegeCheckTimer <= 0) {
      siegeCheckTimer = K.SIEGE_CHECK_INTERVAL;
      const stalled = wallQueue.filter(a => !a.onTop && !a.ladder);
      if (stalled.length >= K.SIEGE_GROUP_STALL_THRESHOLD) {
        const groupSize = Math.min(stalled.length, 2 + Math.floor(rng() * 3));
        if (groupSize >= 2) {
          const tierIdx = Math.min(groupSize - 2, K.SIEGE_TIERS.length - 1);
          const tier = K.SIEGE_TIERS[tierIdx];
          const cap = K.siegeCrewCap(tierIdx);
          const crew = Math.min(groupSize, cap);
          for (let i = 0; i < crew; i++) {
            const idx = wallQueue.indexOf(stalled[i]);
            if (idx >= 0) wallQueue.splice(idx, 1);
          }
          siegeEngines.push({ tierIdx, crew, hp: tier.hp, maxHp: tier.hp, atkTimer: tier.cooldown, growH: 0 });
        }
      }
    }

    // --- engins de siège : régénèrent tant que l'équipage est vivant,
    // attaquent selon leur tier ---
    const stillSieging = [];
    for (const s of siegeEngines) {
      const tier = K.SIEGE_TIERS[s.tierIdx];
      if (s.crew > 0 && s.hp < s.maxHp) s.hp = Math.min(s.maxHp, s.hp + K.SIEGE_HP_REGEN_PER_CREW * s.crew * dt);
      if (tier.isTower) {
        s.growH = Math.min(K.TOWER_MAX_H, s.growH + K.TOWER_GROW_RATE * dt);
      }
      if (!tier.passive && (!tier.isTower || s.growH >= K.TOWER_DANGER_H)) {
        s.atkTimer -= dt;
        if (s.atkTimer <= 0) {
          s.atkTimer = tier.cooldown;
          if (tier.isTower) {
            playerHp -= 1;
            if (playerHp <= 0) { deathCause = 'joueur à 0 PV (tour de siège)'; break; }
          } else {
            castleH = Math.max(K.CASTLE_MIN_H, castleH - tier.dmg);
            if (castleH <= K.CASTLE_MIN_H) { deathCause = 'château détruit (engin de siège)'; break; }
          }
        }
      }
      // sortie : la politique tue l'équipage directement, bien plus vite
      // qu'à distance — c'est tout l'intérêt de la mécanique
      if (pol.usesSortie && s.hp > 0) {
        s.hp -= K.SORTIE_DMG * (dt / K.SORTIE_TICK);
        if (s.hp <= 0.001 && s.crew > 0) s.crew = Math.max(0, s.crew - 1);
      }
      if (s.hp > 0) stillSieging.push(s);
      else gold += 1; // équipage détruit, considéré comme un kill
    }
    siegeEngines = stillSieging;
    if (deathCause) break;

    // --- combat de défense : joueur + tourelles contre la file au mur
    // (huile ajoute un bonus si active) ---
    if (!deathCause) {
      const facingMul = K.FACING_MUL[pol.facing];
      let princessAtkMul = princessAlive ? K.PRINCESS_ATK_BONUS : K.PRINCESS_DEATH_ATK_MUL;
      let playerDps = (facingMul * K.PLAYER_RAMPART_ATK_MUL * princessAtkMul) / K.PLAYER_ATK_COOLDOWN;
      let turretDpsEach = (princessAlive ? 1 : K.PRINCESS_DEATH_TURRET_MUL) * K.TOWER_DMG / K.TOWER_ATK_COOLDOWN;
      let totalDps = playerDps + turretCount * turretDpsEach;
      if (pol.usesOil && wallQueue.length > 0) totalDps += K.OIL_DMG / K.OIL_TICK;
      let dmgPool = totalDps * dt;
      const targets = wallQueue.filter(a => !a.onTop);
      for (const a of targets) {
        if (dmgPool <= 0) break;
        const applied = Math.min(dmgPool, a.hp);
        a.hp -= applied;
        dmgPool -= applied;
        if (a.hp <= 0) {
          const idx = wallQueue.indexOf(a);
          if (idx >= 0) wallQueue.splice(idx, 1);
          gold += 1;
        }
      }
      // le pool restant tape sur les engins de siège actifs (résiste
      // selon rangedResist du tier, comme le vrai jeu)
      for (const s of siegeEngines) {
        if (dmgPool <= 0) break;
        const tier = K.SIEGE_TIERS[s.tierIdx];
        const resist = tier.rangedResist || 1;
        const applied = Math.min(dmgPool, s.hp - 1); // ne finit jamais un engin à distance (équipage vivant)
        if (applied > 0) { s.hp -= applied * resist; dmgPool -= applied; }
      }
    }

    // --- réparation automatique (FSM réelle : dès que rien n'attaque et
    // que le château n'est pas au max, le seigneur répare tout seul) ---
    if (wallQueue.length === 0 && castleH < K.CASTLE_MAX_H) {
      castleH = Math.min(K.CASTLE_MAX_H, castleH + K.REPAIR_RATE * dt);
    }

    // --- fin de vague ---
    if (toSpawn === 0 && approaching.length === 0 && wallQueue.length === 0 && siegeEngines.length === 0) {
      waveLog.push({ wave, castleH: Math.round(castleH), playerHp: Math.round(playerHp * 10) / 10, gold: Math.round(gold), turretCount, gardenLevel, moatLevel });
      wave++;
      waveStartT = t;
      if (wave > maxWaves) break;
      // pause partielle (comme le vrai jeu : moitié des PV manquants)
      playerHp = Math.min(K.PLAYER_HP, playerHp + (K.PLAYER_HP - playerHp) * 0.5);
      if (princessAlive) princessHp = Math.min(K.PRINCESS_HP, princessHp + (K.PRINCESS_HP - princessHp) * 0.5);
      toSpawn = K.SPAWN_COUNT(wave);
      spawnInterval = K.SPAWN_INTERVAL(wave);
      spawnTimer = 0.75;
      laddersToSpawn = K.WAVE_LADDERS(wave);
      if (moatLevel > 0) bridgeBuildersLeft = K.BRIDGE_BUILDERS_PER_WAVE;
    }
  }

  return {
    policy: policyName,
    seed,
    survivedWaves: deathCause ? wave - 1 : wave,
    died: !!deathCause,
    deathCause,
    finalCastleH: Math.round(castleH),
    waveLog,
  };
}

// ---------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------
function percentile(arr, p) {
  const s = [...arr].sort((a, b) => a - b);
  const idx = Math.min(s.length - 1, Math.floor(p * s.length));
  return s[idx];
}

function runBatch(policyName, runs, maxWaves, checkpoints) {
  const results = [];
  for (let i = 0; i < runs; i++) results.push(simulateRun(policyName, 1000 * runs + i, maxWaves));
  const waves = results.map(r => r.survivedWaves);
  const survivalAt = {};
  for (const cp of checkpoints) {
    survivalAt[cp] = results.filter(r => r.survivedWaves >= cp).length / runs;
  }
  return {
    policy: policyName,
    runs,
    medianWave: percentile(waves, 0.5),
    p25Wave: percentile(waves, 0.25),
    p75Wave: percentile(waves, 0.75),
    meanWave: waves.reduce((a, b) => a + b, 0) / runs,
    survivalAt,
    deathCauses: results.reduce((acc, r) => { if (r.died) acc[r.deathCause] = (acc[r.deathCause] || 0) + 1; return acc; }, {}),
  };
}

// ---------------------------------------------------------------------
// Test de régression (--check) : demandé explicitement — "toute nouvelle
// fonctionnalité doit relancer [le simulateur] et rester dans les
// cibles". Bornes volontairement un peu larges (marge de bruit
// statistique sur des runs stochastiques, pas un pile-poil 55-65%) —
// resserre-les si tu veux un test plus strict une fois le nombre de
// runs augmenté. Sort avec un code non-zéro si une cible est ratée.
// ---------------------------------------------------------------------
// chaque cible précise son palier de difficulté (tier, une clé de
// DIFFICULTY_TIERS) — sans ça, un seul K.hpMul global ne peut pas
// représenter les 4 paliers à la fois. "naïf" et "bon" ne sont testés
// qu'au palier Normal (leur profil ne dépend pas vraiment du palier :
// naïf perd partout, bon gagne presque partout aux waves testées).
const REGRESSION_TARGETS = [
  { policy: 'naive', tier: 'normal', wave: 10, max: 0.15, label: 'naïf doit perdre (≤15% encore en vie à la vague 10, Normal)' },
  { policy: 'good', tier: 'normal', wave: 20, min: 0.85, label: 'bon doit finir le niveau presque toujours (≥85% à la vague 20, Normal)' },
  { policy: 'correct', tier: 'facile', wave: 20, min: 0.70, label: 'correct en Facile (~85% visé, ≥70% au bout des 20 vagues)' },
  { policy: 'correct', tier: 'normal', wave: 20, min: 0.45, max: 0.80, label: 'correct en Normal (~55-65% visé, zone de tension 45-80% au bout des 20 vagues)' },
  { policy: 'correct', tier: 'normal', wave: 18, min: 0.50, max: 0.88, label: 'correct en Normal : l\'avant-dernier palier ne doit pas déjà tout trancher (50-88% à la vague 18)' },
  { policy: 'correct', tier: 'difficile', wave: 20, min: 0.20, max: 0.55, label: 'correct en Difficile (~30-40% visé, 20-55% au bout des 20 vagues)' },
  { policy: 'correct', tier: 'tresDifficile', wave: 20, max: 0.30, label: 'correct en Très difficile (~15-20% visé, ≤30% au bout des 20 vagues)' },
];

function runRegressionCheck(runs) {
  console.log(`Vérification de régression (${runs} parties/politique)...\n`);
  let ok = true;
  // un run par (politique, palier), couvrant tous les paliers que ses
  // cibles référencent — le hpMul du palier est posé juste avant
  // chaque lot, puis restauré (Normal) à la fin
  const byKey = {};
  for (const target of REGRESSION_TARGETS) {
    const k = target.policy + ':' + target.tier;
    (byKey[k] = byKey[k] || { policy: target.policy, tier: target.tier, waves: [] }).waves.push(target.wave);
  }
  const cache = {};
  for (const [k, { policy, tier, waves }] of Object.entries(byKey)) {
    const tierDef = DIFFICULTY_TIERS.find(t => t.key === tier);
    K.hpMul = tierDef.hpMul;
    K.countMul = tierDef.countMul;
    cache[k] = runBatch(policy, runs, Math.max(...waves) + 5, waves);
  }
  K.hpMul = DIFFICULTY_TIERS.find(t => t.key === 'normal').hpMul;
  K.countMul = DIFFICULTY_TIERS.find(t => t.key === 'normal').countMul;
  for (const target of REGRESSION_TARGETS) {
    const s = cache[target.policy + ':' + target.tier];
    const rate = s.survivalAt[target.wave];
    const passMin = target.min === undefined || rate >= target.min;
    const passMax = target.max === undefined || rate <= target.max;
    const pass = passMin && passMax;
    ok = ok && pass;
    console.log(`${pass ? '✓' : '✗'} ${target.label} — mesuré: ${Math.round(rate * 100)}%`);
  }
  console.log(ok ? '\nOK — dans les cibles.' : '\nÉCHEC — hors cibles, revoir les constantes (voir enemyHp()/waveSpawnCount()/DIFFICULTY_TIERS dans index.html).');
  return ok;
}

function main() {
  const args = process.argv.slice(2);
  const runsArg = args.find(a => a.startsWith('--runs='));
  const wavesArg = args.find(a => a.startsWith('--waves='));
  const jsonOut = args.includes('--json');
  const runs = runsArg ? parseInt(runsArg.split('=')[1], 10) : 60;

  if (args.includes('--check')) {
    // 250 par défaut et pas 80 : à 80 parties le bruit atteint +/-6 points
    // pour des cibles larges de 20, au point que Difficile a mesuré
    // successivement 0%, 18%, 26% puis 19% sur des réglages de plus en
    // plus FACILES. On ne peut pas régler contre une mesure qui bouge plus
    // que l'effet qu'on cherche.
    const ok = runRegressionCheck(runsArg ? runs : 250);
    process.exit(ok ? 0 : 1);
  }

  const maxWaves = wavesArg ? parseInt(wavesArg.split('=')[1], 10) : 100;
  const checkpoints = [5, 10, 20, 30, 50, 75, 100].filter(c => c <= maxWaves);

  const summary = {};
  for (const policyName of Object.keys(POLICIES)) {
    summary[policyName] = runBatch(policyName, runs, maxWaves, checkpoints);
  }

  if (jsonOut) {
    console.log(JSON.stringify(summary, null, 2));
    return;
  }

  console.log(`Bastion Orbit — simulateur de difficulté (${runs} parties/politique, jusqu'à ${maxWaves} vagues)\n`);
  for (const policyName of Object.keys(POLICIES)) {
    const s = summary[policyName];
    console.log(`--- ${POLICIES[policyName].label} ---`);
    console.log(`  vague atteinte : médiane ${s.medianWave} (p25=${s.p25Wave}, p75=${s.p75Wave}, moyenne=${s.meanWave.toFixed(1)})`);
    console.log(`  survie par palier : ` + checkpoints.map(c => `≥v${c}=${Math.round(s.survivalAt[c] * 100)}%`).join('  '));
    const causes = Object.entries(s.deathCauses).sort((a, b) => b[1] - a[1]);
    if (causes.length) console.log(`  causes de mort : ` + causes.map(([c, n]) => `${c} (${n})`).join(', '));
    console.log('');
  }
}

if (require.main === module) main();

module.exports = { simulateRun, runBatch, POLICIES, K, DIFFICULTY_TIERS };
