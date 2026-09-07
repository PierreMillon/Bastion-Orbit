# Bastion Orbit — idées en attente

Ce fichier existe pour qu'aucune idée dite en passant ne se perde. Dès qu'une
nouvelle idée est mentionnée en conversation (même en une phrase, même pas
prête à être codée), elle est ajoutée ici avant d'être oubliée. Rien n'est
retiré quand une idée est implémentée — noter "→ fait en vX.Y" à la place.

## Engins de siège (ennemis qui se regroupent) → fait en v0.13

Si plusieurs ennemis se rassemblent au même endroit au lieu d'attaquer
séparément, ils construisent un engin de siège. Palier selon le nombre
d'ennemis regroupés :

- **2** — bouclier/tortue : invincibles tant qu'ils sont groupés sous le
  bouclier, mais ne peuvent pas attaquer pendant ce temps.
- **3** — arme de trait (grosse flèche / arbalète).
- **4** — trébuchet.
- **5** — tour de siège : avance, gagne en hauteur, permet d'attaquer le
  château directement par les airs une fois assez haute.

But : si on laisse les ennemis se regrouper trop longtemps sans intervenir,
la menace grandit — ça doit pousser à agir avant que le regroupement soit
complet, pas juste défendre passivement le mur.

## Sortie du joueur ("chevalier Bayard") → fait en v0.13

Pour contrer un engin de siège en construction, le joueur doit pouvoir
descendre du château avec des hommes et sortir attaquer spécifiquement cet
engin — sans peur et sans reproche, quitte à laisser le château moins
défendu pendant ce temps. Un vrai choix risque/récompense : rester sur les
remparts en sécurité, ou sortir pour étouffer la menace dans l'œuf.

Implique : un moyen de sortir de la boucle orbite/plateforme actuelle,
probablement une phase de jeu à part (descente + déplacement au sol vers
la cible), à concevoir.

## Vue intérieure du donjon

Idée donnée avec une image de référence (intérieur de donjon en vue
isométrique, escaliers, tonneaux, personnages) : un bouton (peut-être sur
la base/le socle du donjon) pour basculer sur une vue de l'intérieur du
donjon, avec du gameplay propre à cet espace. Pas encore conçu — juste
noté pour ne pas perdre l'idée. Référence visuelle vue en conversation,
pas encore enregistrée dans le repo.

Précision d'ambiance donnée ensuite : à l'intérieur, le seigneur vient se
reposer près d'un feu — si la princesse le suit, ils jouent aux échecs.
Un mode "cosy" contemplatif, pendant que la bataille continue dehors.
Belle opposition tonale (repos à l'intérieur / urgence dehors) à garder
si cette vue voit le jour.

## Huile bouillante

Depuis l'ajout de la plateforme (v0.5) qui dépasse le donjon, il y a de la
place pour percer des trous dans le rebord et y verser de l'huile
bouillante sur les ennemis en bas. Pas encore de mécanique, juste rendu
possible par la plateforme.

## Échelle portée par un ennemi

Un type d'ennemi qui porte une échelle, la pose contre le donjon, et
permet aux autres de monter directement sur la plateforme sans avoir à
démolir le mur — un chemin d'attaque alternatif à ajouter au système de
saut existant (qui, lui, reste tel quel : rare, lié à la hauteur du
donjon). Idée brute, pas conçue.

## Chemin vers un autre château (progression multi-niveaux)

Un chemin visible qui serpente depuis le lointain jusqu'au donjon (zigzag,
pas une ligne droite), qui tourne avec la carte. Idée à deux niveaux :
- Décor immédiat : juste un chemin qui se promène dans le sol visible,
  purement visuel pour commencer.
- Idée plus large de progression : une fois un niveau défendu avec succès
  (exemple donné : niveau 100), on emprunte ce chemin vers un autre
  château à défendre — de quoi construire une vraie suite de niveaux
  plutôt qu'un seul château joué indéfiniment. Pas conçu, juste noté pour
  ne pas perdre le fil.

## Vague manuelle (appel anticipé, cumulatif) → fait en v0.22

Bouton pour faire venir la vague suivante par-dessus l'actuelle (pas de
limite — 15 appuis = 15 vagues qui s'ajoutent). Intérêt : aller plus vite,
plus de challenge, et de l'or bonus. Formule proposée pour l'or, à tester :
la moitié de ce que la vague précédente a rapporté (ou aurait rapporté si
tous les ennemis avaient été tués).

## IA ennemis : trajectoire plus directe → fait en v0.25

Amplitude du zigzag latéral divisée par deux.

## Bouclier de siège : très résistant → fait en v0.22 (première passe, à revoir)

Première passe déjà en ligne (v0.22) : le palier "bouclier" n'est plus
invincible aux tirs à distance, juste très résistant (rangedResist 0.2,
~5x plus de coups). Fonctionnel, mais la conversation qui a suivi a
précisé une conception plus riche que ça ne couvre pas encore — voir
ci-dessous. À revoir/étendre, pas à refaire de zéro.

## Engins de siège : équipage vivant plutôt que fusion abstraite

Précision importante sur le fonctionnement voulu, différente de
l'implémentation actuelle (v0.13/v0.22 : les ennemis regroupés
disparaissent, remplacés par un objet "engin de siège" abstrait unique) :

- Les soldats qui décident de construire un engin (bouclier, trébuchet…)
  **ne disparaissent pas et ne fusionnent pas** avec la machine — ce sont
  toujours des individus, visibles, chacun avec sa propre vie, positionnés
  autour de l'engin selon son rôle (derrière pour un bouclier — protégés
  des tirs à distance tant qu'ils y sont ; tout autour pour faire
  manœuvrer un trébuchet, "~12 personnes" selon la référence donnée).
- Ils restent **tuables individuellement au corps à corps** (sortie) sans
  devoir "casser" une carapace commune d'abord.
- Si des soldats de l'équipage meurent, **d'autres soldats ailleurs sur le
  champ peuvent venir prendre leur place** — construire l'engin s'il n'est
  pas fini, ou l'opérer une fois construit. La machine elle-même n'est
  pas liée à des individus précis.
- Capacité proposée pour le bouclier : 2 fondateurs + jusqu'à 1
  supplémentaire (3 au total) qui peuvent venir s'abriter derrière.
- **Portée à distance** : le bouclier reste attaquable à distance (pas
  d'immunité), juste beaucoup plus résistant — cohérent avec le
  rangedResist déjà en place. Question encore ouverte, explicitement pas
  tranchée par le joueur pendant la discussion : faut-il aussi permettre
  aux soldats de **réparer l'engin en continu** pendant qu'il encaisse des
  tirs (à un rythme dépendant du nombre de soldats dessus) ? Si oui, ça
  change l'équilibre : avec peu de tourelles, tirer à distance sur un
  bouclier entretenu pourrait devenir inutile, sauf à en avoir beaucoup.
  Complexité reconnue par le joueur lui-même ("il faut faire un choix...
  on est dans une situation d'équilibre") — **pas encore tranché**,
  vraisemblablement pas la même règle indéfiniment ; prévoir plusieurs
  itérations d'équilibrage une fois une première version jouable en place
  plutôt que de viser le bon réglage du premier coup.
- Se pose aussi la question de **cibler la machine directement vs cibler
  l'équipage qui la construit/répare** — un vrai choix tactique à
  concevoir, pas juste une case à cocher.

Chantier plus lourd qu'une simple valeur de résistance : implique de
retravailler le modèle de données (état.siegeEngines redevient un
regroupement de soldats individuels + un objet "machine" séparé plutôt
qu'un seul objet fusionné), le rendu (plusieurs soldats + la machine,
pas une seule pastille), et l'IA (rejoindre/quitter un équipage). À
concevoir plus en détail avant de coder.

## Priorité de ciblage à la sortie → fait en v0.25

Un engin de siège en premier (déjà le cas depuis v0.13) ; à défaut,
l'ennemi le plus proche du mur (ou approchant) au lieu de rester planté
sans rien faire. La partie "ennemi en train de construire un engin, ou
qui porte une échelle" reste à faire — dépend d'idées pas encore
construites (équipage vivant, échelle portée).

## Princesse : vivante et utile en haut, absente en bas

Fait en v0.23 : vraie jauge de vie + barre affichée au-dessus de sa tête,
vulnérable en haut aussi (pas seulement en bas), régénération de fin de
vague (moitié du manquant, comme le seigneur).

Fait en v0.24 : déplacement vivant **en haut seulement** (erre sur toute
la plateforme, va se poster près du seigneur dès 5 ennemis ou plus à
proximité), réparation à deux 3x plus rapide (uniquement si elle est en
haut), ciblage prioritaire absolu (decoy) sur le seigneur et les
tourelles quand elle est menacée.

**Pas encore fait** : déplacement vivant **en bas dans le jardin** (elle
reste au point fixe actuel une fois descendue), affichage du gain d'or
au-dessus de sa tête. Détail d'origine conservé ci-dessous pour ces
parties restantes.

Rassemblé de plusieurs remarques successives sur la princesse :
- **En haut du donjon** (comportement par défaut) : elle ne doit pas être
  statique. Elle se promène près du sommet quand rien ne se passe, se
  rapproche du seigneur quand il y a beaucoup d'ennemis (pour le
  "soutenir"), et si le seigneur va réparer, elle vient réparer avec lui —
  la réparation à deux va plus vite.
- **En bas dans le jardin** : elle doit se promener dans le jardin (pas
  rester immobile), pas seulement à un point fixe — le seuil de danger
  (nombre d'ennemis proches, ~2 dans la formulation donnée, à retrancher
  de la valeur actuelle codée) doit tenir compte de ça. Elle **n'aide
  jamais à la réparation depuis le jardin**, uniquement depuis le sommet.
- **Affichage au-dessus de sa tête** : le gain d'or régulier qu'elle
  rapporte (pour que le bonus se voie, pas juste un pourcentage caché) et
  une barre de vie, sur le modèle de celle du seigneur.
- **Régénération** : comme le seigneur, elle ne régénère pas sa vie sauf en
  fin de vague, et seulement la moitié du manquant (pas un plein rétablissement).
- **Rappel du bonus** (à revérifier dans le code au moment de l'implémenter) :
  gain d'or en pourcentage quand elle est en bas, gain absolu supplémentaire
  suggéré aussi (1 pièce/2s seule, 1 pièce/s si le roi vient la rejoindre —
  voir section câlin ci-dessous) — détail économique encore à trancher.
- **Décoy / ciblage prioritaire** : si elle est en bas et refuse de remonter
  pendant que le seigneur sort charger, le seigneur ET les tourelles doivent
  prioriser les ennemis qui l'attaquent, elle, en particulier. Objectif :
  une vraie tactique émergente peut apparaître (les ennemis qui foncent sur
  elle pour détourner la défense pendant qu'un autre groupe attaque le
  donjon ailleurs) — un comportement pas scripté à la main, qui doit
  émerger du système de priorités plutôt que d'un script dédié. Référence
  donnée : le "système de mémoire/stratégie" d'un des autres jeux du
  portfolio (à retrouver/comparer le principe le moment venu).

## Roi et Reine : entrée/sortie par la porte uniquement → fait en v0.27

Le seigneur passe désormais toujours par DOOR_ANGLE pendant la
transition haut/bas, quelle que soit sa vraie destination, avant de la
reprendre une fois effectivement de l'autre côté. La princesse (déjà
gérée séparément depuis v0.25) faisait déjà de même pour sa propre
transition.

## Câlin roi/reine : régénération rapide à deux → fait en v0.23

Implémenté : tap = bascule descendre/remonter (comme avant) ; maintien
(uniquement si elle est déjà en bas) = le seigneur la rejoint, 3s de
maintien pour un retour à 100% pour les deux, cœur affiché au-dessus
d'eux. Au relâchement, léger temps de rémanence puis reprise de la file
de priorité normale (retour en haut, ou sortie si ce bouton est
maintenu en même temps).

## Roi livré à lui-même : errer, pas revenir à la porte → fait en v0.27

Erre maintenant sur le terrain (angle et rayon aléatoires, re-tirés
toutes les quelques secondes) au lieu de rester planté devant la porte.
**Pas encore fait** : un éventuel bonus de régénération en "nageant"
dans les douves — idée à l'étude, pas construite.

## Ennemis : apparition et portée de tir → fait en v0.26

Rayon d'apparition calculé dynamiquement selon la forme de l'écran
(l'ellipse projetée doit toujours contenir tout le cadre visible), et le
tir vise n'importe quelle cible réellement visible à l'écran plutôt
qu'une portée fixe.

## Pont de fortune sur les douves → fait en v0.28

Une vague qui se fait ralentir dans l'eau envoie quelques soldats (pas
tous) poser un petit pont/planche (rectangle, largeur = leur diamètre,
longueur un peu plus que la largeur des douves) — ça leur prend un
instant à poser, et une fois posé toute vague suivante peut traverser
sans ralentir. Détruisible (via sortie) — s'il n'est pas détruit, les
vagues suivantes continuent de s'en servir.

## Douves décalées du jardin → fait en v0.25

## Effets de mort → fait en v0.26

## Neige / effet de profondeur en particules → fait en v0.30

Des flocons (gros, façon boules de neige stylisées) qui tombent avec un
léger effet de vent latéral, sur plusieurs plans de profondeur — gros et
rapides près de la caméra, petits et lents loin — pour un sentiment d'air/
de volume. Fait en pur espace écran (indépendant de la caméra iso), 3
plans (34/20/11 flocons, tailles et vitesses croissantes), vent latéral en
sinus par flocon.

## Fausse pub à la défaite

Sur l'écran de défaite, proposer une option façon "publicité factice avec
un faux message d'erreur" qui dit en substance "vous pouvez continuer quand
même" — référence donnée à ce qui existe déjà dans un des autres jeux du
portfolio (à retrouver et adapter, pas juste copier).

## Bugs signalés à vérifier

- **Arbres/jardin peu fluides en tournant la caméra** : investigué (v0.25)
  — les buissons sont des positions monde fixes, pas d'animation, rendu
  via sprites en cache (blit simple, pas de recalcul par frame). Aucun
  bug trouvé dans le code lui-même. Si ça reste perceptible, comparer au
  compteur FPS (menu) pendant la rotation pour distinguer une vraie
  baisse de perf d'autre chose (à revoir avec des chiffres si le
  problème persiste).
- **Le seigneur passe derrière les tourelles en tournant vite** → fait en
  v0.25 : tourelles décalées d'un cran vers le bord (TURRET_R), vraie
  séparation radiale au lieu du même rayon que le seigneur. **Pas encore
  fait** : la patrouille de créneaux (saut de tourelle en tourelle après
  une demi-seconde d'immobilité, recul d'un cran au sol en tournant) —
  animation à part entière, plus lourde que la correction du bug lui-même.

## Système d'éclairage à concevoir

Remarque sur l'éclairage actuel du donjon (v0.16) : une face reste
éclairée de la même façon quelle que soit la rotation de la caméra
(lumière fixée dans le repère du monde, pas de la caméra) — jugé comme un
effet réussi à garder et à retenir pour une future passe graphisme plus
large sur l'éclairage. Ne rien changer ici, juste s'en souvenir.

## Pistes de style graphique à l'étude

- **Sprites pré-rendus multi-angles** (façon jeux isométriques classiques :
  Age of Empires II, Diablo 1/2, RollerCoaster Tycoon...) : rendre un
  modèle 3D (Blender) sous ~36 angles fixes (tous les 10°) et afficher la
  bonne image selon l'angle de caméra. Techniquement possible mais un
  changement d'architecture complet (le rendu actuel est vectoriel/
  procédural, pas des sprites) — nécessiterait de revoir comment les
  éléments dynamiques (dégâts, profondeur, entités qui bougent) s'articulent
  avec des images figées. Pas retenu pour l'instant, noté comme piste.
- **Style "sans courbes" (façon Monument Valley)** : silhouettes à facettes
  planes, aucune courbe ni dégradé. Confirmé plus simple à dessiner que
  notre approche actuelle (cercles + dégradés) et cohérent avec la
  direction déjà prise sur le donjon (facettes, v0.16) — bon candidat pour
  étendre ce langage visuel aux autres éléments (ennemis, tourelles...) le
  jour où on retravaille le look général.

## Mode "Test Perspective" dans le menu

Demande d'origine, pas encore construite dans le jeu (toute l'exploration
faite jusqu'ici est restée dans une maquette à part, en dehors du dépôt —
voir le fil de discussion) : un bouton dans le menu qui bascule le jeu
d'une projection axonométrique (actuelle) à une vraie caméra en
perspective (point de fuite hors champ, en haut de l'écran). La maquette
a validé le sens correct (proche = grand comme aujourd'hui, loin = petit
vers un point de fuite toujours hors cadre) et une plage de profondeur
utile d'environ 8-10x la distance joueur→donjon avant qu'un repère
devienne trop petit pour se lire.

Réflexion gameplay associée : contrairement à l'axonométrie (où un
ennemi occupe la même taille à 50m ou 500m, donc l'espace visible est
limité par la taille de l'écran), la perspective permettrait de voir un
champ de bataille plus large dans le même cadre — repérer les prochains
arrivants plus tôt. Contrepartie : les repères lointains rétrécissent,
donc moins lisibles individuellement.

Pas encore implémenté dans `index.html` — nécessiterait de dupliquer/
adapter `project()` avec une vraie caméra (comme dans la maquette) et un
bouton de bascule, sans casser l'ancien rendu axonométrique par défaut.

## Direction graphique "fil de fer" (fond noir, très début informatique)

Repéré sur une maquette de comparaison de perspective (fond noir, formes
en traits, points jaunes en contraste) : jugé très beau, esthétique
"début de l'informatique" façon jeux vectoriels. À garder en mémoire
comme piste de style à part entière, réutilisable plus tard (pas
forcément pour le rendu du jeu par défaut, mais comme option/thème visuel
possible).

## Notes de contexte (pour ne rien perdre)

- "Tour" = les tourelles construites par le joueur (créneaux/cubes) ;
  "château"/"donjon" = la structure principale qui grandit/rétrécit.
  Vocabulaire à garder cohérent dans le code et les futures discussions.

## Progression par formule plutôt que par niveaux codés à la main

Idée venue d'une discussion sur Forge Line (le jeu-frère du portfolio),
à appliquer ici aussi — résumé pour ne pas avoir à refaire la discussion
depuis zéro.

**Le principe** : au lieu de coder chaque palier d'amélioration à la main
(niveau 1, niveau 2, niveau 3… avec un plafond en dur), donner à chaque
type d'élément achetable (tourelles, améliorations du joueur, etc.) une
formule qui calcule sa force au palier n, sans plafond codé — en théorie
illimité. Si quelqu'un accumule énormément d'or, la formule calcule
directement le palier 300 sans qu'on ait eu à l'écrire une par une.

**Modèle retenu côté Forge Line** (à valider/adapter ici, pas imposé) :
- Coût du palier n = coût de base × 1,027^(n-1) — chaque palier coûte
  2,7% de plus que le précédent (croissance géométrique). Avec ce taux,
  environ 1 million d'or dépensé au total amène vers le palier 300 — un
  repère donné par l'utilisateur, pas une contrainte stricte.
- Puissance au palier n : trois formes possibles selon l'effet voulu —
  linéaire (chaque palier ajoute pareil, mais devient dérisoire face au
  coût qui explose à très haut palier), géométrique (la puissance grimpe
  aussi de plus en plus vite, garde un rapport puissance/coût stable —
  recommandé côté Forge Line), ou en racine/logarithme (ralentit
  volontairement en haut de l'échelle, pour que beaucoup investir reste
  fort sans devenir totalement disproportionné). Pas encore tranché côté
  Forge Line non plus au moment de cette note — à décider indépendamment
  ici si le principe est repris.

Pas encore codé ni côté Forge Line ni ici — encore au stade discussion
au moment de cette note (étape 1 : se comprendre ; étape 2 : concevoir ;
étape 3 : coder — demandé explicitement dans cet ordre côté Forge Line).

## Décor procédural (jardin/eau, buissons)

Idée en passant : une fois qu'on aura une vraie logique de progression
(ci-dessus), il pourrait rester une place pour un peu de génération
procédurale côté décor — PAS le level design/gameplay lui-même, juste
des touches visuelles. Exemples évoqués : le jardin ou l'eau autour du
donjon qui fonce progressivement, ou l'ajout de buissons au fil du jeu.
Idée brute, à retravailler plus tard.

## Musique de fond → fait en v0.29

Ajouter une musique de fond en boucle, avec un bouton pour la couper dans
le menu. Fichier audio fourni par l'utilisateur, converti en mono 22kHz
pour rester léger dans le dépôt (music.wav, ~2 Mo). Démarre sur le même
premier geste que le déblocage audio existant ; préférence ON/OFF retenue
en localStorage.

## Ennemis visibles dès leur apparition → fait en v0.29

Signalé comme bug/manque d'intérêt : avec le rayon d'apparition "pire cas"
introduit en v0.26 (hors écran quel que soit l'angle), les ennemis
marchaient plusieurs secondes hors champ avant d'apparaître réellement à
l'écran — y compris le tout premier ennemi de la vague 1. Corrigé en
calculant, par ennemi, le rayon minimal qui le garde hors écran POUR SON
ANGLE précis (au lieu du pire cas sur tous les angles), plus un boost de
vitesse tant qu'il n'est pas effectivement visible — l'apparition hors
écran reste garantie, mais la marche invisible devient minime.

## Sortie du seigneur trop rapide (téléportation) → fait en v0.29

Signalé : en sortie vers un engin de siège ou un pont lointain, le
déplacement radial (ease exponentiel, pensé pour les petits ajustements
comme réparer une tourelle) couvrait presque toute la distance en une ou
deux frames — lu comme une téléportation plutôt qu'une marche. Corrigé en
plafonnant ce déplacement à une vraie vitesse de marche (PLAYER_WALK_SPEED).

## Bouton "Remonter" princesse parfois sans effet → fait en v0.29

Signalé : après avoir fait descendre la princesse, le bouton pour la faire
remonter ne répondait parfois plus. Cause : sur un petit bouton mobile, un
tap pouvait déclencher pointerleave (le doigt dérive hors des limites du
bouton) PUIS pointerup — deux bascules de la cible qui s'annulaient.
Corrigé avec la capture de pointeur + une garde anti-double-déclenchement.
