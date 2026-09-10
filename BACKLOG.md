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

## Vue intérieure du donjon → version visuelle faite en v0.38, pas encore fait : la vraie scène/gameplay

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

**Fait en v0.38** : un rideau CSS plein écran (bouton 🔥), roi + princesse
(si vivante) au coin d'un feu animé, table d'échecs suggérée. **Pas fait,
délibérément mis de côté par manque de temps** : la vraie scène en vue
isométrique (escaliers, tonneaux, personnages dessinés comme le reste du
jeu plutôt qu'en emoji), tout gameplay propre à cet espace, et une vraie
pause/mécanique liée au fait d'y être (pour l'instant le jeu tourne
derrière sans que rien ne change).

## Huile bouillante → fait en v0.35

Depuis l'ajout de la plateforme (v0.5) qui dépasse le donjon, il y a de la
place pour percer des trous dans le rebord et y verser de l'huile
bouillante sur les ennemis en bas. Pas encore de mécanique, juste rendu
possible par la plateforme.

Mécanique précisée en session : bouton dédié, désactivé tant qu'aucune
tourelle n'existe. Tenu, le seigneur marche jusqu'à la tourelle la plus
proche et, une fois là, verse périodiquement des dégâts de zone sur tout
attaquant stalled au pied du mur près de cette tourelle — simplifié par
rapport à la description (pas de zone d'approvisionnement séparée à
laquelle faire des allers-retours), noté ici en cas de vouloir la vraie
version plus tard.

## Échelle portée par un ennemi → fait en v0.35

Un type d'ennemi qui porte une échelle, la pose contre le donjon, et
permet aux autres de monter directement sur la plateforme sans avoir à
démolir le mur — un chemin d'attaque alternatif à ajouter au système de
saut existant (qui, lui, reste tel quel : rare, lié à la hauteur du
donjon). Idée brute, pas conçue.

À partir de la vague 4, un attaquant par vague porte une échelle (teinte
bois distincte). Contrairement au saut (rare, dépend de castleH), planter
une échelle est garanti après un temps fixe — une vraie menace à
prioriser avant qu'elle ne plante.

## Deux routes serpentantes (retrouvée après une coupure de résumé) → fait en v0.37

Mentionnée en session, perdue avant d'être notée ici (aucune trace au
moment où le joueur a demandé si elle avait été prise en compte) —
reconstituée sur demande directe, ne pas la reperdre cette fois.

Deux chemins qui arrivent de loin en serpentant et rejoignent le château.
Les ennemis avancent plus vite dessus, donc ils choisissent de les
utiliser ou non — pour pouvoir encercler par exemple (en restant en
tout-terrain, plus lent mais réparti sur tout le pourtour).

Fait : deux angles fixes, tracé sinusoïdal qui se redresse en approchant
du mur (arrivée nette, pas n'importe où). ~40% des attaquants (hors
porteurs d'échelle/de pont) prennent une route à l'apparition ; sur la
route, vitesse boostée et angle asservi au tracé ; sinon, comportement
normal (oscillation libre, vitesse normale) — c'est ce qui permet
l'encerclement.

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

## Engins de siège : équipage vivant plutôt que fusion abstraite → fait en v0.31 (première passe), pas encore fait : rendu multi-soldats

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

**Fait en v0.31** (décision prise en session : réparation continue, oui) :
- Chaque engin garde un compte `crew` (pas des soldats individuellement
  rendus) plafonné à fondateurs+1 — la formation n'absorbe que jusqu'au
  plafond, les traînards en trop restent des ennemis normaux au lieu de
  disparaître pour rien.
- Un ennemi stalled près d'un engin déjà formé peut le rejoindre plus
  tard (renfort jusqu'au plafond, sans changer de palier).
- Tant qu'il reste de l'équipage, l'engin régénère son hp en continu — le
  tir à distance est plafonné à 1 hp minimum sur un engin (jamais achevé
  par ce biais), la sortie devient la seule vraie option, comme décidé.
- La sortie tue l'équipage un par un (plus un pool de hp partagé) ; la
  machine tombe à 0 équipage.
- Rendu : une rangée de pastilles au-dessus de la barre de vie montre
  l'équipage restant / le plafond — **toujours une seule pastille pour la
  machine elle-même**, pas plusieurs soldats individuellement dessinés
  autour (le "chantier plus lourd" du rendu multi-soldats, ci-dessus,
  reste à faire si voulu).
- **Pas encore fait** : cibler l'équipage vs la machine comme deux choses
  distinctes à l'écran (actuellement un seul objet cliquable/ciblable) ;
  ré-équilibrage ultérieur si le tir à distance s'avère *trop* inutile.
- **Décidé à la place de Pierre (2026-09-09, "choisis à ma place")** :
  pas fait, volontairement — la sortie tue déjà l'équipage un par un
  (voir "Fait en v0.31" ci-dessus), ce qui couvre l'intention tactique
  de base sans ajouter deux cibles cliquables séparées à l'écran. À
  reprendre seulement si le tir à distance s'avère concrètement trop
  inutile en jouant, comme déjà noté.

## Priorité de ciblage à la sortie → fait en v0.25

Un engin de siège en premier (déjà le cas depuis v0.13) ; à défaut,
l'ennemi le plus proche du mur (ou approchant) au lieu de rester planté
sans rien faire. La partie "ennemi en train de construire un engin, ou
qui porte une échelle" reste à faire — dépend d'idées pas encore
construites (équipage vivant, échelle portée).

## Princesse : vivante et utile en haut, absente en bas → tout fait (v0.23-v0.25)

Fait en v0.23 : vraie jauge de vie + barre affichée au-dessus de sa tête,
vulnérable en haut aussi (pas seulement en bas), régénération de fin de
vague (moitié du manquant, comme le seigneur).

Fait en v0.24 : déplacement vivant **en haut seulement** (erre sur toute
la plateforme, va se poster près du seigneur dès 5 ennemis ou plus à
proximité), réparation à deux 3x plus rapide (uniquement si elle est en
haut), ciblage prioritaire absolu (decoy) sur le seigneur et les
tourelles quand elle est menacée.

Fait en v0.25 (rattrapé ici, pas marqué au moment du ship) : déplacement
vivant **en bas dans le jardin** aussi — elle erre sur un petit patch
autour de la porte au lieu de rester à un point fixe — et affichage du
gain d'or au-dessus de sa tête quand elle est en bas. Détail d'origine
conservé ci-dessous pour mémoire.

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

## Fausse pub à la défaite → fait en v0.36 (version simple, pas copiée de l'original)

Sur l'écran de défaite, proposer une option façon "publicité factice avec
un faux message d'erreur" qui dit en substance "vous pouvez continuer quand
même" — référence donnée à ce qui existe déjà dans un des autres jeux du
portfolio (à retrouver et adapter, pas juste copier).

Version simple approuvée en session (pas d'accès au dépôt Knight Wars
pour reprendre l'original) : #fakeAd, gag volontairement criard (fond
jaune/rouge, fausse alerte sécurité, fausse barre de scan à 99%), affiché
avant l'écran de défaite normal — "Continuer quand même" révèle l'écran
réel en dessous.

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
  séparation radiale au lieu du même rayon que le seigneur. La patrouille
  de créneaux (saut de tourelle en tourelle après une immobilité prolongée,
  recul d'un cran au sol en tournant) → **fait en v0.44**, avec un délai
  d'immobilité bien plus long que les 0.5s notés ici à l'origine — voir
  l'entrée v0.44 plus bas pour pourquoi.

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

## Mode "Test Perspective" dans le menu → intégré au jeu en v0.39

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

**Fait en v0.39** : bouton "Caméra" dans le menu (Axonométrique ↔
Perspective), persisté. `project()` lui-même bascule entre les deux
formules selon le mode — un seul point de bascule, donc les dizaines de
fonctions de dessin (et tout le placement à l'écran : UI, cibles, clics)
suivent sans avoir été modifiées individuellement. Caméra reculée/élevée,
inclinée vers le bas, division perspective classique ; validée
numériquement avant d'être branchée (profondeur toujours positive dans
la plage de jeu, centrage horizontal correct, point de fuite hors-écran
en haut comme sur le comparateur). Testé en jeu réel dans les deux styles
Couleur et Phosphore.

**Pas fait** : la logique de jeu elle-même (rayon d'apparition hors
écran, ciblage à l'écran) reste pensée pour l'axonométrie — fonctionne
en pratique en perspective (testé, pas d'erreur), mais n'a pas été
ré-étudiée pour en tirer parti (ex. voir plus loin dans le même cadre,
comme évoqué ci-dessus). Reste un habillage visuel pour l'instant, pas
un vrai second mode de jeu.

## Direction graphique "fil de fer" (fond noir, très début informatique) → intégré au jeu en v0.32, activé par défaut

Repéré sur une maquette de comparaison de perspective (fond noir, formes
en traits, points jaunes en contraste) : jugé très beau, esthétique
"début de l'informatique" façon jeux vectoriels. À garder en mémoire
comme piste de style à part entière, réutilisable plus tard (pas
forcément pour le rendu du jeu par défaut, mais comme option/thème visuel
possible).

Premier essai publié en artefact séparé, hors dépôt (même géométrie que le
vrai donjon, traits phosphore sur fond noir, glow, scanlines, rotation).
Un second artefact a servi de comparateur vert/ambre/cyan + contour plein/
filaire pur en direct → https://claude.ai/code/artifact/97256e99-0532-45ba-9340-5a9863d27460
— **pas encore consulté par le joueur au moment du ship de v0.32**.

**Fait en v0.32**, intégré au jeu (décidé en session : activé par défaut,
pas juste une option cachée) :
- Bouton "Style" dans le menu, cycle Phosphore → Filaire pur → Couleur →
  Phosphore. Persisté (bo_phosphorStyle).
- Tout le rendu existant (ennemis, tourelles, princesse, engins de siège,
  ponts, particules, barres de vie, chrome/boutons) passe par un seul
  wrapper générique autour du contexte canvas (wrapPhosphor) plutôt que
  par une réécriture fonction par fonction.
- Le donjon a une vraie silhouette calculée (pas juste le contour de
  chacune de ses facettes) : exploite le fait que, dans cette projection
  précise, le point le plus à gauche/droite d'un cercle projeté est
  toujours au même angle quel que soit son rayon — donc le contour exact
  de tout l'édifice (marches, corniche, plate-forme comprises) se lit
  directement sur son propre profil (rayon, hauteur), sans calcul de coque
  convexe. Vérifié numériquement.
- Chrome (barres, menu, tous les boutons d'action) : monochrome noir/vert,
  plus de couleurs d'accent distinctes par bouton (décidé en session).

**Décidé à la place de Pierre (2026-09-09, "choisis à ma place")** :
- Teinte : reste vert (#46ffa0), le défaut déjà en place et déjà testé
  — pas de raison de changer à l'aveugle sans avoir vu le comparateur.
  Reste changeable en une ligne (`PHOSPHOR_LINE`) si Pierre change d'avis
  après l'avoir vu en jeu.

**Pas encore fait / en attente** :
- Le mode "Filaire pur" réutilise le rendu détaillé à 24 facettes
  (drawCastle d'origine) tel quel, pas la silhouette — cohérent avec l'idée
  "montre tous les traits", mais pas vérifié visuellement en jeu.
- Pas de retour visuel testé en conditions réelles (uniquement vérifié par
  la lecture du code + un calcul numérique de la formule de silhouette) —
  premier lancement en jeu à faire pour confirmer que ça rend bien.

## Notes de contexte (pour ne rien perdre)

- "Tour" = les tourelles construites par le joueur (créneaux/cubes) ;
  "château"/"donjon" = la structure principale qui grandit/rétrécit.
  Vocabulaire à garder cohérent dans le code et les futures discussions.

## Progression par formule plutôt que par niveaux codés à la main → fait en v0.31 pour le jardin

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

**Fait en v0.31**, pour le jardin uniquement : géométrique choisi (rapport
coût/revenu stable), gardenCost(n) = 15 × 1,35^(n-1), gardenRate(n) =
1 × 1,35^(n-1) — même taux des deux côtés, sans plafond de palier. Taux
35%/palier plutôt que les 2,7% de Forge Line : l'économie de ce jeu-ci
tourne sur des dizaines/centaines d'or, pas sur un million — un taux plus
doux aurait rendu les premiers paliers quasi gratuits par rapport aux
anciens (15/40/100/250). **Pas fait** : les douves restent à 4 paliers
fixes codés en dur — leur géométrie (rayon d'eau, buissons inondés,
BRIDGE_MAX_COUNT) est intrinsèquement finie, pas un bon candidat pour une
formule sans plafond.

**Décidé à la place de Pierre (2026-09-09, "choisis à ma place")** : les
tourelles et les autres "améliorations du joueur" restent aussi à leurs
paliers fixes actuels, pas convertis en formule sans plafond — pas de
besoin clair identifié (contrairement au jardin, où "accumuler
énormément d'or" a un sens), et ça ajouterait de la complexité
d'équilibrage sans bénéfice évident. Peut être repris si un besoin
concret apparaît en jouant.

## Décor procédural (jardin/eau, buissons) → l'eau qui fonce existe déjà, le reste pas fait

Idée en passant : une fois qu'on aura une vraie logique de progression
(ci-dessus), il pourrait rester une place pour un peu de génération
procédurale côté décor — PAS le level design/gameplay lui-même, juste
des touches visuelles. Exemples évoqués : le jardin ou l'eau autour du
donjon qui fonce progressivement, ou l'ajout de buissons au fil du jeu.
Idée brute, à retravailler plus tard.

**Constat en session** : l'eau des douves fonce déjà progressivement,
mais par palier acheté (state.moatLevel), pas en continu/autonome — 4
teintes de plus en plus sombres/profondes selon le tier. Approuvé pour
une "première passe" en session mais pas retravaillé au-delà de ce qui
existait déjà, faute de temps — l'idée d'un décor qui évolue tout seul
(buissons qui apparaissent au fil du jeu, pas seulement au niveau du
jardin acheté) reste à faire.

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

## Douves/routes/porte/filaire/escalier/engins de siège → fait en v0.41

Rattrapage : plusieurs correctifs signalés en session groupés dans une
seule version. Douves : niveau 1 deux fois moins large, plus de dégâts —
seulement un ralentissement (signalé : "faut juste que ça ralentisse").
Routes : largeur physique constante au lieu d'une largeur angulaire fixe
(qui grossissait avec la distance en axonométrie) ; portée jusqu'à
SPAWN_R (garanti hors écran quel que soit l'angle) au lieu d'un rayon fixe
qui s'arrêtait court selon la rotation caméra. Porte/fenêtres : le vrai
bug était un décalage de 45° dans le calcul de face visible
(`cos(angle - rot)` au lieu de `cos(angle - rot - π/4)`) — la vraie
frontière de visibilité de ce repère axonométrique est centrée sur
`rot+π/4`, pas `rot`. Filaire : applique désormais le même remplissage
fond+contour que le phosphore (avant, rien n'était occulté, donc le roi et
les fenêtres restaient visibles "à travers" le donjon). Escalier à vis :
trou décoratif au centre de la plateforme (idée dite plus tôt, perdue,
retrouvée et posée). Engins de siège : SIEGE_GROUP_RADIUS remonté (45→68)
pour que les tiers 2/3 (trébuchet, tour de siège) aient une vraie chance
d'apparaître.

## Contour des routes en phosphore/filaire "en échelle" → fait en v0.40

Signalé : en phosphore/filaire, chaque petit segment de route dessinait
son propre contour complet, ce qui donnait des barreaux perpendiculaires
entre segments (effet "échelle") au lieu d'une route continue. Corrigé en
ne traçant que les deux bords, en continu sur tout un "run" (groupe de
segments contigus du même côté far/near), sans remplir chaque segment
séparément.

## Village de maisons, ruisseau traversant toute la carte, gouttes d'huile bouillante, bannière FIGHT! agrandie → fait en v0.43

Petit village de maisons décoratives (boîte + toit à deux pans, même
recette de facettes triées en profondeur que le donjon) dispersées dans
le jardin. Le ruisseau (jusque-là un segment local près du croisement
avec une route) traverse désormais toute la carte, perpendiculaire à la
route qu'il croise, avec un petit pont à l'endroit du croisement — demandé
en session : "doit traverser la carte", pas juste un segment local.
Animation de gouttes qui tombent quand on tient Huile bouillante appuyé
(particules dédiées, kind:'drip', traînée courte). Bannière FIGHT! agrandie
(84px au lieu de 58, contour plus épais) suite à un retour "trop petite".

## Routes moins serpentantes, ruisseau vraiment serpentant, cœur du câlin en pixel-art, tourelles orientées + ciblage par tourelle + patrouille → fait en v0.44

Quatre demandes groupées :

- **Routes moins serpentantes** : `ROAD_WIND_AMP` réduit de 0.55 à 0.16
  ("plus droite, pas juste droite, mais qui serpente beaucoup moins").
- **Ruisseau vraiment serpentant** : jusqu'ici une ligne parfaitement
  droite (juste perpendiculaire à la route qu'il croise) ; ajout d'un
  décalage sinusoïdal latéral le long de sa ligne centrale (nul pile au
  croisement, pour que le pont reste bien aligné), avec le même découpage
  en segments/runs far-near que les routes pour un rendu propre en
  phosphore/filaire.
- **Cœur du câlin en pixel-art** : remplace l'emoji ❤ par une grille de
  pixels dessinée case par case (contour rouge foncé, remplissage
  magenta, deux surbrillances lilas sur la ligne la plus large, pointe à
  un seul pixel en bas), à partir d'une image de référence fournie en
  session — "en respectant la grille de pixel scrupuleusement".
- **Tourelles orientées individuellement** : avant, toutes les tourelles
  partageaient le même jeu de coins de carré (SQUARE_PTS), donc toutes
  leurs arêtes de cube restaient parallèles entre elles quelle que soit
  leur position sur l'anneau. Chaque tourelle utilise désormais son
  propre carré tourné de son propre angle autour du donjon (un cube
  "copié-collé puis tourné depuis le centre de son cercle", demandé en
  session) — une paire d'arêtes pointe radialement, l'autre tangentiellement.
- **Chaque tourelle vise l'ennemi le plus en face d'elle** : avant, toutes
  les tourelles (et le seigneur) partageaient la même cible "la plus
  proche du mur, visible à l'écran" (nearestVisibleTarget). Nouvelle
  fonction `nearestVisibleTargetFacing(fromAngle)` : même filtre de
  visibilité, mais classée par écart angulaire avec l'angle propre de la
  tourelle plutôt que par distance radiale. Le ciblage du seigneur lui-même
  n'a pas été touché (demande explicitement limitée aux tourelles).
- **Patrouille de tourelle en tourelle** (idée retrouvée dans ce fichier,
  notée "pas encore fait" : "saut de tourelle en tourelle après une
  demi-seconde d'immobilité"). Implémentée avec un délai bien plus long
  que les 0.5s d'origine : testé en session, à 0.5s la patrouille se
  déclenchait pendant la simple attente d'assez d'or entre deux achats de
  tourelle, ramenant le seigneur se planter à côté de la tourelle déjà
  posée juste avant chaque achat suivant — toutes les tourelles finissaient
  empilées au même endroit au lieu de se répartir sur l'anneau. Relevé à
  15s de vraie inactivité pour ne plus interférer avec le rythme normal de
  construction. Le "recul d'un cran au sol en tournant" de l'idée
  d'origine est fait aussi : le seigneur réduit son rayon pendant une
  rotation rapide de la caméra.

## Audit qualité (bugs + refactor + perf) → correctifs rapides faits en v0.45

Audit demandé en session (routine programmée), lecture seule d'abord —
rapport livré, feu vert reçu ("Fait"), puis les correctifs "vaut le coup
de faire bientôt" du rapport ont été appliqués :

- **`SQUARE_PTS` mort** → supprimé (resté inutilisé depuis le passage à
  `squareCornersAt(t.angle)` par tourelle en v0.44).
- **Tri en profondeur faux en mode Perspective pour ce qui est "sur la
  plateforme"** → corrigé : le seigneur et un ennemi monté en haut
  utilisaient `y=0` pour leur profondeur au lieu de leur vraie hauteur
  (`platformTopY()`/`playerWorld().y`), sans effet en axonométrie
  (`depth = rx+rz`, indépendant de `y`) mais faussant l'ordre d'occlusion
  en Perspective (`depth = -z2`, qui dépend de `y` via l'inclinaison
  caméra). Utilisent maintenant leur vraie hauteur comme les tourelles et
  la princesse.
- **Clé du cache de sprites fragile** → `getSprite`/`drawBallSprite`
  cachaient par `key` seul (+ style), sans le rayon ni les couleurs comme
  le prétendait le commentaire — sans bug actif (chaque `key` avait un
  seul (rayon, couleurs) associé dans tous les appels existants) mais
  risque silencieux pour un futur appel qui réutiliserait une `key` avec
  un rayon/couleur différent. `drawBallSprite` construit maintenant une
  clé complète (`key:rad:colorA:colorB`).
- **`music.wav` (2 Mo) en `preload="auto"`** → passé à `preload="none"` :
  la lecture est de toute façon bloquée jusqu'au premier geste (mobile),
  inutile de le télécharger dès le chargement de la page pour un joueur
  qui coupera peut-être la musique ou n'ira jamais jusqu'au geste.
  `bgMusic.play()` déclenche le chargement réel au bon moment.
- **Géométrie des routes/du ruisseau reconstruite à chaque frame** →
  mise en cache : `roadSegs(idx)` et `streamSegs()` ne dépendent que de
  constantes et de `SPAWN_R` (qui ne change qu'au resize), donc n'ont
  plus besoin d'être reconstruites (40+48 points trigonométriques, deux
  routes) 60 fois par seconde — seul le classement far/near, qui dépend
  vraiment de la rotation caméra, reste recalculé à chaque frame. Cache
  invalidé dans `resize()`. Attention en y retouchant : les variables de
  cache (`_roadSegsCache`, `_streamSegsCache`) sont déclarées tout en
  haut du script, près de `SPAWN_R`, pas à côté de leurs fonctions — même
  piège de TDZ que celui qui avait cassé le jeu en v0.30 (resize() tourne
  avant que le script atteigne une déclaration `let`/`const` plus bas).

**Pas fait** (le rapport le classait "peut attendre") : découpage de
`update()` (~600 lignes, une seule fonction), extraction d'un helper
générique pour le split far/near répété ~8 fois dans `render()`, fusion
de `drawRoadRun`/`drawStreamRun` (quasi identiques). Rien d'urgent tant
qu'aucune nouvelle feature ne vient justement toucher ces zones.

## Grosse consigne du 2026-09-08 (dictée vocale, routine programmée) — en cours

Consigne complète reçue via une routine programmée, retranscrite et
structurée par Pierre. Notée intégralement ici avant tout travail (règle
habituelle : rien ne se perd), statut de chaque point à jour au fil de
l'avancement.

### Partie 1 — corrections Bastion Orbit

**A. Engins de siège à distance** → fait en v0.77 (voir plus bas pour le
détail complet). Bélier confirmé par Pierre ("très tanky, très lent,
gros dégâts au contact") et implémenté avec ces stats exactes.

**B. Ça doit grouiller de vie** — *pas fait*. Le "rendu multi-soldats"
déjà noté ailleurs dans ce fichier comme jamais fait : des vrais groupes
visibles, des équipages autour des engins, du mouvement partout — pas
juste 2-3 silhouettes isolées.

**C. Princesse et mécaniques utiles** — le volet "nombres flottants" fait
en v0.58 (voir Partie 2.4 ci-dessous pour le détail technique, commun
aux deux). Le reste ("chaque mécanique doit être réellement rentable")
reste à revoir mécanique par mécanique, *pas fait*.

### Partie 2 — uniformisation des 3 jeux (même consigne envoyée à Knight Wars et Forge Line — ces deux-là ne sont pas dans ce dépôt/cette session)

1. **Audio** → fait en v0.51. Musique ET bruitages fonctionnels (déjà le
   cas) + curseurs de volume séparés (musique / bruitages) dans le menu,
   0 à 100%, persistés en `localStorage`. L'ancien bouton "Musique :
   ON/OFF" a disparu — un curseur à 0% fait exactement la même chose,
   pas besoin d'un état séparé. `beep()`/`playPurr()` sautent carrément
   l'appel si bruitages=0 (une rampe exponentielle Web Audio vers 0 lève
   une `RangeError` — testé, un achat de tourelle bruitages=0 ne plante
   pas).
2. **Langue** → fait en v0.54. Anglais + français, auto-détection de
   `navigator.language` (fr* → français, tout le reste → anglais par
   défaut, décision de Pierre — voir "Réponses de Pierre" plus bas),
   avec un bouton "Langue" dans le menu pour forcer l'autre langue
   manuellement (le choix manuel est mémorisé en `localStorage` et prime
   ensuite sur l'auto-détection). Dictionnaire `I18N` (`fr`/`en`) +
   fonction `t(clé)` avec repli sur l'anglais si une clé manque.
   `applyI18nStatic()` couvre tous les textes fixes (boutons du bas,
   menu, écran "cosy", fausse pub, écran de fin) ; les boutons dont le
   texte dépend de l'état du jeu (Difficulté/Style/Teinte/Neige/Caméra/
   Douves/Jardin/Cheval/Descendre-Remonter) ont chacun leur propre
   `update*Btn()` déjà existant, désormais alimenté par `t()` — tous
   regroupés dans `refreshDynamicLangUI()`, rappelée par le bouton
   Langue pour que le changement soit immédiat, sans recharger la page.
   Vérifié (Playwright, contexte navigateur `locale: 'en-US'` et
   `locale: 'fr-FR'` séparément) : auto-détection correcte dans les deux
   cas, bascule manuelle FR↔EN immédiate, `<html lang>` mis à jour,
   aucune erreur console.

   **Limite assumée, notée honnêtement** : seule l'interface vivante est
   traduite. Le changelog (`#changelog`) reste en français uniquement —
   c'est un journal de développement à destination de Pierre, pas une
   mécanique de jeu, et le traduire aurait doublé ~40 lignes d'historique
   pour un bénéfice quasi nul. La future section "Astuces" (point 3
   ci-dessous, pas encore fait) devra en revanche être bilingue dès sa
   création — c'est elle qui compte comme interface de jeu.
3. **Section explicative (Astuces/FAQ/Conseils)** → fait en v0.84 (voir
   plus bas pour le détail complet). Règle à respecter dès maintenant,
   notée ici formellement : **tout commit qui touche une mécanique de
   gameplay met à jour la section explicative correspondante dans le
   même commit.** Idéalement, plus tard, un test automatique vérifiant
   que chaque constante de gameplay est référencée dans les textes —
   pas fait non plus.
4. **Lisibilité des mécaniques** — fait en v0.58/v0.59.
   - **Nombre flottant au-dessus de la tête pour tout gain d'or** → fait.
     `spawnFloatingGold(x, y, z, amount, highlight)` + `state.floatingTexts`
     (même schéma que `state.particles` : vieillit via `dt`, purgé à la
     fin de sa vie). UN seul point d'appel utilisé aux 4 endroits qui
     touchent `state.gold` : `killEnemy` (+1, à la position de l'ennemi),
     destruction d'un engin de siège par sortie (+5, à sa position),
     `callNextWaveEarly` (bonus de la vague écourtée, à la position du
     seigneur), et le tick de revenu du jardin (au pied de la princesse
     si elle est en bas à en profiter, sinon au centre du jardin —
     `highlight` quand son bonus ×1.5 s'applique, demandé explicitement
     en Partie 1.C : "gain visiblement supérieur"). Limite assumée : le
     fondu (alpha) ne se voit vraiment qu'en style Couleur (en pause,
     v0.56) — `wrapPhosphor` ignore l'alpha de `fillText` en Phosphore/
     Filaire, exactement comme `drawParticle` déjà en place l'acceptait ;
     en Phosphore/Filaire le nombre monte puis disparaît net en fin de
     vie plutôt que de s'estomper. Vérifié en Playwright (capture juste
     après un clic sur "Vague +") : le "+2" se lit clairement au-dessus
     du seigneur, aucune erreur console.
   - **Jauge/horloge circulaire au-dessus du personnage pour toute
     attente qui déclenche un effet** → fait en v0.59, sur les attentes
     "antagonistes" (celles que le joueur doit pouvoir anticiper — le
     camp du seigneur a déjà un retour visible par nature : animation
     d'attaque, projectile qui part). `drawWaitGauge(pos, rad, frac,
     color)` : un simple arc (PAS un anneau complet + arc par-dessus,
     voir plus bas pourquoi) tracé autour du personnage/de l'engin,
     jamais au-dessus (pour ne pas entrer en collision avec la barre de
     vie déjà affichée là). `frac` va de 0 (attente qui commence) à 1
     (effet sur le point de se déclencher). Appliqué à :
     - un ennemi qui pose un pont (`buildTimer`/`BRIDGE_BUILD_TIME`) ;
     - un ennemi au pied du mur, qu'il grignote la pierre ou plante une
       échelle (`timer`/1.2 ou `LADDER_SETUP_TIME`, couleur différente
       pour l'échelle — déjà prioritaire par sa couleur de corps, main-
       tenant aussi par sa jauge) ;
     - un ennemi juché sur la plateforme avant de frapper (`timer`/1.4) ;
     - un engin de siège (arbalète/trébuchet, ou tour une fois assez
       haute pour frapper) avant son prochain tir (`atkTimer`/
       `tier.cooldown`) — pas sur un bouclier (ne tire jamais) ni une
       tour encore en train de grandir (son fût qui pousse à vue est déjà
       son propre retour visuel, une jauge en plus aurait fait doublon).

     **Bug trouvé en testant, pas en relisant le code** : la première
     version dessinait une piste de fond (cercle complet, blanc très
     transparent) puis l'arc de progression par-dessus, dans sa couleur
     propre — en Couleur ça aurait marché, mais en Phosphore/Filaire (le
     seul style qu'on garde, v0.56) `wrapPhosphor` force TOUJOURS
     `stroke()` à la couleur pleine `phosphorLine()`, alpha ignoré : la
     piste de fond ressortait donc aussi opaque et de la MÊME couleur
     que l'arc de progression dessiné dessus, qui devenait invisible —
     un anneau complet et fixe, aucune information de progression
     lisible. Repéré sur capture (Playwright, ennemis forcés dans chaque
     état via `window.__DEBUG_STATE`, retiré depuis) : deux "cercles"
     qui semblaient pleins alors que leurs `frac` différaient nettement
     (58% vs 27%). Fix : plus de piste de fond du tout — l'arc seul
     suffit, il grandit visiblement depuis rien jusqu'au cercle complet.
     Revérifié après coup : les deux arcs se lisent bien à des longueurs
     différentes, plus de couleur codée en Phosphore/Filaire (comme le
     reste du jeu dans ces styles) mais la progression est claire.
     Limite assumée, symétrique à celle des maisons-cachettes plus haut :
     les attentes côté joueur (huile, réparation, sortie, tir des
     tourelles/du seigneur) n'ont pas de jauge — déjà un retour visuel
     par nature (animation, projectile qui part, bouton actif), moins
     "silencieuses" que les attentes ennemies qui, avant cette version,
     ne montraient RIEN avant que l'effet ne tombe.

### Partie 3 — difficulté (priorité n°1 de Pierre, sur les 3 jeux)

Objectif : courbe de difficulté digne des meilleurs jeux du marché — on
croit comprendre, ça se corse, on se sent à la limite, on trouve l'action
qui sauve, on est fier de gagner. Ni ennui (trop facile) ni frustration
d'être visé (trop dur).

- a) Recherche courte sur les modèles publiés (flow de Csikszentmihalyi/
  Jenova Chen, GDC talks, analyses Kingdom Rush/Bloons TD/PvZ/Slay the
  Spire/Hades/Celeste) — *statut : voir plus bas dès que fait*.
- b) Simulateur headless (sans rendu) dans le dépôt, 2-3 politiques de
  joueur (naïf / correct / bon) — *statut : voir plus bas*.
- c) Cibles proposées par Pierre, **en attente de sa validation** :
  palier normal — correct gagne ~55-65%, naïf perd, bon gagne presque
  toujours ; facile ~85% pour le correct ; difficile ~30-40% ; vagues
  infinies mesurées sur les 100 premières.
- d) Réglage des constantes jusqu'à tenir ces cibles, en gardant TOUTES
  les mécaniques existantes utiles et rentables.
- e) Garder le simulateur comme test de régression pour toute feature
  future.

**a) Modèle retenu (recherche web courte, sources ci-dessous)** :

- **Canal de flow** (Csíkszentmihályi ; thèse "Flow in Games" de Jenova
  Chen) : le "fun" est l'équilibre entre le défi et la compétence — trop
  de défi = anxiété, trop peu = ennui. C'est la métrique optimisée par
  le simulateur : faire tomber le joueur "correct" dans cette zone, pas
  le faire gagner ni perdre systématiquement.
  [Flow in Games (thèse Jenova Chen)](https://www.jenovachen.com/flowingames/Flow_in_games_final.pdf) ·
  [Flow theory — game design (Medium)](https://medium.com/@icodewithben/mihaly-csikszentmihalyis-flow-theory-game-design-ideas-9a06306b0fb8)
- **"Tension sawtooth"** (dents de scie) : une difficulté qui ne fait que
  monter en ligne droite épuise le joueur — les pics ne se ressentent
  comme des pics que s'il y a eu un vrai répit avant. Repris de l'AI
  Director de Left 4 Dead (Michael Booth, GDC 2009 : suit une "intensité"
  par joueur, la laisse retomber après un combat difficile avant le
  prochain pic) et des analyses de Kingdom Rush (une seule nouvelle
  mécanique/ennemi à la fois, jamais de pic sans prévenir).
  [Doing Difficulty Right: Fractal Curves (Game Developer)](https://www.gamedeveloper.com/design/doing-difficulty-right-fractal-curves) ·
  [The AI Systems of Left 4 Dead (Valve, GDC 2009, PDF)](https://steamcdn-a.akamaihd.net/apps/valve/2009/ai_systems_of_l4d_mike_booth.pdf) ·
  [Kingdom Rush vs Bloons TD 6 (TowerWard)](https://towerward.com/blog/kingdom-rush-vs-bloons-td-6)

**b) Simulateur** → fait, `sim/balance-sim.js` (+ `sim/README.md`).
Headless, sans dépendance, 3 politiques (naïf/correct/bon — chacune
diffère sur les vrais leviers du joueur : suivi caméra, achats
tourelles/jardin/douves, usage princesse/sortie/huile ; la réparation
reste automatique pour toutes, comme dans le vrai jeu). Simplifications
assumées et documentées en tête du fichier (pas de géométrie 2D réelle,
combat résumé en DPS moyen, formation des engins de siège résumée en
seuil d'accumulation plutôt qu'en proximité spatiale exacte) — objectif
de signal directionnel fiable, pas de réplique pixel-perfect.

**Constat le plus important, avant tout réglage** : les PV d'un ennemi
étaient un littéral plat `2` dans `spawnEnemy()` — **jamais mis à
l'échelle par la vague**. Seuls le nombre d'ennemis, la cadence
d'apparition et leur vitesse montaient. Conséquence mesurée au
simulateur : le jeu était **bimodal**, pas progressif — soit le joueur
achetait assez de tourelles tôt et le débit de kill (qui ne dépend que
du nombre de tourelles) écrasait des PV fixes pour toujours (100% de
survie jusqu'à la vague 100 dans les runs "correct"/"bon" avant
réglage), soit il n'en achetait pas assez et perdait presque tout de
suite — aucun entre-deux, donc aucune vraie "courbe" à ressentir.

**Deuxième constat, tout aussi important** : un engin de siège ne peut
JAMAIS être achevé par le tir à distance seul (PV plafonnés à 1 tant que
l'équipage est vivant, qui se régénère — "équipage vivant", déjà noté
plus haut dans ce fichier) — seule une Sortie tue l'équipage
directement. Un joueur qui ne découvre/n'utilise jamais la Sortie reste
donc **bloqué indéfiniment** sur la première vague où un attroupement se
forme (dès 2 attaquants stagnant au même endroit) : pas d'écran de
défaite, juste plus aucune progression. Dans le simulateur, la politique
"naïve" (qui n'utilise pas la Sortie) échoue quasi systématiquement de
cette façon, dès la vague 1. **Ce n'est pas un bug du réglage des
constantes** (la mécanique "équipage vivant" est un choix de design
assumé, déjà documenté ailleurs dans ce fichier) — c'est un problème de
**découverte** : rien à l'écran n'indique "ceci a besoin d'une Sortie".
Directement lié à la Partie 2.4 (retour visuel explicite) et 2.3 (FAQ
sans mystère) de la grosse consigne — pas résolu ici, juste consigné
pour que ce ne soit pas reperdu.

**c) Cibles** : adaptées à Bastion Orbit, qui n'a **aucun palier de
difficulté** (facile/normal/difficile) contrairement à ce que la
consigne envisageait pour les 3 jeux en général — un seul mode à vagues
infinies. Faute de paliers, la cible "normale" de Pierre (correct
~55-65%, bon quasiment toujours, naïf perd) a été mesurée à un point de
contrôle choisi (vague ~28-30, une session complète normale) plutôt qu'à
un tier de difficulté séparé. Ajouter de vrais paliers (multiplicateurs
de constantes sélectionnables) resterait un chantier séparé, pas fait
ici — noté comme piste si Pierre le souhaite.

**d) Constantes modifiées** (voir aussi le changelog en jeu) :
- `enemyHp(wave) = 2 + floor(wave/7)` (nouvelle fonction, remplace le
  littéral plat `2` dans `spawnEnemy()`) — LE levier qui casse la
  bimodalité : au-delà d'un certain nombre de tourelles fixes, les PV
  montants finissent toujours par rattraper le débit de kill.
- `waveSpawnCount(wave)` (nouvelle fonction, remplace `3 + wave*2`
  directement dans `startWave()`) : une vague sur cinq (`wave % 5 === 0`)
  a son effectif réduit de 30% — la "dent de scie" du modèle retenu, un
  vrai palier de répit avant chaque poussée plutôt qu'une pente continue.

**Résultats mesurés** (`node sim/balance-sim.js --runs=80 --waves=40`,
avant/après) :

| | avant | après |
|---|---|---|
| naïf, survie ≥v10 | 0% (bloqué en boucle infinie côté sim, jamais compté comme mort propre) | 0% (perd proprement, cause identifiée : jamais de Sortie) |
| correct, survie ≥v20 | 100% | 96-100% |
| correct, survie ≥v28 | 100% | **63-74%** (cible : 55-65%, dans la marge) |
| correct, survie ≥v30 | 100% | **53-63%** (cible : 55-65%, dans la marge) |
| correct, survie ≥v50 | 100% | 0% |
| bon, survie ≥v30 | 100% | 100% |
| bon, survie ≥v50 | 100% | 57% |
| bon, survie ≥v75 | 100% | 0% |

Toutes les mécaniques existantes restent utiles et rentables : tourelles
(seul levier de DPS soutenu), jardin (seule façon de financer plus de
tourelles/douves sans compter uniquement sur les kills), douves
(ralentit l'arrivée, laisse plus de temps pour tuer avant l'accumulation
au mur), princesse (le bonus jardin ×1.5 reste le levier économique le
plus fort si on la gère — mais ×0.1 dégâts joueur si elle meurt reste la
sanction la plus sévère du jeu), sortie/huile (seul moyen réel de
limiter la casse une fois des engins de siège formés).

**e) Test de régression** → fait, `node sim/balance-sim.js --check`
(80 parties/politique, sort avec un code non-zéro si une cible est
ratée). Règle notée pour la suite : toute constante touchant au rythme
des vagues/PV/dégâts/coûts doit relancer cette commande avant de
pousser.

**Pas fait dans cette passe** : paliers de difficulté (facile/normal/
difficile) sélectionnables — le jeu n'en a pas, cf. plus haut ; vérifier
en jeu réel (Playwright/partie manuelle longue) que le ressenti confirme
les chiffres du simulateur au-delà d'une vérification syntaxique/fumée
courte déjà faite ce tour-ci.

**Cibles validées par Pierre le 2026-09-08** (levait le "en attente" de
la section c ci-dessus) : correct ~85% facile, ~55-65% normal, ~30-40%
difficile, ~15-20% très difficile. **Implication concrète** : Bastion
Orbit doit donc bien avoir de vrais **paliers de difficulté
sélectionnables** — je m'étais trompé plus haut en disant que le jeu
n'en avait pas besoin/n'en aurait pas ; Pierre confirme qu'il en veut.

**Fait en v0.50** : bouton "Difficulté" dans le menu (cycle Facile→
Normal→Difficile→Très difficile→Facile, même mécanisme que Style/
Teinte, persisté en `localStorage`). Un seul levier par palier —
`hpDivisor` dans `DIFFICULTY_TIERS` (`enemyHp(wave) = 2 +
⌊wave/hpDivisor⌋`) — plutôt que plusieurs constantes différentes par
palier : plus simple à garder cohérent avec le simulateur, et la
cadence/vitesse des vagues ne change pas d'un palier à l'autre. Valeurs
calibrées au simulateur (`node sim/balance-sim.js --check`, qui teste
maintenant les 4 paliers séparément — voir `REGRESSION_TARGETS` dans
`sim/balance-sim.js`) :

| Palier | hpDivisor | Mesuré (v27-29, correct) | Cible |
|---|---|---|---|
| Facile | 6.4 | ~82-90% | ~85% |
| Normal | 4.5 | ~57-72% | ~55-65% |
| Difficile | 3.2 | ~39-47% | ~30-40% |
| Très difficile | 2.9 | ~19-28%, **forte pente** (40% à v27 → 0% à v30) | ~15-20% |

Le palier "Très difficile" mérite une note honnête : la courbe y devient
très raide sur seulement 3-4 vagues (v27→v30) — la mesure exacte au
palier 28 varie beaucoup d'un lot de runs à l'autre (23% à 100 runs,
19-28% selon l'échantillon à 300). Le nombre exact est donc moins fiable
que pour les autres paliers, mais la zone (nettement le palier le plus
dur, cohérent avec "on perd presque toujours") est confirmée. À revoir
si Pierre trouve ce palier trop abrupt en jeu réel plutôt que
progressivement plus dur.

Vérifié en Playwright : les 4 paliers s'enchaînent au clic (cycle
complet + retour au premier), aucune erreur console/page.

## Réponses de Pierre à la grosse consigne (reçues le 2026-09-08, notées avant tout travail)

- **Langue** : auto-détection de la langue de l'appareil (fr/en/...),
  anglais par défaut dans tous les autres cas — PAS d'anglais fixe.
  Lève le point "en attente" de la Partie 2.2 ci-dessus.
- **Bélier validé** : nouveau type d'engin de siège — lent, très fort,
  construit au loin — vient s'ajouter aux paliers existants
  (bouclier/arbalète/trébuchet/tour). Lève le "validation Pierre en
  attente" de la Partie 1.A.
- **Section explicative** : s'appelle **"Astuces"** (nom commun aux 3
  jeux). Lève le "le nom importe peu" de la Partie 2.3.
- **Teinte phosphore** : on GARDE le vert actuel (`#46ffa0`) — décision
  prise, ne plus revenir dessus.
- **Chemin vers un autre château / progression multi-niveaux** :
  **REPORTÉ**. Un seul château tant que la difficulté n'est pas réglée.
  Reste au backlog, aucun code à faire pour l'instant.

## Nouvelle consigne du 2026-09-08 (donjon/seigneur/routes/ville/maisons/cheval) — pas fait

À intégrer dans la Partie 1 (corrections Bastion Orbit), avant
l'uniformisation. Le simulateur de difficulté devra être mis à jour pour
tenir compte des maisons-cachettes et du cheval une fois codés.

1. **Donjon : 24 facettes → 12** → fait en v0.47. C'était `N_SEG` (pas
   `WALL_SEG`, qui à 8 gère seulement le nombre de facettes d'OMBRAGE,
   pas le nombre de côtés du polygone géométrique — celui qui donne
   "24 facettes" à l'œil est bien `N_SEG`, utilisé par tous les
   contours ronds : corps du donjon, plateforme, trou d'escalier).
2. **Tir du seigneur "dans l'axe" ×2** → fait en v0.47. Confirmé par
   Pierre : le tir DEPUIS LES REMPARTS, pas la sortie. Choix retenu :
   ×2 en plus de l'échelle `facingMultiplier` existante (1x/1.5x/2x
   selon l'angle) — donc ×4 dans l'axe serré, ×3 dans l'axe large, ×2
   hors axe (nouvelle constante `PLAYER_RAMPART_ATK_MUL = 2`). Le DPS du
   seigneur double partout, pas seulement dans l'axe serré — ça garde le
   principe existant "viser récompense" intact plutôt que de le
   remplacer par une autre échelle inventée. Rejoué au simulateur de
   difficulté (le doublement de DPS avait fait sauter la cible ~55-65%
   à la vague 28 à 89%) — `enemyHp(wave)` retendu de `2+⌊w/7⌋` à
   `2+⌊w/4.5⌋` pour retomber dans la cible (68% à v28, 57% à v30). Voir
   aussi la section difficulté plus haut.
3. **Routes → centre-ville (maisons) → chemin → donjon** → fait en v0.79
   (voir plus bas pour le détail complet). Confirmé par Pierre : vraie
   refonte géométrique, pas juste visuelle.
4. **Arrivée par bateau** → fait en v0.78 (voir plus bas pour le détail
   complet). Confirmé par Pierre : vague dédiée de temps en temps,
   séparée des vagues normales, pas mélangée.
5. **Maisons = cachettes indestructibles** → fait en v0.53 (3 itérations,
   chacune mesurée en jeu, pas juste raisonnée à froid). Un ennemi qui
   approche (pas un bâtisseur ni un porteur d'échelle, qui ont leur
   propre mission) a une chance de se cacher s'il passe à moins de
   `HOUSE_HIDE_R` d'une maison. Une fois caché : retiré de
   `state.enemies` (donc littéralement intouchable — `nearestVisibleTarget`/
   tourelles ne peuvent pas viser ce qui n'existe plus dans le tableau),
   compté dans `house.hiddenCount`. Pips rouges au-dessus du toit (même
   langage visuel que l'équipage des engins de siège) tant que
   `hiddenCount > 0`. `nearestSortieTarget` traite les maisons occupées à
   la même priorité que les ennemis actifs (un tir à distance ne peut
   rien contre elles, comme les engins de siège). Une fois arrivé, chaque
   coup de sortie déloge (`flushHouseEnemy`) — pas ne tue pas — jusqu'à
   `horseMul` occupants d'un coup : ils reprennent leur marche vers le
   mur depuis la maison, redevenant des cibles normales. La maison
   elle-même n'a pas de PV et ne peut jamais être détruite.

   **Constat honnête : la mécanique ne s'est déclenchée qu'à la 3ᵉ
   correction, chacune vérifiée par une mesure en jeu (pas par lecture de
   code) :**
   - *1ʳᵉ tentative* (`HOUSE_HIDE_R = 26`, jet à 22% par cycle de "mood"
     ~1.5-4s) : 150s de jeu, plusieurs vagues, **0 cachette**. Les 3
     maisons sont loin des angles de route (`ROAD_ANGLES` ≈ ±2.1-2.3 rad,
     maisons à ±0.68-1.0 rad) — un ennemi sur route ne les croise jamais.
   - *2ᵉ tentative* (`HOUSE_HIDE_R` → 70) : toujours **0 cachette** sur un
     nouveau test de 60s. Cause trouvée en instrumentant le jeu
     (compteur temporaire de distance minimale) : la vérification
     n'avait lieu qu'au rythme du cycle de "mood", alors qu'un ennemi ne
     reste dans une bande de 70 unités que ~3s en la traversant — deux
     horloges désynchronisées qui ratent presque tous les passages par
     pure malchance de timing. Fix : jet à chaque frame (probabilité
     proportionnelle à `dt`, `HOUSE_HIDE_CHANCE_PER_SEC = 0.2`) au lieu
     du rythme du mood.
   - *3ᵉ tentative* : toujours **0 cachette** avec le jet par frame à 70
     unités. Instrumentation plus poussée (distance minimale ET nombre
     de frames sous le seuil) : sur ~100s à vagues 6-7, des centaines de
     passages sous 250 unités mais jamais sous 70 — la distance minimale
     géométrique qu'un ennemi "tout-terrain" (marche ~radiale depuis son
     angle de spawn) peut approcher d'une maison à r≈260-300 est
     ~r·sin(écart d'angle), qui ne descend sous 70 que pour une fenêtre
     d'angles de spawn minuscule. 70 unités n'était donc pas "presque
     suffisant" mais géométriquement quasi inatteignable.
     `HOUSE_HIDE_R` → **140**, qui couvre la zone où le trafic mesuré est
     réellement dense.
   - **Vérifié : ça marche.** Nouveau test avec `HOUSE_HIDE_R = 140` —
     première cachette obtenue à la vague 8 (~100s), une maison passe à
     `hiddenCount: 1`. Instrumentation de debug entièrement retirée
     ensuite (elle ne servait qu'à mesurer, jamais destinée à rester).

   Reste à surveiller en jeu réel par Pierre : le déclenchement met un
   certain temps à apparaître (vague ~7-8 dans le test, pas une garantie
   immédiate) — si ça reste trop rare à l'usage, la prochaine piste est
   de rapprocher les maisons des angles de route plutôt que de continuer
   à agrandir `HOUSE_HIDE_R` (qui commence à dépasser la taille des
   maisons elles-mêmes, 16 unités de large).
6. **Cheval du seigneur** → fait en v0.52. `horseMul(level) = 1 + level`
   (palier 1 → ×2 exactement, comme exigé "au minimum" ; palier 2 → ×3,
   etc. — sans plafond). Coût : `horseCost(n) = 40 × 1.35^(n-1)`, même
   formule géométrique que le jardin. S'applique UNIQUEMENT pendant
   `p.behavior === 'sortie'` (le déplacement radial et les dégâts de
   sortie), jamais à la marche normale (réparer, câlin...) — "quand il
   sort charger", pas en temps normal. Dégâts : ×horseMul sur les PV
   (ennemis/ponts) ET sur le nombre de membres d'équipage retirés d'un
   coup pour un engin de siège (`Math.round(horseMul(...))`), pour que
   "dégâts ×2" veuille dire la même chose sur les deux types de cibles.
   Bouton dédié dans le bandeau ("Cheval" → "Cheval N" une fois
   débloqué, couleur dorée), monture dessinée sous le seigneur (ellipse
   brune + crinière) uniquement quand `state.horseLevel > 0` et qu'il
   est effectivement sorti et en charge (`p.groundPos > 0.85`).
   **Non modélisé dans le simulateur de difficulté** (`sim/`) : les
   politiques "correct"/"bon" utilisent déjà la sortie mais n'achètent
   pas explicitement de cheval — en jeu réel, un joueur qui l'achète est
   donc probablement un peu plus fort que ce que les cibles de
   difficulté mesurées prévoient. Pas re-réglé pour l'instant (aurait
   demandé de retendre `enemyHp` une troisième fois) — à surveiller si
   Pierre trouve le jeu trop facile une fois le cheval acheté.

## Écran de défaite / fausse pub hors thème → fait en v0.47

Signalé par Pierre (capture à l'appui, v0.45, vague 6) : l'écran
"ALERTE SÉCURITÉ" à la défaite (fond jaune, bordure rouge, bouton
"Continuer quand même") n'est PAS dans le thème du jeu (phosphore vert
sur noir, filaire, monochrome, comme tout le chrome depuis v0.32 — voir
plus haut). Corrigé : la fausse pub reprend maintenant les tokens
`--ph-*` déjà en place (fond `--ph-fill`, bordure/texte `--ph-line`/
`--ph-text`, glow léger, police du jeu) — même traitement que le reste
du chrome en `body.phosphor`. Le gag textuel n'a pas changé (fausse
alerte, faux scan à 99%, "Antivirus Royal PRO", bouton "Continuer quand
même"), vérifié en capture. L'écran de défaite réel (`#overlay`) était
déjà dans le thème (règle `body.phosphor #overlay` déjà présente depuis
v0.32) — rien à faire de ce côté.

## Exploration : animation de l'eau (douves/ruisseau) — maquette de comparaison, pas encore intégrée

Demandé en session : tester une animation de l'eau dans l'esprit du
style actuel (phosphore/filaire), 5 variations différentes, dans un
artefact de comparaison côte à côte (même principe que la maquette de
teintes faite plus tôt) — Pierre choisit avant toute intégration au jeu
réel.

**Fait → maquette publiée** : https://claude.ai/code/artifact/6b37a187-3a8b-4c4c-a3a7-b490372677ec
("Eau Vivante"). Cinq pistes, toutes bâties sur une technique déjà
présente dans le jeu (pas d'invention de toutes pièces) : A —
scintillement dérivant (évolution directe de SHIMMER_GAP) ; B —
vaguelettes transversales défilant vers l'aval ; C — bandes de teinte en
marche ("marching ants"), lisibles même en vert phosphore pur ; D —
reflets scintillants façon particules (même vocabulaire que les gouttes
d'huile/la neige) ; E — le méandre lui-même qui avance dans le temps
(phase de STREAM_WIND_FREQ animée). Toggle Phosphore/Filaire/Couleur
dans la maquette pour comparer dans les 3 styles.

**Choix de Pierre : variation D (reflets scintillants)** → fait en v0.48.
`ensureGlintSeeds()` (paresseux, même précaution TDZ que SNOW_LAYERS —
généré au premier dessin, pas au chargement du script). Douves :
`drawMoatGlints`, dessiné juste après `drawRingBand` — profite du même
tour de passe-passe d'occlusion (le donjon, dessiné plus tard, masque
naturellement la moitié éloignée). Ruisseau : `drawStreamGlints(rot,
wantFar)`, appelé séparément dans les passes far/near existantes — lui
ne peut pas se contenter d'un seul dessin global comme les douves
puisqu'il traverse le donjon des deux côtés à la fois. `state.time`
ajouté (horloge simple en secondes) pour piloter le clignotement.
Vérifié en Playwright (couleur + phosphore, douves et ruisseau,
plusieurs captures rapprochées confirmant l'animation, pas d'erreur).

## Intérieur du donjon : la vraie scène, style B → fait en v0.49

Suite à sa question sur le rendu jamais livré (image de référence
retrouvée dans les fichiers reçus — capture Pinterest "Fline Arts",
intérieur de tour en pixel art avec escalier/tonneaux/personnages),
maquette de comparaison publiée : https://claude.ai/code/artifact/4d5dcd1f-fbcc-4e99-b79a-34a0a95ac7f1
("Salle du Foyer"). Trois traitements de LA MÊME composition (escalier
de pierre, tonneaux, foyer, roi + princesse aux échecs) : A — pixel art
fidèle à la référence (asset peint une fois, fond fixe) ; B — style
procédural du jeu (dégradés radiaux + quads facettés, calculé en direct,
caméra orbitale possible, cohérent avec le reste) ; C — illustration
peinte low-poly, entre les deux (asset fixe, plus doux que A).

**Choix de Pierre : style B**, intégré. Le bouton 🔥 ouvre désormais un
`<canvas id="cosyCanvas">` dédié (repère isométrique local, indépendant
du donjon extérieur — pas de couplage à `project()`/`scale`/`rot`) au
lieu de l'ancien décor emoji : sol en dalles, escalier, tonneaux, arche
éclairée, foyer qui vacille (bruit sinusoïdal sur l'intensité/le rayon),
roi + princesse (si vivante) assis à une table d'échecs — mêmes recettes
que le reste du jeu (dégradés radiaux façon `drawBallSprite`, quads
facettés triés en profondeur). Boucle d'animation dédiée
(`requestAnimationFrame`), démarrée à l'ouverture et annulée à la
fermeture — indépendante de la boucle de jeu principale. Volontairement
toujours en couleurs chaudes, même quand l'extérieur est en phosphore/
filaire : l'opposition de ton (repos à l'intérieur / urgence dehors,
déjà notée plus haut) ne fonctionnerait pas en vert monochrome.

**Chat ajouté** (demandé en session) : erre sur le sol (cible aléatoire,
ease, pause 2.5-6s) puis ronronne pendant les pauses — `playPurr()`,
porteuse grave (sawtooth, 105Hz) modulée en amplitude par un second
oscillateur à ~26Hz (la cadence caractéristique d'un vrai ronronnement),
même famille technique que `beep()` mais une vraie modulation plutôt
qu'une simple enveloppe.

Vérifié en Playwright : ouverture/fermeture/réouverture (pas de fuite de
boucle d'animation), plusieurs captures espacées confirmant le
déplacement du chat et le vacillement du feu — aucune erreur console.

## Village étendu : plus de maisons, grange, fontaine, église, ruisseau animé — partiellement fait en v0.55

Demandé en session (dicté, retranscrit) : rajouter des maisons plus
loin, et au centre du village une grange, une fontaine et une église,
avec une animation d'eau qui coule (rejoint directement le chantier
"eau vivante" ci-dessus/l'idée centre-ville de la grosse consigne du
2026-09-08). Redemandé le même jour ("y a que j'attendais aussi qui
sont pas là, faut rajouter des maisons, l'église etc.") — traité tout
de suite plutôt que d'attendre le gros chantier centre-ville complet.

**Fait en v0.55 :**
- `HOUSES` passe de 3 à 8 — 5 maisons de plus, réparties tout autour,
  dont plusieurs nettement plus loin (jusqu'à 430 unités contre 260-300
  pour les 3 premières). Héritent automatiquement de la mécanique de
  cachette (v0.53) et du tri profondeur far/near — rien de spécifique à
  coder, c'est le même tableau.
- Un vrai cœur de village (`VILLAGE_EXTRAS`) à un angle dégagé (aucune
  maison ni route ne passe par là) : une **grange** (bois roux, plus
  grande qu'une maison), une **église** (nef en pierre grise + clocher
  + croix simple au sommet) et une **fontaine** (bassin octogonal +
  pilier central + reflets scintillants, même vocabulaire visuel que
  les douves/le ruisseau — variation D choisie en session, voir plus
  haut). `collectBoxRoof`/`flushBoxRoofList` : les quads de plusieurs
  volumes qui se touchent (nef + clocher de l'église, rebord + pilier
  de la fontaine) sont empilés dans une liste commune et triés par
  profondeur ENSEMBLE plutôt que volume par volume — un premier essai
  sans ça faisait passer le clocher devant un pan de la nef qui aurait
  dû le cacher (repéré en capture, pas juste en relisant le code).
  Vérifié en Playwright, style Couleur ET Phosphore, capture rapprochée :
  les 3 bâtiments se lisent clairement, aucune erreur console.

**Pas fait :**
- Cachette sur la grange/l'église → fait en v0.81 (décidé à la place de
  Pierre, "choisis à ma place" — voir plus bas pour le détail).
- **Mécanique de la fontaine-soin** → fait en v0.82 (voir plus bas pour
  le détail complet).
- Le centre du village n'est positionné qu'à un angle pratique choisi à
  la main, pas encore raccordé aux routes ("routes → centre-ville →
  donjon" de la grosse consigne, gros chantier de géométrie pas
  commencé).

## Style Couleur mis en pause, neige = particules pas des cercles → fait en v0.56

Deux demandes dictées dans la foulée de v0.55.

1. **Style Couleur en pause** : "garde style phosphore et met en pause
   le style couleur à l'avenir, on garde juste sous le coude au cas où".
   Le bouton Style (menu) ne bascule plus qu'entre Phosphore et Filaire
   pur — `STYLE_NEXT` ne propose plus `couleur`. Un ancien réglage
   `bo_phosphorStyle=couleur` en localStorage retombe silencieusement sur
   `phosphore` au chargement plutôt que d'être restauré. Le code de rendu
   couleur lui-même (branche `phosphorStyle === 'couleur'` dans
   `wrapPhosphor`, `drawCastle` vs `drawCastleSilhouette`...) n'a pas été
   touché — juste rendu inatteignable depuis l'interface, comme demandé
   ("sous le coude").
2. **Neige = particules, pas des cercles confondus avec les ennemis** :
   la neige passait par `drawBallSprite`, donc par le même wrapper
   phosphore que n'importe quel personnage — en Phosphore/Filaire un
   flocon devenait un petit **cercle creux** (fond + contour), à peu près
   la même taille apparente qu'un ennemi lointain (lui aussi rendu en
   cercle creux dans ces styles). Repéré par Pierre en jeu, pas à la
   lecture du code. Fix : `drawSnow()` dessine maintenant directement sur
   `rawCtx` (le contexte brut, PAS le wrapper phosphore) — un point plein
   simple, dans tous les styles, jamais un contour. Vérifié en
   Playwright : petits points blancs pleins, nettement différents des
   cercles creux verts (ennemis/bâtiments), aucune erreur console.

## Maisons/grange/église : chacune sa propre orientation → fait en v0.57

Signalé en session : "les mains doivent être rotatées différemment, là
elles sont toutes parallèles" — en fait les **maisons** (dictée mal
retranscrite), qui étaient toutes dessinées avec le même axe de faîtage
(toujours parallèle à l'axe X du monde), quelle que soit leur position.

Chaque `HOUSES[i]` a maintenant un `yaw` aléatoire (0 à 2π), appliqué en
tournant ses coins locaux ET son faîtage de toit autour de son propre
centre avant de les placer dans le monde (`rotYaw`, nouvelle fonction
partagée). La grange et l'église (v0.55) en profitent aussi, avec un yaw
modéré et choisi à la main plutôt qu'aléatoire — ce trio est composé
avec un espacement calculé pour un yaw nul, une rotation franche
pourrait les faire chevaucher. Pour l'église, le clocher est accroché à
l'arrière de la nef le long de son propre axe : son décalage tourne
avec le même yaw que la nef, sinon il se détache visuellement dès
qu'on tourne le bâtiment.

Vérifié en Playwright (plusieurs angles de caméra) : les maisons
pointent maintenant dans des directions clairement différentes,
l'église garde son clocher bien accroché sous rotation, aucune erreur
console.

## Style par défaut : Filaire pur (vert), plus Phosphore → fait en v0.60

Demandé en session : "Pure wireframe green [...] c'est le vrai style
jeu que moi j'utilise qu'on doit mettre par défaut quand on joue" —
demande aussi que tous les rendus de vérification faits pendant cette
session (captures Playwright) utilisent ce même style, pour comparer
directement avec ce que Pierre voit en jeu.

`phosphorStyle` par défaut passe de `'phosphore'` à `'filaire'`
(`phosphorHue` restait déjà `'vert'` par défaut, rien à changer là).
Un joueur qui a déjà un `bo_phosphorStyle` en localStorage garde son
choix (pas de réinitialisation forcée d'un réglage déjà sauvegardé,
même logique que pour la langue/difficulté/audio) — seuls les nouveaux
chargements sans réglage sauvegardé partent maintenant en Filaire pur.
Vérifié en Playwright (contexte neuf, sans localStorage) : le menu
affiche bien "Style : Filaire pur" / "Teinte : Vert" au premier
chargement, donjon rendu en fil de fer complet (toutes les facettes,
pas la silhouette du mode Phosphore), aucune erreur console.

Effet de bord utile, pas juste accessoire : comme c'est maintenant le
style par défaut du jeu, tout nouveau test Playwright de cette session
(sans manipulation explicite du style) l'utilisera automatiquement —
répond directement à la demande de cohérence entre les captures de
vérification et le vrai rendu par défaut.

## Fontaine animée, ruisseau qui coule vraiment, nombres flottants ×3 → fait en v0.61

Trois demandes dictées à la suite du style par défaut (v0.60).

1. **Jets de la fontaine** : "un petit tuyau central qui gicle de l'eau
   autour de manière circulaire, réparti équitablement, et qui tombe
   dans la fontaine". `FOUNTAIN_JET_COUNT = 6` jets espacés également
   autour du petit pilier central, chacun avec 2 gouttes qui parcourent
   une arche fixe (sommet du pilier → point d'atterrissage sur le
   bassin) en boucle, décalées d'un demi-cycle l'une par rapport à
   l'autre. Purement procédural (fonction de `state.time`, comme les
   reflets déjà en place) — aucun état à gérer, aucun particle system.
2. **Ruisseau qui coule vraiment** — trois volets :
   - Des particules qui voyagent réellement le long du chemin ("qu'on
     peut suivre du début à la fin"), pas juste un scintillement sur
     place comme les reflets existants (gardés, c'est un effet
     différent). `streamFlowSeeds` (16 particules, `d` avancé chaque
     frame dans `update()`, boucle en sortant par l'autre bout) +
     `drawStreamFlow`.
   - Les traits perpendiculaires au chemin de l'eau (`SHIMMER_GAP`,
     l'ancien scintillement de `drawStreamExtras`) retirés — remplacés
     par les particules ci-dessus.
   - Contour des berges lissé : `drawStreamRun` traçait une polyligne
     droite (`lineTo`) d'un point à l'autre, visiblement anguleuse à
     chaque jonction — remplacée par une courbe de Bézier quadratique
     passant par le milieu de chaque paire de points consécutifs (les
     points d'origine ne bougent pas, seule la façon de les relier
     change).
3. **Nombres flottants trois fois plus gros** — `drawFloatingText` (or,
   v0.58) : taille 11/13 → 33/39. Distance de montée aussi augmentée
   (26 → 40) pour laisser la place au texte, désormais bien plus gros.

Vérifié en Playwright (style Filaire pur, celui par défaut depuis
v0.60) : jets visibles autour du pilier de la fontaine, particules du
ruisseau qui avancent le long du chemin, banks visiblement lissées,
plus aucun trait perpendiculaire, "+2" nettement plus gros et lisible
sans avoir besoin de zoomer. Aucune erreur console.

## Église ×2, ruisseau "flot infini", musique qui se coupe, pont en pierre, place + 3e chemin, ferme → fait en v0.62

Six demandes dictées à la suite (dont une glissée en plein milieu du
travail — "la musique ne se coupe toujours pas quand je quitte le
jeu").

1. **Église deux fois plus grande** — toutes les dimensions ×2 (nef,
   clocher, croix). "Attention à pas faire de collision avec les
   autres maisons" : le trio grange/église/fontaine a dû être
   repositionné plus loin (`VILLAGE_CENTER_R` 300 → 460, angle -1.3 →
   -1.55) et réécarté, vérifié **numériquement** (petit script Node à
   part, pas juste au jugé) contre les 8 `HOUSES` ET entre les trois —
   marge minimale ~36 unités, aucune collision.
2. **Particules du ruisseau : beaucoup plus petites et nombreuses,
   partout sur la longueur, "un flot infini"** — `STREAM_FLOW_COUNT`
   16 → 110, rayon de dessin 1.6 → 0.7×scale.
3. **"La musique ne se coupe toujours pas quand je quitte le jeu"** —
   bug réel, pas juste un réglage : `visibilitychange` ne faisait que
   redébloquer l'audio au retour sur l'onglet (`ensureAudio`), rien ne
   coupait `bgMusic` en le quittant. Ajouté : coupée sur `hidden`,
   reprise au retour. Vérifié (Playwright, `document.hidden` simulé) :
   `paused` passe bien à `true` puis `false`.
4. **Pont en pierre, deux fois plus imposant** — tablier deux fois plus
   large ET plus long (`BRIDGE_HALF_LEN`/`BRIDGE_HALF_WIDTH`), plus
   deux murets latéraux (avant : une simple plaque plate, aucun mur).
   `drawStoneGrid` superpose une grille de joints (interpolation
   bilinéaire entre les 4 coins déjà projetés) sur le tablier ET les
   murets pour qu'on voie vraiment les blocs plutôt qu'un aplat uni —
   "des gros blocs qui font les murs sur les côtés et le sol".
5. **Place du village + troisième chemin vers la porte** — "les deux
   chemins doivent se lier... arriver quasiment en bas de l'église...
   sur une sorte de place... à partir de la place il y a un troisième
   chemin qui va jusqu'en bas de la porte de la tour". Fait en scope
   **assumé et volontairement limité** : une bretelle depuis chacune
   des deux routes existantes (prise au même rayon que la place —
   point le plus proche par construction) rejoint une place (`PLAZA_X/
   Z`, décalée du pied de l'église vers le donjon), d'où part un
   troisième chemin jusqu'à la porte. **Purement visuel**, superposé
   par-dessus — `roadAngleAt`/le pathing des ennemis sur les routes
   (vitesse bonus, `roadIdx`) ne sont PAS touchés, pour ne rien casser
   dans un système déjà réglé et testé tout au long de la session. Le
   vrai raccordement du système de routes lui-même (les ennemis
   suivraient réellement ce tracé) reste le "gros chantier routes →
   centre-ville → donjon" toujours pas commencé — noté honnêtement,
   pas fait en douce comme si c'était la même chose.
6. **Ferme** — "un gros bâtiment et un petit, assez loin, quasiment en
   limite de vision pour donner de la profondeur". `FARM_BUILDINGS`
   (`ferme_grange` + `ferme_maison`, même recette `collectBoxRoof` que
   grange/maison), à l'opposé du village existant (angle 0.85, r=470,
   proche de `SPAWN_R_BASE`). Vérifié numériquement aussi : marge
   ~153 unités vs les 8 maisons, ~23 unités entre les deux bâtiments
   de la ferme eux-mêmes.

Vérifié en Playwright (style Filaire pur, par défaut) : église bien
plus grande sans chevaucher grange/fontaine/maisons voisines sur
plusieurs angles de caméra ; ruisseau visiblement plus dense en petits
points ; musique coupée/reprise sur `visibilitychange` simulé ; pont
avec grille de pierre visible sur tablier et murets ; place + bretelles
+ troisième chemin qui convergent clairement vers l'église. Aucune
erreur console sur l'ensemble des captures.

## Corrections routes/place/pont/ruisseau/douves/jardin + tarifs affichés → fait en v0.63

Grosse rafale de retours après v0.62, certains corrigeant des bugs
réels trouvés par Pierre en jouant (pas des préférences esthétiques).

1. **Pont : orienté à l'envers** — bug réel. Le premier essai (v0.62)
   avait les deux axes inversés : le tablier était large dans le sens
   du COURANT au lieu du sens de la TRAVERSÉE, et les parapets
   longeaient donc le courant plutôt que la route — "on dirait que
   l'eau passe sur la route". Corrigé : `BRIDGE_SPAN_HALF` (traversée,
   axe radial rx,rz) et `BRIDGE_WIDTH_HALF` (largeur de la chaussée,
   axe tx,tz) au lieu de `BRIDGE_HALF_LEN`/`BRIDGE_HALF_WIDTH`. En
   volume maintenant (un vrai pilier plein, plus des parois infiniment
   fines) avec une arche en berceau découpée sur les deux faces amont/
   aval (`bilerpQuad`, interpolation bilinéaire dans le quad déjà
   projeté — pas un vrai calcul 3D d'arc, suffisant à cette échelle).
2. **Bretelles route↔place : croix au lieu d'un raccord propre** — bug
   réel. Un ruban à deux bords qui rejoint une route existante fait
   croiser ses deux bords avec les deux bords de la route ("ça fait une
   croix"). Fix : `drawSingleLinePath`, une ligne simple sans rien à
   croiser, pour les deux bretelles. Le troisième chemin (place→porte)
   garde un vrai ruban (il ne touche aucune route existante, pas de
   risque de croix), avec une largeur alignée sur `DOOR_HALF_WIDTH`
   (12, la même que le découpage réel de la porte) et un point de
   départ au rayon R (le donjon lui-même) plutôt que BASE_R — "les
   deux côtés du chemin doivent toucher les deux bords de la porte".
3. **Place du village : trop petite, mal placée** — repositionnée et
   agrandie : cherché numériquement (script à part) le point, dans le
   vide ENTRE la grange et l'église (pas le premier grand espace vide
   trouvé n'importe où — une première recherche non bornée dérivait à
   200+ unités du village), qui maximise la marge par rapport aux deux
   ET aux 8 maisons. `PLAZA_RADIUS` 46 → 80. "La fontaine c'est la
   seule exception, elle doit être au centre de la place" — elle n'a
   plus sa propre position dans `VILLAGE_EXTRAS`, elle utilise
   `PLAZA_X/Z`.
4. **Ruisseau : encore plus dense** — 110 → 2200 particules (demandé :
   "20 fois plus"), et régularité : `d` n'est plus tiré au hasard sur
   toute la portée mais réparti à intervalles réguliers (petit jitter
   résiduel, pas une grille parfaitement mécanique). Vérifié : ~51 FPS
   en jeu avec tout le reste (Playwright, `fpsNum` du menu) — pas de
   souci de performance à cette densité.
5. **Jardin (massifs) parfois sur une route** — bug réel trouvé en
   vérifiant numériquement (pas au jugé) : un massif (a=4.1, r=163)
   tombait à 15.7 unités du bord de la deuxième route, largement dans
   sa largeur. Décalé à a=4.4 (>64 unités de marge). Le reste de la
   remarque ("le jardin doit être entre la base du donjon et le début
   des douves") n'est PAS appliqué tel quel — ça contredirait le
   mécanisme d'inondation déjà en place (le jardin s'étend
   délibérément au-delà des premiers paliers de douves, inondé
   progressivement à mesure qu'elles grandissent) ; noté honnêtement
   ici en cas de désaccord persistant une fois ce fix vu en jeu.
6. **Douves : on voyait les chemins à travers** — bug réel, et pas
   celui que ça semblait être. Les douves étaient un seul anneau
   complet dessiné AVANT tout le reste (pour l'astuce d'occlusion
   far/near "gratuite" du donjon) — donc les routes/la place/le
   jardin, dessinés après, se repeignaient PAR-DESSUS l'eau. Pas un
   problème de transparence (l'alpha est de toute façon ignoré par
   `wrapPhosphor` en Phosphore/Filaire, voir plus haut dans ce
   fichier) mais d'ORDRE de dessin. Fix : `drawRingHalf`, un demi-
   anneau (far OU near, comme tout le reste du décor au sol) plutôt
   qu'un anneau complet, positionné maintenant APRÈS les routes/la
   place/le jardin mais AVANT les ennemis/engins de siège/ponts/joueur
   (qui doivent rester visibles sur l'eau). Alpha remonté quand même
   (0.5-0.8 → 0.85-0.96) pour Couleur (en pause) le jour où il revient.
7. **Tarifs affichés + boutons grisés si pas assez d'or** — redemandé
   ("déjà dit, pas fait"). `affordText()` ajoute `(coût)` sur
   Tourelle/Douves/Jardin/Cheval ; `.unaffordable` (opacité 0.45,
   choisie sur l'opacité plutôt que la couleur pour rester lisible
   dans les 3 styles) togglée dès que l'or manque. `refreshBuyButtons()`
   appelée une fois par frame dans `update()` plutôt que d'accrocher un
   rafraîchissement à chacun des ~10 endroits qui touchent
   `state.gold` — plus simple et sans risque d'en oublier un futur.
8. **Bouton "Vague" fusionné** — l'ancien affichage ("Vague N") et le
   bouton "Vague +" séparés deviennent un seul bouton : "Vague N → N+1".
   `updateWaveNum()`, un seul point de mise à jour pour les deux span
   imbriqués. **Bug trouvé en testant** (pas en relisant le code) :
   `applyI18nStatic()` écrasait tout le `textContent` du bouton fusionné
   à chaque bascule de langue ET au chargement, effaçant les span
   imbriqués (`Cannot set properties of null` en cascade juste après,
   sur `waveLabel`) — corrigé, ne touche plus que le span `waveLabel`
   lui-même.
9. **Icône de pièce d'or retirée** — juste le nombre en haut désormais.

Vérifié en Playwright (style Filaire pur, plusieurs angles de caméra,
achat/dépense d'or, changement de vague) : pont correctement orienté
et en volume, bretelles sans croix, place agrandie avec la fontaine en
son centre, ruisseau très dense sans chute de FPS mesurable, jardin
écarté de la route, douves sans route visible à travers, boutons avec
tarif et grisage corrects, bouton Vague fusionné fonctionnel après
correctif, aucune erreur console.

## Demandes en attente, pas commencées (trop grosses pour cette
## rafale) — détaillées ici pour ne rien perdre

(Note : le moulin et le zoom pincé, listés ici à l'origine, sont
maintenant faits — voir plus bas dans ce fichier pour le détail. Note
laissée volontairement pour ne pas perdre la trace de l'historique de
cette rafale de demandes.)

## Ruisseau : portée pleine hors-écran, particules ÷3, ondulation "poisson" → fait en v0.64

Ajustement après v0.63 : "le cours d'eau commence hors de l'écran et
finit hors de l'écran, divise les particules par trois et rajoute un
côté aléatoire pour que ça bouge un peu droite/gauche comme si c'était
un brochet qui nage".

- `STREAM_FLOW_RANGE` 400 → 640 (même valeur que `glintSeeds.stream`,
  déjà choisie pour rester hors-écran quel que soit `SPAWN_R`) — 400
  pouvait tomber court sur un écran large.
- `STREAM_FLOW_COUNT` 2200 → 733 (÷3).
- Chaque particule ondule maintenant latéralement au fil du temps
  (`latPhase`/`latSpeed` par particule, amplitude `STREAM_FLOW_WOBBLE`)
  plutôt que de garder un décalage latéral figé — lit comme un léger
  slalom individuel, pas une ligne parfaitement droite.

Vérifié en Playwright (Filaire pur, plusieurs angles) : le ruisseau
reste visible jusqu'aux deux bords de l'écran, densité de particules
nettement plus légère, aucune erreur console.

## Pont en arche, bâtiments dans l'eau/sur les routes, traits fantômes autour du donjon → fait en v0.65

Trois problèmes signalés explicitement par Pierre ("le pont il ne fait
pas une courbe... il y a encore des bâtiments qui sont dans l'eau ou
sur des routes... il y a des traits qui ressemblent à des routes...
qui viennent de nulle part, et qui vont nulle part"), + consigne
permanente à partir de là : travailler en autonomie, sans repasser par
des questions, en descendant la liste de priorités du BACKLOG.

1. **Pont — vraie arche qui monte et redescend.** Le tablier était
   plat (seule l'arche découpée dans le pilier en dessous donnait
   l'illusion d'un pont "en volume", mais rien ne montait/descendait à
   l'écran). Ajout de `bridgeDeckY(lr)` (bombement parabolique, nul aux
   deux berges, maximal — `BRIDGE_ARCH_RISE`=9 — au centre) ; le
   tablier ET les parapets sont maintenant découpés en 10 tranches le
   long de l'axe de traversée (un seul quad plat ne peut pas montrer de
   courbe). Corrigé au passage un vrai bug trouvé en relisant le code
   pendant ce chantier : l'arche était découpée sur les faces `[1,3]`
   du pilier (les extrémités côté berge, à rayon fixe) au lieu des
   faces `[0,2]` (les faces amont/aval, celles qui longent vraiment le
   courant) — l'ouverture était donc perpendiculaire au bon sens.
2. **Bâtiments en collision avec routes/ruisseau — vérifié
   numériquement** (script Node dédié, pas au jugé) pour TOUTES les
   maisons + VILLAGE_EXTRAS (grange/église+clocher) + FARM_BUILDINGS
   contre les deux routes ET le ruisseau. Deux vraies collisions
   trouvées :
   - `house[4]` (angle -2.4, r=360) à seulement 4.5 unités de la route
     1 (marge -26) — décalée à l'angle -2.6, marge >65 maintenant.
   - `ferme_grange` à seulement 16 unités du ruisseau (marge -31,
     littéralement dedans) — `FARM_ANGLE` décalé de 0.85 à 0.55, marge
     >100 maintenant (`ferme_maison`, liée au même point, revérifiée
     aussi : marge >200).
   Tout le reste (les 6 autres maisons, grange, église+clocher,
   ferme_maison) avait déjà des marges saines (>75 unités) — pas de
   régression introduite par les deux déplacements.
3. **Traits fantômes autour du donjon.** Diagnostic en deux temps
   (vérifié par test, pas par supposition — désactiver temporairement
   `drawPlazaAndPaths` a confirmé que les traits venaient bien de là
   avant de toucher au code) :
   - D'abord corrigé un vrai bug d'occlusion : tout le groupe
     place+bretelles+troisième chemin était classé far/near par UN
     SEUL angle (celui de la place), alors que les bretelles relient
     des points à des angles très différents. Un segment dont les deux
     bouts sont de part et d'autre de la limite caméra se dessinait
     donc ENTIER dans une seule passe. Fix : `drawPlazaAndPaths(rot,
     wantFar)` classe maintenant chaque petit bout individuellement
     (`pointFar`/`drawSplitLinePath`/`drawSplitRoadPath`).
   - Mais le vrai coupable visible restait ailleurs, trouvé seulement
     en comparant des captures avec/sans le module : une bretelle
     tracée en ligne DROITE entre deux points d'angles très éloignés
     (~150°) autour du donjon coupe près de son centre à l'écran quels
     que soient leurs rayons — pas un problème d'occlusion, un problème
     géométrique (la corde reste classée "near" tout du long et se
     peint par-dessus la tour). Fix : `bowedPathPoints` interpole
     l'ANGLE (coordonnées polaires) plutôt que x/z en ligne droite — le
     rayon reste dans [min(r0,r1), max(r0,r1)] par construction, donc
     le chemin contourne le donjon au lieu de couper à travers.
     Appliqué aux deux bretelles route↔place ET au troisième chemin
     place↔porte (celui-ci garde son point d'arrivée exact à la porte,
     largeur `DOOR_HALF_WIDTH` inchangée — seule la route qui y mène se
     courbe).

Vérifié en Playwright : balayage de 24 angles de caméra (donjon zoomé,
recherche visuelle de traits traversant sa silhouette) — plus aucun
trait parasite trouvé ; script Node de collision ré-exécuté après les
deux déplacements de bâtiments, toutes marges positives ; aucune
erreur console sur 40s de jeu en continu.

## Bouton "vague suivante" inutilisable en martelant vite + bonus affiché/dégressif → fait en v0.65

Signalé en cours de route ("si j'appuie 4-5 fois par seconde... ça ne
marche pas, il faut presque attendre une seconde à chaque fois").

- **Vrai bug trouvé** : le garde anti-zoom iOS (`touchend` global,
  `preventDefault()` si deux taps à moins de 350ms d'écart) visait un
  vrai double-tap au même endroit, mais s'appliquait à TOUT l'écran —
  y compris en martelant un bouton. `preventDefault()` sur `touchend`
  supprime aussi le `click` de compatibilité qui suit, donc un clic sur
  deux était avalé dès qu'on appuyait plus vite que 350ms d'écart, sur
  n'importe quel bouton. Fix : les boutons/liens/inputs sont exemptés
  de ce garde (le geste de zoom Safari ne se déclenche de toute façon
  jamais sur un contrôle interactif). Vérifié en Playwright (contexte
  tactile, 6 taps à 180ms d'écart) : les 6 taps sont maintenant tous
  pris en compte, contre ~3 avant le correctif.
- **Bonus d'or affiché + dégressif** : le bouton affiche maintenant
  "+N" (or gagné en appelant la vague en avance). N diminue à mesure
  qu'on approche la fin naturelle de la vague en cours (sauter une
  vague qui allait de toute façon se terminer dans quelques secondes
  ne fait quasiment rien gagner) — jamais sous 1. Recalculé chaque
  frame (`updateNextWaveBonus`, dans `refreshBuyButtons()`).

## Mécanique des paysans (1er des 6 gros chantiers de la liste de priorité) → fait en v0.66

Travaillé en autonomie totale, sans repasser par des questions, comme
demandé explicitement par Pierre ("tu fais un ordre de priorité, et tu
avances de manière mécanique"). Version scopée pour rester réalisable
en une passe (annoncé comme "au mieux, pas parfait, on corrigera plus
tard si besoin") :

- **Population** : chaque maison reçoit 1 à 5 paysans au chargement
  (`initVillagers`), stockés dans `state.villagers`.
- **Vie tranquille** (`state.villagePanic` faux) : par paysan, ~10%
  errent près de chez eux, ~10% déménagent vers une autre maison
  aléatoire, le reste marche jusqu'à la place et y "danse" sur place
  (bobine verticale) avec une note "♪" flottante qui monte et
  s'estompe périodiquement (`updateVillagerPeaceful`).
- **Déclenchement** : au tout premier ennemi qui apparaît réellement
  (`spawnEnemy`, pas juste un changement de vague) → `villageTriggerPanic()`.
  Simplification assumée : pas d'animation de fuite séparée, tout le
  monde passe directement en "à l'abri" (`sheltering`, invisible) d'un
  coup plutôt que de courir jusque chez soi à l'écran.
- **Mobilisation vague après vague** (`villageDispatchWave`, appelé
  depuis `villageTriggerPanic` ET à chaque `startWave`/`callNextWaveEarly`
  suivant) : un lot de 3 paysans encore à l'abri (les plus proches d'un
  ennemi présent, si possible) est mobilisé : 1/3 partent se battre
  (marchent vers l'ennemi le plus proche, bref clash, puis disparaissent
  — cosmétique, ne touche pas à l'économie/l'équilibrage réel, pour ne
  pas risquer de casser l'équilibre du jeu existant en fin de session) ;
  parmi les 2/3 restants, 1/5 fuient vers l'église (comptés dans
  `villagersHiddenChurch`) et le reste vers le château par la porte du
  bas (`villagersHiddenCastle`).
- **Vue cosy** : `state.villagersHiddenCastle` est redessiné près du
  feu (`renderCosyScene`, même fonction `cosyPerson` que le seigneur/la
  princesse, plus petits, en cercle autour du foyer) — "on verra
  exactement le même nombre de paysans à côté du feu", plafonné à 10
  affichés par simplicité d'agencement (le compte réel reste correct
  au-delà, juste pas tous dessinés un par un).
- **Rendu** dans la scène principale : un simple point (langage visuel
  déjà utilisé pour les pips des maisons-cachettes), classé far/near
  individuellement (`pointFar`) comme tout le reste depuis le correctif
  des traits fantômes plus haut — pas de sprite détaillé, cohérent avec
  le style filaire minimaliste du jeu.

Vérifié en Playwright : dots visibles près des maisons peu après le
chargement (vie tranquille), population visiblement dégarnie après le
déclenchement du combat (dispatch en cours), petit groupe de paysans
bien visible près du feu dans la vue cosy après plusieurs vagues,
aucune erreur console sur 60s de jeu en continu.

Reste pour plus tard si besoin d'affiner (noté, pas bloquant) : le
"plus proche de l'attaquant" n'est qu'une approximation (tri par
distance au premier ennemi de la liste, pas un vrai calcul par
maison) ; la panique n'a pas d'animation de fuite visible ; le lot
mobilisé par vague est une constante fixe (3) plutôt qu'une formule
liée à la difficulté.

## Nouvelles demandes reçues pendant le travail en autonomie (2026-09-08, en attente)

- **Encore des traits fantômes** (signalé avec capture annotée, deux
  traits isolés en zone vide, pas liés à un bâtiment visible) — v0.65
  n'a pas tout couvert. En cours de diagnostic (même méthode que la
  fois précédente : comparer avec/sans chaque système suspect plutôt
  que deviner) au moment de cette note.
Pas encore commencées au moment de cette note — priorité : finir le
diagnostic des traits fantômes (régression, plus urgent), puis moulin,
puis zone sacrée de l'église, dans cet ordre.

## Traits fantômes (capture annotée) : non reproduits malgré recherche poussée — mis de côté pour avancer

Diagnostic mené (comme d'habitude, par comparaison plutôt que par
supposition) : plus de 80 captures Playwright passées en revue —
balayage fin (36 angles), balayage large en combat actif avec plusieurs
vagues/ennemis/engins (20+ captures), ET la même recherche sur le build
v0.65 d'AVANT le moulin/les paysans (pour vérifier si c'était déjà là
ou une régression de ce chantier) — aucune trace des deux traits
diagonaux isolés décrits/annotés par Pierre, dans aucune des deux
versions. Tentative de reproduire EXACTEMENT la même rotation caméra
que sa capture (même séquence de glissés) : constaté que la caméra a
de l'inertie/un temps réel dans son mouvement (state.omega), donc la
même séquence de gestes ne redonne pas exactement le même angle d'une
exécution à l'autre — impossible à reproduire pixel pour pixel en
rejouant simplement les mêmes gestes.

Mis de côté pour ne pas rester bloqué dessus (cohérent avec "on corrige
plus tard en fonction de ce qu'on voit" plutôt que de creuser une
piste sans preuve) — repris dès qu'une nouvelle capture/piste plus
précise arrive (quel bâtiment est proche, à quel moment de la partie,
combien de temps ça reste affiché).

## Nouvelles demandes (suite, 2026-09-08 tard) — en attente

- **Vrais curseurs de volume — vérifié, déjà fait, rien à faire.**
  Signalé comme "juste en off" par Pierre, mais testé en Playwright :
  `#musicVolumeInput`/`#sfxVolumeInput` sont déjà de vraies glissières
  `<input type="range" min="0" max="100">`, avec pourcentage affiché à
  côté, persistées en `localStorage`, et une glissière testée en
  direct répond bien à une valeur intermédiaire précise (39%, pas
  juste 0 ou 100). Capture à l'appui : deux glissières bien visibles et
  étiquetées dans le menu, aucun bouton on/off à cet endroit. Cette
  fonctionnalité semble déjà présente depuis avant le début de cette
  session (aucune trace d'un ajout récent dans le changelog). Piste la
  plus probable : Pierre testait une version mise en cache (page pas
  rafraîchie après un déploiement) ou pensait à un autre réglage
  binaire du même menu (ex. "Snow: ON/OFF", juste au-dessus, qui LUI
  est un vrai bouton on/off). Pas de changement fait — modifier un
  mécanisme déjà correct sans reproduire le problème risquerait de
  casser quelque chose qui marche. À revoir si Pierre confirme encore
  le souci après avoir rafraîchi/rechargé la page.

## Le moulin — bâtiment + roue (2e des 6 gros chantiers) → fait en v0.67 ; économie (bouton/tarifs) → fait en v0.69

Recherché avant d'implémenter (demandé explicitement : "un vrai
mécanisme de moulin à eau à rechercher, pas inventé au hasard") :
sur une roue "undershot" (en dessous), le courant pousse les aubes
immergées dans le SENS DU COURANT lui-même — la face de la roue en
contact avec l'eau se déplace donc dans le même sens que l'eau qui
coule. Voir
[alternative-energy-tutorials.com](https://www.alternative-energy-tutorials.com/hydro-energy/waterwheel-design.html).

- Position : sur la berge, à d=-220 le long du ruisseau (loin du pont
  à d=0) — vérifié numériquement (script à part, même méthode que pour
  les autres bâtiments) contre les deux routes et tous les bâtiments
  existants, marges > 60 unités partout.
- La roue (`drawMoulinWheel`) : jante + rayons en fil de fer, dont
  chaque point suit `theta = state.time * MOULIN_SPIN_RATE + angle`
  dans le plan (sens du courant, vertical) — le signe de
  `MOULIN_SPIN_RATE` a été choisi pour que le point bas (celui qui
  touche l'eau) se déplace dans le même sens que `tx,tz` (le courant),
  conformément au principe ci-dessus.
- Classée far/near par SA PROPRE position (`pointFar`), PAS par
  `streamExtrasFar` (qui ne concerne que le point de croisement du
  pont, à un autre endroit) — même genre de bug que celui corrigé sur
  les bretelles de la place en v0.65, évité dès le départ cette fois.

Vérifié en Playwright : roue visible et animée (rayons à des angles
différents d'une capture à l'autre), aucune erreur console sur ~50s de
jeu en continu avec rotations de caméra régulières.

**Économie (v0.69)** : toucher/cliquer le moulin (nouvelle distinction
tap-vs-glissé sur le canvas : peu de mouvement + peu de temps depuis le
`pointerdown` = tap) fait apparaître `#moulinBtn`, un vrai bouton DOM
flottant (`position: fixed`, repositionné chaque frame dans `render()`
via `project()` sur la position du moulin, donc reste ancré au-dessus
de lui même en tournant la caméra). Paliers géométriques, même moteur
que le jardin (`gardenCost`/`gardenRate`) réutilisé comme modèle :
`moulinCost`/`moulinRate`, `MOULIN_GROWTH=1.35` (identique au jardin).
"Un tarif équilibré" pris au sens propre plutôt que littéral : même
ratio coût/revenu que le jardin (30 or pour 0.4 or/s, même rapport que
15 or pour 0.2 or/s) — plus raisonnable que le "1 or/s" donné en
exemple par Pierre, qui aurait été ~2.5x plus généreux que le jardin à
coût comparable. 6 paliers max.

Vérifié en Playwright : tap détecté correctement (bouton apparaît),
tarif exact ("30" puis "41" = round(30×1.35) au palier suivant), achat
déduit bien l'or et incrémente le niveau, le bouton suit la caméra
pendant une rotation (position CSS mesurée différente avant/après),
revenu passif observé après ~5s d'attente. Aucune erreur console.

## Eau du ruisseau qui s'arrêtait avant le bord de l'écran sur rotation → fait en v0.67

Signalé en session : "l'eau doit être visible jusqu'au bord de
l'écran, même si on tourne... dès que je tourne ça fait des espaces où
il y a pas d'eau avec les contours". Cause trouvée : `STREAM_FLOW_RANGE`
et la portée de `glintSeeds.stream` étaient des constantes FIXES à 640,
choisies en v0.63/v0.64 en supposant que ça suffirait à couvrir
`streamHalfLen()` (= `SPAWN_R`, qui dépend de la taille d'écran) — sur
un écran large, `SPAWN_R` peut dépasser 640, donc les berges (qui
suivent `SPAWN_R`) continuaient plus loin que l'eau qui coule dedans,
visible surtout en tournant vers cette zone.

Fix : portée dynamique (`Math.max(640, streamHalfLen() + 40)`),
recalculée dans `ensureStreamFlowSeeds`/`ensureGlintSeeds` — 640 reste
le plancher (cas courant), mais suit `SPAWN_R` quand il est plus
grand. `streamFlowSeeds`/`glintSeeds` sont maintenant invalidés dans
`resize()` (comme `_streamSegsCache`) pour se recalculer si la fenêtre
change de taille — et donc déclarés tout en haut du script, avec
`_streamSegsCache`, pour la même raison de TDZ (resize() les touche
avant que le script n'atteigne leur ancien emplacement plus bas).

Vérifié en Playwright : balayage de 24 angles de caméra, aucune erreur
console.

## Le ruisseau devient infranchissable, sauf au pont ("très important") → fait en v0.68 (ennemis), v0.76 (joueur)

Signalé "très important" : "le cours d'eau est beaucoup trop rapide,
personne ne peut le traverser, il faut absolument passer par le pont."
Jusque là purement décoratif — ennemis (et joueur) marchaient au
travers sans rien qui les arrête, rendant le pont facultatif.

`avoidStream(e, dt)`, même esprit qu'`avoidBushes` déjà en place : un
ennemi qui approche du ruisseau HORS du couloir du pont (± `BRIDGE_SPAN_HALF`
autour de d=0) est repoussé au bord (mur invisible), puis glisse le
long de la berge vers le pont jusqu'à pouvoir passer.

**Vrai bug trouvé en testant** (hook de debug temporaire lisant
d/perp de chaque ennemi en direct, retiré avant commit — pas juste
supposé que ça marchait) : le premier essai clampait la position au
bord PUIS faisait dériver l'ANGLE POLAIRE brut (autour du donjon) vers
l'angle du pont, à RAYON CONSTANT — or le ruisseau n'est pas un cercle
centré sur le donjon, donc tourner à rayon constant pouvait replonger
dans l'eau un peu plus loin (mesuré : un ennemi à perp=-9, soit
DANS l'eau, à d=382, largement hors du couloir du pont). Fix : tout le
calcul (y compris la dérive vers le pont) se fait entièrement dans le
repère du ruisseau (d, perp) plutôt qu'en coordonnées polaires autour
du donjon — converti en (r, angle) une seule fois à la fin, ce qui
garantit de rester exactement sur le bord pendant toute la dérive.

Vérifié en Playwright : 623 échantillons sur ~60s de jeu en continu
(vagues forcées en rafale pour maximiser le nombre d'ennemis actifs) —
0 violation (aucun ennemi mesuré dans l'eau hors du couloir du pont),
contre au moins 1 avec la première version. Capture visuelle : les
ennemis s'agglutinent bien le long de la berge/route vers le pont
plutôt que de traverser n'importe où. Aucune erreur console.

Joueur : voir plus bas ("→ fait en v0.76") pour l'extension au seigneur
et les deux vrais bugs supplémentaires trouvés en l'implémentant.

## Zone sacrée de l'église (3e des 6 gros chantiers) → fait en v0.70

Même principe que le moulin (bouton flottant `#egliseBtn` au toucher de
l'église, tap-vs-glissé déjà en place réutilisé), paliers géométriques
qui agrandissent une ellipse au sol :

- `EGLISE_ZONE_TIERS` : 4 paliers (25/55/100/180 or), `rx`/`rz` croissants
  — une VRAIE ellipse (pas un cercle) orientée le long de la nef
  (`EGLISE_EXTRA.yaw`), plus cohérente visuellement avec un bâtiment
  allongé qu'un rond centré dessus.
- Dessin (`drawEgliseZone`) : même vocabulaire que la place (N-gone,
  classé par arête via `pointFar` — précaution reprise du correctif des
  traits fantômes de v0.65, même si le risque est moindre ici : une
  forme fermée autour d'un point fixe, pas une corde entre deux points
  éloignés).
- Dégâts (`updateEgliseZoneDamage`, appelé pour chaque ennemi `approach`
  comme `avoidBushes`/`avoidStream`) : test point-dans-ellipse à chaque
  frame, `e.holyInside` traqué pour détecter la TRANSITION dehors→dedans
  (pas juste "est dedans", qui frapperait à chaque frame) ; `e.holyHits`
  compte les passages, plafonné à 2 dans la vie de l'ennemi. Dégât =
  moitié de `maxHp` (pas `hp` courant) à chaque passage, pour garantir
  "deux passages complets pour tuer" quel que soit le dégât déjà subi
  ailleurs, comme demandé littéralement.

Pas fait (assumé, cohérent avec le scope du ruisseau infranchissable) :
pas de comportement d'évitement/apprentissage pour les ennemis — la
zone punit mais ne repousse pas, ce qui colle à "s'ils veulent quand
même y passer" (implique une exposition incidente, pas activement
évitée par l'IA) plutôt qu'à une vraie IA "apprenante" hors de portée
raisonnable pour cette session.

Vérifié en Playwright (hooks de debug temporaires marquant UN ennemi
précis par référence — pas `enemies[0]`, dont le sens change si un
autre meurt entre deux appels — retirés avant commit) : cycle complet
mesuré sur un ennemi frais (hp=4/maxHp=4) → entre dans la zone → hp=2,
holyHits=1, holyInside=true ; sort → holyInside=false ; rentre à
nouveau → mort (retiré du tableau), exactement conforme à la règle.
Tarif/paliers vérifiés (25 puis 55, coûts exacts déduits de l'or).
Bouton suit la caméra en tournant. Aucune erreur console.

## Ralentissement du seigneur dans les douves (4e des 6 gros chantiers) → fait en v0.71

Confirmé explicitement par Pierre en session (question posée via
AskUserQuestion) : "30% ralenti en traversant l'eau, réduit à
seulement 10% avec le cheval — pas annulé". Câblé dans le même point
du mouvement du seigneur que le boost du cheval lui-même
(`speedMul`, juste avant le calcul du pas radial capé) : dans la bande
BASE_R → `MOAT_TIERS[niveau-1].r` (même bande que le ralentissement
déjà appliqué aux ennemis), `speedMul *= 0.7` sans cheval, `×0.9` avec
— multiplicatif avec le boost du cheval (`horseMul`), pas remplacé
par lui, donc "réduit à 10%" plutôt qu'annulé comme demandé.

Vérifié en Playwright (hooks de debug temporaires, retirés avant
commit) : trace haute résolution (`requestAnimationFrame`, pas de
sondage à intervalles fixes qui aurait ajouté du bruit d'aller-retour
réseau) de `state.player.r` pendant une sortie tenue, filtrée sur la
bande 74-87 des douves. Sans cheval : 98.4 unités/s mesurées contre
140×0.7=98 attendu. Avec cheval : 252.8 unités/s mesurées contre
140×2×0.9=252 attendu — correspondance quasi exacte dans les deux cas.
Aucune erreur console.

Pas fait (scope assumé, comme noté pour le ruisseau infranchissable) :
n'affecte que le seigneur, pas les paysans qui fuient au château (ils
ne traversent pas les douves de toute façon, leur trajet passe par la
porte).

## Cours d'eau secondaire vers les douves (5e des 6 gros chantiers) → fait en v0.72

Dès `state.moatLevel > 0` : un petit cours d'eau part d'un point en
amont du ruisseau principal (`TRIBUTARY_D=-150`, avant le pont à d=0)
et se déverse dans les douves. Largeur = `STREAM_HALF_WIDTH/3`
(`TRIBUTARY_HALF_WIDTH`), particules = `STREAM_FLOW_COUNT/9`
(largeur/3 ET densité/3, comme demandé littéralement).

- Géométrie (`tributaryGeometry`/`tributaryPointAt`) : point d'arrivée
  sur les douves recalculé chaque frame à partir de
  `MOAT_TIERS[niveau-1].r` (suit l'agrandissement des douves), décalé
  angulairement du pont (`TRIBUTARY_ANGLE_OFFSET`) pour ne pas se
  déverser exactement dessus. Trajet interpolé en COORDONNÉES POLAIRES
  autour du donjon (même principe que `bowedPathPoints`, réutilisé tel
  quel pour les berges via `drawBowedSplitRoadPath`) plutôt qu'une
  corde droite — les deux extrémités sont à des rayons/angles très
  différents, une ligne droite couperait près du donjon (même bug que
  celui corrigé sur les bretelles de la place en v0.65).
- Particules (`drawTributaryFlow`) : s'éteignent PROGRESSIVEMENT avant
  d'atteindre les douves (`TRIBUTARY_FADE_START=0.75`, le rayon
  rétrécit vers 0) plutôt que de vraiment entrer dans l'eau stagnante.
  Fondu par RAYON plutôt que par alpha : `wrapPhosphor` force
  `fillStyle` en Phosphore/Filaire (voir plus haut dans ce fichier),
  un fondu en alpha n'y serait pas visible, mais un rayon qui rétrécit
  fonctionne dans tous les styles.
- Dessiné dans le même ordre que les routes/la place par rapport aux
  douves (avant l'anneau d'eau) pour qu'il disparaisse visuellement
  sous la surface des douves à son point d'arrivée, comme un vrai
  affluent.

Vérifié en Playwright : capture zoomée après achat des douves — petit
affluent visible partant du ruisseau principal près du pont, courbant
vers l'anneau des douves, particules visibles le long du trajet.
Aucune erreur console sur plusieurs vagues jouées avec les douves
actives.

## Échiquier 8x8 dans la scène cosy (6e et dernier des 6 gros chantiers) → fait en v0.73

"Un vrai carré de huit cases par huit cases... des cases pleines, des
cases vides, pour qu'on voit qui joue aux échecs." Remplace l'ancienne
table (un simple rectangle gris plat, `fillRect`) par un vrai damier
8x8 projeté en isométrique (`drawChessBoard`, même recette que les
dalles du sol de la pièce : `cosyIso`+`cosyQuad` par case plutôt qu'une
texture plaquée à plat). Le seigneur et la princesse étaient déjà
positionnés juste à côté de cette table (voir `renderCosyScene`) : ils
"jouent" naturellement ensemble à la même table, sans avoir à les
redéplacer.

Cases alternées classiquement (`(cx+cz)%2`), plus un pion/silhouette
sur les rangées de départ (0-1 et 6-7, milieu vide) pour "qu'on voit
qui joue" sans simuler une vraie partie coup par coup — au-delà du
scope demandé.

Vérifié en Playwright (capture zoomée sur la vue cosy) : damier 8x8
bien visible entre les deux figures, alternance claire des cases,
aucune erreur console.

## Zoom pincé à deux doigts (dernier des 6 gros chantiers, plus les questions restées ouvertes) → fait en v0.74

Décrit en détail par Pierre, avec deux questions de clarification déjà
répondues en session (AskUserQuestion) : dézoome max = vue
d'aujourd'hui (confirmé), repart à zéro/dézoomé à CHAQUE chargement,
pas persisté (confirmé — donc pas de sauvegarde localStorage, juste
une valeur par défaut).

Implémenté comme un simple HABILLAGE visuel par-dessus le rendu
existant (`ctx.translate(camPanX,camPanY); ctx.scale(camZoom,camZoom);`
autour de tout le dessin du monde dans `render()`) plutôt qu'en
touchant `project()`/`rot` — la rotation continue à tourner autour du
donjon exactement comme avant (le zoom n'est qu'une loupe posée
dessus), et les épaisseurs de trait/tailles de texte suivent le zoom
automatiquement (comportement natif de `ctx.scale()`, aucun des
centaines d'appels `lineWidth = ... * scale` dans le fichier n'a eu
besoin d'être touché).

- Détection du pincement : `activePointers` (Map pointerId→{x,y}) sur
  les événements `pointerdown`/`pointermove`/`pointerup` déjà en place
  pour le glissé de rotation — à 2 doigts actifs, bascule en mode
  pincement (`startPinch`) et suspend la rotation ; au retour à 1 doigt,
  reprend la rotation depuis la position ACTUELLE du doigt restant
  (pas l'ancienne, pour éviter un saut).
- Ancrage au point pincé : `pinchAnchorX/Y` capture, à l'ouverture du
  pincement, le point du monde (en repère "avant zoom") actuellement
  sous le milieu des deux doigts ; à chaque mouvement, `camPanX/Y` est
  recalculé pour que CE point reste sous le milieu courant des doigts
  — exactement "le point où j'ai zoomé reste sous mes doigts".
- `toScreen()` : les boutons flottants DOM (moulin/église) et la
  détection de tap sur un bâtiment (`handleCanvasTap`) sont passés par
  cette fonction pour rester alignés avec le monde zoomé — sinon ils
  auraient dérivé de leur ancre dès qu'on zoome.
- La bannière FIGHT!/la neige restent volontairement HORS du repère
  zoomé (`ctx.restore()` juste avant leur dessin) : ce sont des
  éléments HUD écran-fixe, pas des éléments du monde.

Vérifié en Playwright (PointerEvent synthétiques à deux pointerId
distincts, dispatchés directement sur le canvas — la vraie simulation
tactile multi-doigts n'est pas disponible dans cet environnement) :
- Pincement écarté (20px → 400px, centré fixe) : zoom clampé à 4 (max),
  pan calculé exactement `mid - anchor*zoom` (vérifié à la valeur
  près : -1920/-1200 pour anchor=640/400, zoom=4).
- Repincement resserré vers 20px : zoom et pan reviennent exactement à
  1/0 — dézoom max = vue par défaut, confirmé.
- Relâcher un seul doigt puis glisser avec l'autre : zoom reste
  inchangé, la rotation (theta) reprend et bouge normalement — la
  chasse au donjon reste centrée dessus (aucune touche à `rot`).
- Capture visuelle à zoom=4 : donjon nettement agrandi, UI DOM
  (boutons, jauge d'or) restée à taille fixe comme attendu, aucune
  erreur console. Re-testé ensuite que le moulin (tap + achat + suivi
  caméra) fonctionne toujours identiquement à zoom=1 par défaut — pas
  de régression.

Pas fait (hors du scope confirmé par les réponses de Pierre) : pas de
comportement souris/desktop dédié (molette pour zoomer) — resté
tactile uniquement, comme décrit dans la demande d'origine.

## Grange lointaine, pour la continuité visuelle du ruisseau → fait en v0.75

Redemandé en session ("je te l'avais déjà signalé"), formulation restée
vague ("pour la perspective, la continuité de l'eau par rapport au
champ visible"). Interprétation retenue faute de mieux : un bâtiment
supplémentaire loin le long du ruisseau, sur la même berge que le
moulin mais bien plus loin en amont (d=-460 contre d=-220 pour le
moulin), pour ancrer visuellement l'idée que l'eau continue au loin
plutôt que de sembler s'arrêter dans le vide.

Position vérifiée numériquement (script à part, même méthode que pour
tous les autres bâtiments de la session) contre les deux routes et
tous les bâtiments existants (moulin inclus) : marges > 120 unités
partout. Réutilise `drawGrange` telle quelle (même recette visuelle
que la grange du cœur de village, juste une autre position/orientation)
— ajoutée à `ALL_VILLAGE_EXTRAS` après coup (`.push`, une fois
`streamGeometry`/`streamPointAt` disponibles) plutôt que déclarée à sa
place d'origine, pour éviter le même piège de TDZ déjà rencontré
plusieurs fois cette session.

Vérifié en Playwright : capture zoomée près du bord de la carte — la
grange est bien visible juste à côté du ruisseau, à son extrémité
visible. Aucune erreur console.

À corriger si l'intention réelle de Pierre était différente — la
formulation d'origine reste ambiguë malgré cette interprétation.

## Le ruisseau infranchissable s'applique maintenant aussi au seigneur → fait en v0.76

Reprise du "Pas fait" laissé en v0.68 : `avoidStream(e, dt)` ne
bloquait que les ennemis, pas le joueur en sortie. Appliquée telle
quelle au joueur (`avoidStream(p, dt)` dans la même section du
mouvement, juste après le lissage de `p.r`) — deux vrais bugs trouvés
en la testant sérieusement (traces image par image via hooks de debug
temporaires, jamais supposé que ça marchait sans mesurer) :

**Bug n°1 — tunnel en un seul pas.** Le test "suis-je dans l'eau
maintenant ?" est un test PONCTUEL : à faible fréquence d'image (`dt`
plafonné à 0.05s dans `loop()`) ou juste un mouvement rapide
(`ANGLE_SPEED=1.6rad/s` à rayon ~300 fait jusqu'à ~24 unités/frame de
déplacement tangentiel), un seul pas de mouvement peut traverser toute
la largeur bloquée (~34 unités) sans que `perp` ne soit JAMAIS mesuré
à l'intérieur entre les deux frames — invisible pour un test ponctuel.
Fix : `e.streamSide` mémorise de quel côté l'entité était classée la
dernière fois qu'elle était loin de l'eau ; si le côté a changé pendant
qu'elle est encore hors du couloir du pont, c'est qu'elle vient de
traverser en un pas — renvoyée du côté d'où elle venait plutôt que
d'accepter sa nouvelle position (vraie détection de collision balayée,
pas un test ponctuel). Ce bug touchait aussi la version ennemis
existante depuis v0.68 (même fonction partagée), simplement jamais
observé là car leur mouvement par frame est bien plus petit.

**Bug n°2 — la garde `if (p.groundPos > 0.5)` coupait la protection
en pleine traversée.** L'appel à `avoidStream` pour le joueur était
gardé par `p.groundPos > 0.5` (l'idée : sur la plateforme, `p.r` reste
près de `PLAYER_R`, jamais assez près du ruisseau pour compter). Mais
`groundPos` s'apaise vers 0 dès que `p.behavior` redevient `'combat'`
(retour vers la plateforme) — ce qui peut arriver AVANT que `p.r` soit
réellement redescendu près de la plateforme, en particulier si le
joueur relâche la sortie en pleine traversée du ruisseau. Résultat
mesuré : le joueur glissait alors librement à travers l'eau, `perp`
descendant continûment de +37 à -13 sans aucune correction, la
protection s'étant simplement arrêtée en chemin. Fix : suppression
totale de la garde, `avoidStream(p, dt)` appelé à chaque frame comme
pour les ennemis (aucune régression : à rayon proche de `PLAYER_R` la
position n'est de toute façon jamais près du ruisseau, donc l'appel
est un no-op inoffensif dans ce cas).

**Piège de méthodologie de test rencontré en chemin** (gardé en note
pour la prochaine fois) : mon premier test forçait `p.r`/`p.angle`
dans l'eau et `p.behavior='sortie'` SANS `state.sortieHeld=true` — or
`p.behavior` est recalculé CHAQUE frame à partir des drapeaux d'entrée
en direct (pas persisté), donc dès la frame suivante il retombait à
`'combat'`/retour plateforme, rendant le test non représentatif (même
résultat avant/après un vrai fix, suggérant à tort que le fix ne
servait à rien). Corrigé en donnant une vraie cible de sortie
(`wanderAngle`/`wanderR` de l'autre côté du ruisseau, `sortieHeld=true`)
pour le scénario réaliste, ET en gardant un hook séparé pour le cas
limite (sortie relâchée en pleine traversée) qui a justement révélé le
bug n°2 ci-dessus — les deux scénarios comptent.

Vérifié en Playwright, deux scénarios distincts :
- Sortie tenue avec vraie cible en face : 91 échantillons sur 1.5s,
  0 violation, `perp` reste épinglé exactement à ±17 (la limite de
  berge) pendant toute la traversée vers le pont.
- Sortie relâchée en pleine traversée (le cas qui a révélé le bug
  n°2) : 91 échantillons sur 1.5s, 0 violation après le double fix
  (contre une vraie brèche mesurée avant : `perp≈-0.8` à `d≈-80`, en
  plein milieu de l'eau, hors du couloir du pont).
- Non-régression côté ennemis (fonction partagée touchée) : 28
  échantillons sur ~20s de jeu avec vagues forcées, 0 violation —
  toujours bloqués comme en v0.68.
- Balayage d'erreurs console général : aucune erreur (hors un 404
  réseau déjà présent avant ce changement, sans rapport).

Tous les hooks de debug temporaires (`__DEBUG_FORCE_PLAYER_INTO_STREAM`,
`__DEBUG_FORCE_PLAYER_INTO_STREAM_UNHELD`, `__DEBUG_STREAM_CHECK`,
`__DEBUG_PLAYER_STREAM_PERP`, `__DEBUG_TRACE_PLAYER_STREAM`) retirés
avant ce commit.

## Bélier + engins de siège à distance (item A de la consigne du 2026-09-08) → fait en v0.77

Repris après validation explicite de Pierre en session ("le bélier :
très tanky, très lent, gros dégâts au contact") — stats implémentées
telles quelles, pas devinées.

**Choix d'implémentation, pour rester à faible risque** : plutôt que de
toucher au pathing des ennemis (tout le monde continue de marcher
jusqu'au mur exactement comme avant — zéro changement à l'équilibrage
déjà réglé via le simulateur de difficulté), seul le POINT DE FORMATION
de l'engin fini change pour les tiers concernés. `clusterSiegeEngines()`
se déclenche toujours de la même façon (un groupe d'ennemis stagne
ensemble au mur), mais l'engin qui en sort apparaît directement
positionné loin du donjon (`SIEGE_RANGED_R = 300`) pour les tiers
`ranged`/`crawl`, plutôt qu'au point exact du regroupement — lit comme
"il vient d'être monté là-bas", sans exiger de refonte de l'IA
d'approche.

- **`SIEGE_RANGED_R = 300`** : choisi nettement au-delà d'`ATTACK_RANGE`
  (260, la portée de tir des tourelles et du seigneur sur les remparts)
  — ni l'un ni l'autre ne peut toucher un engin à distance sans sortir,
  cohérent avec l'esprit "le trébuchet exploite une portée que les
  défenseurs n'ont pas". Reste nettement en-deçà de `SPAWN_R` (≥480),
  donc toujours bien visible à l'écran.
- **Trébuchet (tier 2)** : `ranged: true`. Se fabrique maintenant à
  `SIEGE_RANGED_R` et y reste fixe — ne s'approche jamais. Au lieu
  d'infliger ses dégâts instantanément au mur à chaque cooldown, tire
  maintenant un vrai projectile visible (`fireSiegeShot`, trajectoire
  lobée `sin(t·π)`, ~0.7s de vol) qui applique les dégâts à l'impact —
  mêmes dégâts/cadence qu'avant (`tier.dmg`/`tier.cooldown` inchangés),
  juste rendus visuellement plutôt qu'abstraits.
- **Bélier (nouveau tier 4)** : `crawl: true`, `hp: 55` (le plus tanky
  de tous), `dmg: 22` (le plus fort de tous), `cooldown: 3.4`. Se
  fabrique aussi à `SIEGE_RANGED_R`, puis rampe vers le mur
  (`BELIER_CRAWL_SPEED = 4` unités/s, soit ~57s pour traverser — "très
  lentement" au sens propre) sans attaquer tant qu'il n'a pas atteint
  `BASE_R`. Une fois au contact, mêlée classique (dégâts instantanés au
  mur, comme l'arbalète, pas de projectile — il est littéralement
  collé au mur). Rejoint naturellement le tier le plus élevé de la
  formule existante (`Math.min(group.length - 2, SIEGE_TIERS.length - 1)`,
  aucun changement de formule nécessaire) — ne peut apparaître qu'avec
  les plus gros regroupements (6+ attaquants au même endroit), déjà
  rares d'après le réglage précédent de `SIEGE_GROUP_RADIUS`, donc
  reste un évènement tardif/rare comme attendu pour un engin aussi
  fort.
- Visuel : `drawSiegeEngine` réutilisé tel quel (couleur/rayon indexés
  par tier, tableau `colors` étendu à 5 entrées) — le bélier hérite
  automatiquement du plus grand rayon (`13 + tierIdx*3`), cohérent avec
  "gros et lent". `drawProjectile` distingue `pr.siegeShot` (caillou
  gris plus gros, trajectoire en arc) du tir tendu existant (flèche/
  carreau, inchangé).

Vérifié en Playwright (hooks de debug temporaires injectant directement
un engin dans `state.siegeEngines` à un tier/rayon donné, pas juste
supposé) :
- Trébuchet forcé à `r=300` : reste exactement à 300 après 3.5s (aucun
  déplacement), `castleH` baisse de 10 (son `dmg`) après le premier
  cycle tir+impact — le projectile fait bien son travail.
- Bélier forcé à `r=300` : après 2s, `r≈292` — exactement
  `300 - 4×2 = 292`, la vitesse de reptation est correcte.
- Bélier forcé juste au-dessus du mur (`r=75`) : après 4s (>cooldown),
  `r` s'est arrêté pile à `BASE_R=74` (ne descend pas en-dessous) et
  `castleH` a baissé de 22 (son `dmg`, dégât de contact appliqué une
  fois arrivé). Son hp a légèrement baissé (55→54.05) entre-temps — pas
  un bug : à `r=74` il est maintenant à portée des tourelles/du
  seigneur, qui le prennent pour cible comme n'importe quelle menace
  (confirme au passage que la mise à portée fonctionne dans les deux
  sens).
- Balayage d'erreurs général (vagues forcées en rafale) : aucune erreur
  console, ni avec le hook de debug ni en jeu normal.

Tous les hooks de debug temporaires (`__DEBUG_SPAWN_SIEGE`,
`__DEBUG_SIEGE_STATE`) retirés avant ce commit.

**Pas fait / hors scope de cette passe** : le bouclier et l'arbalète
gardent exactement leur comportement d'avant (formés et figés au pied
du mur) — seuls le trébuchet et le bélier ont une notion de portée/
distance, cohérent avec le fait que seul le trébuchet était visé
explicitement par la consigne pour le tir à distance.

## Arrivée par bateau (item 4 de la consigne du 2026-09-08) → fait en v0.78

Confirmé par Pierre en session : une vague dédiée de temps en temps,
séparée des vagues normales, pas mélangée avec elles.

**Choix d'implémentation** : entièrement indépendant du système de
vagues (`state.wave`/`startWave`) — son propre minuteur
(`state.boatTimer`, `BOAT_EVENT_MIN_INTERVAL`/`MAX_INTERVAL` = 50-80s,
aléatoire dans cette fourchette) déclenche `spawnBoat()` peu importe
l'état de la vague en cours. Les ennemis débarqués rejoignent
`state.enemies` en état `'approach'` normal (via `spawnBoatEnemy`,
copie de `flushHouseEnemy` juste positionnée ailleurs) — ils marchent,
peuvent se cacher dans une maison, former un engin de siège, tout
comme n'importe quel autre ennemi, sans toucher au reste de l'IA ni à
`waveSpawnCount`/`enemyHp` (aucun risque pour l'équilibrage déjà
réglé). Vérifié explicitement que la condition de fin de vague
(`toSpawn===0 && enemies.length===0 && siegeEngines.length===0`) ne
regarde pas `state.boats` — comportement voulu : un bateau en approche
n'empêche pas la vague normale de s'enchaîner, exactement "séparé, pas
mélangé".

- **Point de débarquement** (`BOAT_LANDING_D=140`) : choisi côté aval
  du pont (d positif), à l'écart du couloir du pont ET du confluent
  affluent/moulin/grange lointaine (tous côté amont, d négatif) —
  vérifié numériquement (script à part, même méthode que pour tous les
  bâtiments de la session) : marge >130 unités vs la maison/route la
  plus proche, largement au-delà des douves max (178, le point de
  débarquement est à r≈215 du donjon). Berge côté donjon
  (`BOAT_BANK=-1`) pour que les ennemis débarqués aient une marche
  cohérente vers le mur.
- **Trajet** : le bateau part de `BOAT_APPROACH_D=420` (loin en aval,
  toujours dans la portion dessinée du ruisseau puisque
  `streamHalfLen()>=SPAWN_R>=480`) et glisse le long de la ligne
  centrale du ruisseau (pas la berge — il est sur l'eau) à
  `BOAT_SPEED=30` unités/s vers `BOAT_LANDING_D`. Une fois arrivé,
  débarque son équipage (`BOAT_CREW=3`, nombre pas précisé par Pierre —
  choix raisonnable pour que ça reste un évènement ponctuel plutôt
  qu'un raz-de-marée, à ajuster si besoin une fois vu en jeu réel) et
  disparaît.
- **Visuel** (`drawBoat`) : "pavé simple, style actuel à dessiner" pris
  au sens propre — un simple quad en bois orienté le long du courant,
  avec des pips d'équipage au-dessus (même langage visuel que les
  engins de siège), pas de rendu détaillé. Classé far/near comme
  n'importe quel point mobile (`pointFar`, recalculé chaque frame
  puisque son angle autour du donjon change avec `.d`, contrairement
  aux engins de siège qui restent fixes une fois formés).

Vérifié en Playwright (hooks de debug temporaires : bateau forcé,
avance accélérée jusqu'au débarquement, position lue en direct — pas
juste supposé) :
- Bateau créé à `d=420` (confirmé), avance à exactement 30 unités/s
  (`d=390` après 1s).
- Avancé artificiellement jusqu'au seuil : débarquement confirmé —
  `state.boats` vidé, exactement `BOAT_CREW=3` nouveaux ennemis ajoutés
  à `state.enemies`, tous en état `'approach'`.
- Capture visuelle (caméra recentrée sur l'angle réel du bateau, lu via
  un hook dédié plutôt que deviné) : le bateau apparaît bien comme un
  petit quad filaire sur le ruisseau, dans le même style vert phosphore
  que le reste du jeu — confirme au passage que `wrapPhosphor` écrase
  bien la couleur brune littérale choisie dans le code par la couleur
  phosphore active, comme établi plus tôt cette session pour d'autres
  éléments.
- Balayage d'erreurs général : aucune erreur console.

Tous les hooks de debug temporaires (`__DEBUG_SPAWN_BOAT`,
`__DEBUG_BOAT_STATE`, `__DEBUG_FASTFORWARD_BOAT`, `__DEBUG_SET_THETA`,
`__DEBUG_BOAT_SCREEN_POS`) retirés avant ce commit.

**Pas fait / hors scope de cette passe** : "les ennemis se dispatchent
pour choisir où construire leurs engins de siège" (deuxième moitié de
l'item 4 dans la consigne d'origine) — un ennemi débarqué par bateau
peut toujours rejoindre un engin de siège au pied du mur exactement
comme n'importe quel autre ennemi (via `clusterSiegeEngines`,
inchangé), mais il n'y a pas de logique de "choix de meilleur
emplacement" dédiée — jugé hors scope de cette demande précise
(arrivée par bateau), déjà noté ailleurs dans ce fichier comme son
propre chantier séparé.

## Refonte routes → centre-ville → chemin → donjon (item 3, consigne du 2026-09-08) → fait en v0.79

Confirmé explicitement par Pierre en session ("vraie refonte
géométrique") plutôt que la version visuelle légère envisagée au
départ — les 8 maisons de `HOUSES` ont bougé, plus seulement le style
de dessin.

**Constat de départ** : les 8 maisons étaient placées à des angles
totalement indépendants des deux routes (`ROAD_ANGLES≈2.1/-2.3`) — de
±0.68 à ±2.5 rad d'écart, pur décor sans rapport avec le trajet réel
des ennemis (déjà noté dans le diagnostic `HOUSE_HIDE_R` plus haut dans
ce fichier). Un ennemi qui marche vers le mur ne "traversait" jamais
un vrai hameau, juste des maisons éparpillées au hasard dans le
paysage.

**Choix d'implémentation, pour rester à risque maîtrisé malgré
l'ampleur** : plutôt que de toucher au pathing des ennemis
(`roadAngleAt`, la fonction qui les fait marcher, reste identique au
caractère près — zéro changement à l'équilibrage déjà réglé), la
refonte porte sur la GÉOMÉTRIE STATIQUE que ce pathing traverse déjà :
- **Maisons regroupées en deux hameaux**, un par route, dans la bande
  r≈230-300 (au-delà des douves max=178) : 4 près de
  `ROAD_ANGLES[0]=2.1` (±0.55 rad), 4 près de `ROAD_ANGLES[1]=-2.3`
  (±0.55 rad) — un vrai village que la route dessert, plutôt qu'un
  décor sans rapport.
- **`VILLAGE_R=210`** : rayon de bascule visuelle route→chemin, choisi
  juste sous la maison la plus proche (232) pour que la bascule tombe
  pile à la sortie du hameau. `drawRoadSeg`/`drawRoadRun` distinguent
  maintenant deux tronçons : la ROUTE (r≥VILLAGE_R, style plein
  habituel) qui traverse le hameau, puis le CHEMIN (r<VILLAGE_R, plus
  fin et tireté) qui continue seul jusqu'au donjon. Purement visuel —
  `roadAngleAt`/`roadHalfAngle` restent identiques des deux côtés de la
  bascule, donc **aucun changement au pathing ni à la vitesse des
  ennemis** (le bonus de vitesse "sur la route", basé sur
  `roadHalfAngle`, n'est pas touché non plus).
- **Distinction qui survit à tous les styles visuels** : en Phosphore/
  Filaire, `wrapPhosphor` écrase de toute façon toute couleur littérale
  (piège déjà repéré plusieurs fois cette session) — la route/le chemin
  se distinguent donc par `lineWidth`/`setLineDash` (propriétés hors-
  couleur du contexte canvas, qui survivent), pas par la couleur. En
  style Couleur (`drawRoadSeg`, quads pleins), une teinte différente
  s'ajoute en plus (`#9c8360` route / `#6e5c40` chemin, terre battue).

**Positions des maisons** : plutôt que deviner à la main (8 positions
sous 5 contraintes simultanées — bien plus dur que les placements à un
seul bâtiment de cette session), génération par recherche aléatoire
sous contraintes (script à part, rejection sampling : bande r/angle
par hameau, marge minimale vs les deux routes, le ruisseau, les autres
maisons du même hameau, le point de débarquement des bateaux v0.78),
PUIS vérification numérique indépendante de chaque position acceptée
(même méthode que tout le reste de la session, script séparé de la
génération pour ne pas juste re-vérifier avec le même code qui a
généré) contre : les douves max, le ruisseau (échantillonné sur toute
sa longueur, ±700 unités), les deux routes (échantillonnées sur toute
leur longueur), le point de débarquement des bateaux, le cœur de
village/la ferme (church/grange/fontaine, à un angle totalement
différent), le moulin et la grange lointaine (tous deux côté amont du
ruisseau, d<0, donc naturellement loin). Marge minimale trouvée : 23
unités (maisons vs routes — volontairement serré, "sur le passage"
plutôt que loin dans les champs), toutes les autres marges > 35.

**Effet de bord positif, vérifié** : `HOUSE_HIDE_R=140` (la mécanique
de cachette dans les maisons, réglée en v0.53 après 3 itérations parce
que les ennemis "tout-terrain" ne passaient presque jamais assez près
des maisons d'alors) devrait maintenant se déclencher BEAUCOUP plus
souvent — les maisons sont désormais à 23-300 unités des routes au
lieu de plusieurs centaines. Pas retouché (pas nécessaire, la
mécanique elle-même n'a pas changé) mais noté en commentaire à côté de
`HOUSE_HIDE_R` pour la prochaine fois qu'on y touche.

Vérifié en Playwright :
- Balayage caméra (plusieurs rotations) : les deux hameaux bien visibles
  le long de leurs routes respectives, le tronçon "chemin" (tireté, plus
  fin) clairement visible entre le pont et le donjon sur les deux
  captures qui le cadrent — capture à l'appui.
- 8 vagues forcées en rafale (beaucoup d'ennemis actifs simultanément,
  cachettes/engins de siège/tout le reste du jeu en action avec les
  nouvelles positions) : aucune erreur console.
- Vérification numérique indépendante de toutes les contraintes de
  collision listées ci-dessus, script tenu à part du script de
  génération.

**Pas fait / hors scope de cette passe** : le "cœur de village"
(église/grange/fontaine/place, `VILLAGE_EXTRAS`) reste où il était,
volontairement — la consigne d'origine nomme spécifiquement "maisons"
(`HOUSES`), et ce cœur de village est déjà noté ailleurs dans ce
fichier comme son propre ensemble intentionnellement décoratif/séparé
des routes. Pas de changement non plus à l'arrivée par bateau (v0.78,
toujours indépendante des routes) ni à `roadAngleAt`/au pathing des
ennemis — seule la géométrie statique qu'ils traversent a changé.

## Bug bloquant : menu inatteignable sur écran court, obligeait à fermer l'app → fait en v0.80

Signalé en session ("il y a un premier avec le menu... je peux pas
glisser donc il s'affiche en grand et donc après ben je suis bloqué,
je dois fermer l'application"). Traité en priorité (bug bloquant),
avant de continuer sur le reste du backlog.

**Cause trouvée, reproduite avant de corriger** (pas juste supposée) :
`#menu` contient 12 lignes (2 liens, 6 boutons, 2 curseurs de volume,
la ligne FPS, le bouton Fermer). Sur un écran court, cette liste
dépasse la hauteur de la fenêtre. `body` a `overflow:hidden` et
`touch-action:none` (nécessaires pour le canvas de jeu et le
pincement de zoom, voir v0.74) — mais rien ne rendait `#menu`
lui-même défilable, donc RIEN ne pouvait faire remonter le bas de la
liste à l'écran. Le bouton Fermer, dernier de la liste, devenait
littéralement hors-écran et incliquable.

Reproduit en Playwright (viewport 360×560, volontairement court) AVANT
correction : `#closeMenu` mesuré à `y=594` alors que la fenêtre ne
fait que 560 de haut — 34px sous le bord visible, molette/glissé tactile
sans aucun effet (position identique avant/après tentative de scroll).
Confirme exactement le bug décrit.

**Fix** : `#menu`/`#overlay` reçoivent `overflow-y: auto` +
`-webkit-overflow-scrolling: touch` + `touch-action: pan-y` — chacun
défile maintenant dans son propre conteneur, indépendamment de
`overflow:hidden` sur `body` (qui reste inchangé, toujours nécessaire
pour le jeu lui-même).

Vérifié en Playwright :
- Même viewport court : après un glissé tactile réel (`TouchEvent`
  synthétiques) suivi d'un scroll forcé au maximum, `#closeMenu`
  remonte à `y=496`, dans l'écran. `#menu` confirmé scrollable
  (`overflowY: auto`, `scrollHeight=653 > clientHeight=560`).
- Clic sur Fermer après avoir scrollé : le menu se ferme bien
  (`hidden=true`) — pas juste visible, vraiment cliquable/fonctionnel.
- Non-régression sur écran normal (1280×800, capture à l'appui) : le
  menu tient déjà entièrement, reste centré comme avant, Fermer
  cliquable sans scroll — aucun changement visuel quand le contenu
  tient dans l'écran.
- Balayage d'erreurs général : aucune erreur console.

Même correctif appliqué à `#overlay` (écran de fin de partie) par
cohérence/prudence, bien que son contenu plus court soit peu
susceptible de déborder — coût nul, évite le même piège si du texte
plus long y est ajouté un jour.

## Cachette sur la grange/l'église, comme les maisons → fait en v0.81

Décidé à la place de Pierre (2026-09-09, "choisis à ma place") : oui,
étendre la mécanique de cachette (indestructible, délogeable par
sortie) à la grange et l'église du cœur de village. Pas la fontaine —
trop petite pour être une cachette plausible.

**Réutilisation quasi totale de la mécanique des maisons** : `hiddenCount:
0` ajouté aux entrées `grange`/`eglise` de `VILLAGE_EXTRAS`.
`ALL_HIDE_SPOTS = [...HOUSES, ...VILLAGE_HIDE_SPOTS]` combine les deux
familles une seule fois ; les deux boucles qui parcouraient `HOUSES`
(le jet de cachette par frame, et `nearestSortieTarget`) parcourent
maintenant `ALL_HIDE_SPOTS`. Le délogeage à la sortie (`sortieTarget.
hiddenCount !== undefined`, `flushHouseEnemy`) n'a demandé AUCUNE
modification : déjà entièrement générique sur `.hiddenCount`/`.x`/`.z`/
`.angle`/`.r`, que ces champs viennent d'une maison ou d'un objet
`VILLAGE_EXTRAS` — vérifié en lisant le code avant de le supposer.

Rendu : pips rouges au-dessus du toit, même langage visuel que les
maisons — extrait de `drawHouse` en un helper partagé
(`drawHiddenPips`) plutôt que dupliqué, appelé aussi depuis `drawGrange`/
`drawEglise` (au-dessus de la nef, pas du clocher, pour rester bien
visible sans chevaucher la croix).

Vérifié en Playwright (hooks de debug temporaires, ennemi forcé à la
position de l'église et maintenu sur place — repris après un premier
essai qui laissait l'ennemi s'éloigner en marchant vers le mur avant
d'avoir eu le temps de se cacher, faussant le test, pas la mécanique) :
- Se cache bien (hiddenCount passe à 1) après un temps d'exposition
  suffisant.
- Sortie du seigneur : délogé correctement (hiddenCount revient à 0).
- Une maison du village s'est aussi cachée naturellement (hors du test
  forcé) pendant la vérification — confirme que le comportement marche
  aussi en jeu normal, pas seulement via le hook.
- Aucune erreur console sur l'ensemble des tests.

**Note honnête** : la grange/l'église restent à l'écart des deux routes
principales (décision d'origine, "aucune HOUSES ni route ne passe par
là") — la mécanique s'y déclenchera donc naturellement moins souvent
que sur les maisons (qui, elles, ont été rapprochées des routes en
v0.79). C'est un choix de position déjà pris avant cette session, pas
retouché ici.

## Fontaine-soin (item C, consigne du 2026-09-08) → fait en v0.82

Décidé à la place de Pierre (2026-09-09, "choisis à ma place") : mise
en œuvre comme priorité automatique en sortie plutôt qu'un choix
explicite dans un menu séparé — le vrai choix tactique se joue à tenir
le bouton Sortie ou pas pendant qu'on est faible, pas dans une
interface à part. Guéri LUI SEUL (pas la princesse, absente) —
distinct du câlin.

**Implémentation, entièrement dans l'architecture existante** :
- `FOUNTAIN_HEAL_HP_FRAC = 0.35` : sous ce seuil de PV (sur maxHp),
  `nearestSortieTarget` renvoie directement `FOUNTAIN_EXTRA` — priorité
  absolue, avant même les engins de siège. Le reste du temps (HP
  au-dessus du seuil, vérifié en Playwright), le ciblage normal
  (engin de siège > ennemi > cachette occupée > pont) est parfaitement
  inchangé.
- Un nouveau comportement dédié (`p.behavior === 'sortie'` ET
  `sortieTarget.type === 'fontaine'`, vérifié AVANT la branche combat
  générique pour ne jamais tomber dans `sortieTarget.hp -= SORTIE_DMG`
  sur un objet qui n'a pas de `.hp`) — le joueur marche jusqu'à la
  fontaine via le même mouvement/la même cible que n'importe quel autre
  point de sortie (`targetAngle`/`targetR`/`targetGround` déjà
  génériques, aucune touche), puis se soigne en continu une fois
  arrivé, `FOUNTAIN_HEAL_TIME = 4` (un peu plus lent que le câlin,
  3s, pour refléter l'exposition/l'éloignement du mur). Petite gerbe
  d'étincelles (`spawnBurst`, réutilisé) toutes les 0.5s pendant qu'il
  boit — "rien ne se passe en silence".

Vérifié en Playwright (hooks de debug, PV forcés bas puis lecture de
l'état en direct — pas juste supposé) :
- PV pleins, sortie tenue : la fontaine n'est PAS ciblée (comportement
  normal inchangé, confirmé explicitement).
- PV à 15% du max, sortie tenue : la fontaine EST ciblée
  (`nearestSortieTarget` renvoie bien `FOUNTAIN_EXTRA`).
- Marche jusqu'à la fontaine puis soin confirmé en direct (PV mesurés
  en hausse une fois `drinking:true`), et re-priorisation automatique
  vers une cible de combat normale une fois remonté au-dessus du
  seuil de 35% — cycle complet vérifié, pas juste le déclenchement
  initial.
- Aucune erreur console.

**Note honnête, cohérente avec le reste du code** : `state.
fountainDrinking` (comme `state.calin.hugging`, déjà ainsi avant cette
session) reste à sa dernière valeur une fois qu'on quitte ce
comportement plutôt que d'être remis à `false` explicitement — sans
conséquence tant que rien d'autre ne lit ce champ (pas de retour
visuel dédié ajouté pour l'instant, juste les étincelles), mais à
garder en tête si un indicateur visuel s'appuie dessus plus tard.

**Pas fait / hors scope de cette passe** : pas de bouton dédié dans la
barre d'actions (déjà pleine, 4+4 boutons en grille) — la fontaine
n'est joignable qu'automatiquement via Sortie à faible PV, pas
sélectionnable manuellement à PV normal ("je veux boire un coup même
sans être en danger" reste impossible). Le centre du village (donc la
fontaine) reste positionné à un angle pratique choisi à la main,
toujours pas raccordé au réseau routes/village de v0.79 (la
refonte routes→village ne portait que sur `HOUSES`, pas
`VILLAGE_EXTRAS` — voir cette section plus haut).

## Les ennemis boivent aussi à la fontaine + zone d'église qui menace ce détour + prêtre dans le donjon → fait en v0.83

Signalé en session (2026-09-09) : "les ennemis aussi peuvent boire à
la fontaine pour se soigner, d'où l'intérêt d'activer fort la zone de
l'église" — puis, dans la foulée : "le bouton pour activer en premier
le palier de l'église, c'est dans le donjon en allant voir le prêtre
et prier". Trois décisions prises via `AskUserQuestion` avant de coder
(cf. skill), le joueur ayant explicitement demandé de trancher plutôt
que deviner : ennemis **actifs mais rares** (10-30%, pas juste
opportunistes en passant), zone d'église **doit** pouvoir couvrir la
fontaine (rapprocher/agrandir), prêtre **seulement pour le 1er palier**
(paliers suivants toujours achetés dehors), prêtre **en personnage
dessiné** (pas juste un bouton).

### 1. Zone d'église, 5e palier, jusqu'à la fontaine

Constat de départ vérifié numériquement (script à part) : même au
palier 4 (max d'alors, rx=175/rz=110), la zone n'atteignait pas la
fontaine — ~190 unités d'écart contre ~175 de portée max. Nouveau
palier 5 (`cost: 320, rx: 312, rz: 196`) dimensionné pour que la
fontaine tombe confortablement dedans (valeur d'ellipse ~0.85, la
valeur 1 étant la limite) tout en restant loin du donjon/des douves
(point le plus proche de la zone à r≈218, marge >40 vs douves
max=178). La grange tombe aussi dans ce palier — accepté comme
conséquence assumée plutôt qu'évité : "aller à fond" sacralise tout le
cœur du village, pas seulement l'église elle-même.

**Collision trouvée et corrigée en vérifiant** (pas juste supposée) :
`HOUSES[7]` (v0.79, r=286/angle=-1.76) tombait dans cette zone
élargie — repositionnée (script de génération sous contraintes, même
méthode que v0.79, avec la nouvelle ellipse tier5 ajoutée aux
contraintes) à r=288.6/angle=-2.499, toutes marges revérifiées
(routes, ruisseau, autres maisons, point de débarquement bateau).

### 2. Fontaine-soin côté ennemis, active mais rare

Symétrique du mécanisme joueur (v0.82), réutilise le même modèle
d'état que `'building'` (un détour temporaire qui revient à
`'approach'` une fois terminé) plutôt qu'un système de flags parallèle
— cohérent avec l'architecture existante de la machine à états
ennemie.

- **Jet UNIQUE par ennemi** (`e.fountainRolled`, pas un jet par frame
  comme la cachette) dès qu'il passe sous `ENEMY_FOUNTAIN_HP_FRAC=0.4`
  de PV — `ENEMY_FOUNTAIN_CHANCE=0.2` (20%, milieu de la fourchette
  10-30% demandée) décide s'il est du genre à tenter le détour. Mêmes
  exclusions que la cachette (bâtisseur/porteur d'échelle : mission
  propre, jamais de détour).
- **`seekingFountain`** : marche en ligne droite (pas le pas radial
  habituel de `'approach'`) vers la fontaine, reste soumis à
  `updateEgliseZoneDamage` tout du long — c'est tout l'intérêt du
  palier 5, un ennemi qui tente sa chance peut y laisser des PV, voire
  y mourir en chemin, pas seulement à l'arrivée.
- **`drinkingFountain`** : soin continu (`ENEMY_FOUNTAIN_HEAL_TIME=5s`
  pour un plein depuis 0, un peu plus lent que le joueur car plus
  exposé/loin du mur), toujours vulnérable à la zone pendant qu'il
  boit. Repart en `'approach'` une fois soigné, depuis là où il est —
  le détour coûte du chemin en plus, pas juste du temps.
- Petite jauge de progression au-dessus de l'ennemi pendant qu'il boit
  (`enemyWaitInfo`, même mécanisme que building/attackBase/onTop).

**Piège de méthodologie de test rencontré en chemin** (comme souvent
cette session) : mon premier test forçait un ennemi à hp=1 près du
donjon (r=200) pour observer le cycle rapidement — abattu en <1s par
le tir défensif normal du seigneur, avant même d'entrer en jeu la
mécanique testée. Cause : `nearestVisibleTarget()` (utilisée pour le
VRAI tir, pas `nearestEnemyTo(pos, ATTACK_RANGE=260)`) n'a AUCUNE
limite de portée — `ATTACK_RANGE` ne sert qu'à décider si le seigneur
reste en comportement `'combat'`, pas à plafonner sa portée de tir une
fois dedans. Corrigé en donnant assez de PV à l'ennemi de test pour
survivre au tir incident, ce qui a permis d'observer le cycle complet
(`seekingFountain` → `drinkingFountain` → `approach`, PV qui montent
puis re-descendent une fois reparti) sur une trace image par image de
1000+ échantillons. Vérifié séparément avec la zone d'église au
maximum : l'ennemi meurt bien EN CHEMIN vers la fontaine (PV stables
plusieurs frames puis disparition sans transition — la zone applique
999×0.5 dégâts en un seul coup dans le même frame qui applique le
`killEnemy`, jamais échantillonné entre les deux, mais cohérent avec
la formule `moitié de la vie MAX` déjà en place depuis v0.70).

### 3. Le prêtre, dans le donjon

Première interaction cliquable jamais ajoutée à la scène cosy
(jusque-là purement décorative, seul le bouton "Retour au mur"
existait) — nouvelle infrastructure, pas juste un ajout ponctuel :
- `cosyPerson(PRIEST_X, PRIEST_Z, ...)` (mêmes x/z que
  seigneur/princesse/paysans, teinte pierre grise cohérente avec
  `drawEglise`), posté près de l'arche éclairée plutôt que dans le
  coin du feu déjà occupé.
- `#priestBtn` : même famille que `#moulinBtn`/`#egliseBtn`
  (`.worldBtn`), mais repositionné via `cosyIso()` + le ratio
  `getBoundingClientRect()`/`COSY_W`/`COSY_H` du canvas cosy
  (responsive, `width: min(560px, 92vw)`) plutôt que
  `project()`/`rot` du monde extérieur — la scène cosy ne tourne
  jamais, pas besoin de suivre une caméra, juste le redimensionnement
  éventuel de la fenêtre (recalculé chaque frame dans `cosyFrame`,
  comme moulin/église le sont dans `render()`).
- **Vrai bug trouvé en testant visuellement, pas juste en lisant le
  code** : `.worldBtn` a `z-index:9`, mais `#cosyOverlay` (qui contient
  le canvas cosy) a `z-index:25` — le bouton du prêtre, positionné en
  `fixed` en dehors de cet overlay, se serait retrouvé peint SOUS le
  canvas malgré `hidden=false`, invisible. Corrigé avec une règle
  `#priestBtn { z-index: 26; }` dédiée (pas touché à `.worldBtn`
  lui-même, pour ne pas affecter moulin/église qui n'ont pas ce
  problème).
- Prier (25 or, coût du 1er palier existant, inchangé) débloque
  `state.egliseZoneLevel=1`. Le bouton dehors (`#egliseBtn`) affiche
  désormais "Va d'abord prier au donjon" (désactivé) tant que le
  niveau est à 0, et bascule normalement sur l'achat des paliers
  suivants une fois le premier fait via le prêtre — vérifié dans les
  deux sens (avant/après prière, texte ET état disabled).

Vérifié en Playwright pour l'ensemble des trois volets : cycle complet
zone/collision (script de vérification numérique indépendant), cycle
complet fontaine-ennemi (seekingFountain→drinkingFountain→approach,
mort en chemin sous la zone maximale), cycle complet prêtre (avant
prière → bouton désactivé avec bonne position/texte → clic → PV/or mis
à jour → bouton dehors reflète le changement → re-clic sans effet →
disparition à la fermeture de la scène cosy). Aucune erreur console
sur l'ensemble des tests, ni sur 8 vagues forcées en rafale en jeu
normal. Tous les hooks de debug temporaires retirés avant ce commit.

## Section Astuces (Partie 2.3, consigne du 2026-09-08) → fait en v0.84

"Explique sans mystère TOUTES les mécaniques, avec exemples chiffrés."
Nouveau bouton "Astuces" dans le menu, nouvel overlay `#faqOverlay` en
plein écran.

**Choix d'architecture** : deux blocs de texte complets (`#faqFr`/
`#faqEn`) basculés par simple `hidden` selon `lang`, plutôt que des
dizaines de clés `I18N` pour chaque phrase — le reste de l'UI (boutons
courts) garde son système de clés existant, la FAQ (paragraphes
entiers) est plus simple à écrire/relire d'un bloc. `updateFaqLang()`
ajouté à `refreshDynamicLangUI()` pour basculer au changement de
langue, sans casser le mécanisme existant.

**Contenu** : chiffres tirés directement des constantes du code au
moment de l'écriture (pas devinés) — vagues/difficulté, seigneur
(multiplicateurs de visée, cheval), château/tourelles, douves, jardin,
moulin, zone d'église + prêtre, fontaine (joueur et ennemis), les 5
tiers d'engins de siège avec équipage vivant, cachettes du village +
bateau, princesse/câlin. Règle notée dans ce fichier depuis un moment
(voir plus haut) formalisée : tout commit touchant une mécanique doit
mettre à jour cette section dans le même commit — à partir de
maintenant, honnêtement pas garanti rétroactivement pour les tout
premiers commits de la session, mais applicable désormais.

**CSS écrite dès le départ avec le correctif de scroll de v0.80**
(`overflow-y:auto`, `touch-action:pan-y`) plutôt que d'attendre de
retrouver le même bug — la FAQ a largement plus de contenu que le
menu qui avait révélé le problème, quasi certaine de déborder sur un
écran court.

Vérifié en Playwright : ouverture depuis le menu (qui se ferme),
bloc FR affiché en locale fr-FR, bloc EN en locale en-US, bouton
Astuces/Fermer traduits (`t('faq_btn')`), défilement jusqu'en bas
avec bouton Fermer atteignable ET sur un viewport court (360×560,
même test que le bug v0.80 — pas re-tombé dedans), fermeture
fonctionnelle. Aucune erreur console. 8 vagues forcées en rafale en
jeu normal sans erreur non plus (régression générale).

## Engins de siège : vrais soldats individuels (item "grouille de vie",
consigne du 2026-09-08 : "vrais soldats individuels" choisi contre
l'option juste-visuelle) → fait en v0.85

L'équipage d'un engin de siège (`se.crew`, un simple compteur) devient
`se.soldiers`, un tableau de vraies entrées individuelles : chacune a
sa position locale propre (`da`/`dr`, coordonnées polaires autour du
centre de l'engin) et sa phase d'animation (`seed`) pour un léger
balancement sur place — même langage que `drawVillager` (qui dansait
déjà de cette façon). `crew` disparaît complètement au profit de
`soldiers.length` partout où il était lu (régénération de PV, rendu
de la barre, capacité `siegeCrewCap`).

**Rendu** : la rangée de pips abstraite au-dessus de la barre de vie
est retirée ; à la place, chaque soldat est un petit `drawBallSprite`
(même famille que `drawEnemy`, rayon réduit) positionné autour du
centre de l'engin avec un léger bob vertical + balancement latéral
(`Math.sin(state.time * ... + soldier.seed)`) — ça grouille visiblement
sans que les soldats aient besoin de vraiment se déplacer, ce qui
aurait demandé une logique de mouvement/collision individuelle bien
plus lourde pour un gain de lisibilité minime.

**Choix de scope, tranché sans repasser par une question** (suivant la
consigne explicite de ce créneau : trancher moi-même sauf doute
réellement profond) : je n'ai PAS ajouté de ciblage séparé
équipage-vs-machine — l'engin reste une seule cible de sortie
cliquable, cohérent avec la décision "pas fait" déjà notée plus haut
dans ce fichier ("la sortie tue déjà l'équipage un par un... sans
ajouter deux cibles cliquables séparées à l'écran"). "Vrais soldats
individuels" est donc interprété comme : de vraies entrées de données
individuelles + un vrai rendu individuel (le "grouille de vie"
demandé), mais toujours *une* unité pour l'interaction du joueur — pas
une refonte du ciblage. Si en jouant ça manque, c'est facile à
ajouter après coup sur cette base.

Aucun changement de nombre (capacité par palier, régénération PV/s,
coût en or, dégâts de sortie) — uniquement la structure de données et
le rendu.

Vérifié via des hooks de debug temporaires (`__DEBUG_SPAWN_CLUSTER`,
`__DEBUG_FORCE_CLUSTER`, `__DEBUG_SIEGE_INFO`, `__DEBUG_SORTIE_HIT`,
tous retirés avant ce commit — `grep -c "__DEBUG_"` revenu à 1) :
formation d'un groupe de 5 attaquants regroupés → engin palier 3 (le
max, 5-2=3) avec bien 5 soldats dans le tableau ; renfort d'un 6e
traînard → accepté jusqu'au plafond (`tierIdx+3=6`), PV remontant en
même temps (régénération bien indexée sur `soldiers.length`) ; 6
coups de sortie successifs → un soldat retiré à chaque fois,
disparition de l'engin + or gagné exactement au 6e coup (0 soldat
restant). Capture d'écran en mode Filaire (le défaut) : les petites
silhouettes individuelles sont bien visibles, groupées autour de
l'icône de l'engin, distinctes du fond. Tentative de vérifier aussi en
style Couleur via `localStorage` — sans effet, le chargement au
démarrage n'accepte que 'phosphore'/'filaire' (Couleur volontairement
mis en pause depuis une consigne antérieure, voir plus haut dans ce
fichier) ; pas re-testé plus loin, le rendu Filaire suffit à confirmer
visuellement le comportement. Aucune erreur console. 8 vagues forcées
en rafale en jeu normal sans erreur non plus (régression générale).

## Passe "rentabilité" (consigne du 2026-09-09 : "chaque mécanique doit
être rentable") → premier volet fait en v0.86

Consigne large, prise au sens : auditer les chiffres réels du jeu
(coûts, revenus, récompenses) pour trouver des cas où une mécanique
punit ou ne récompense pas correctement ce qu'elle devrait, plutôt que
de tout rééquilibrer d'un coup sans preuve de terrain — cohérent avec
la consigne "approximatif d'abord, on itère après".

**Trouvé et corrigé — les engins de siège pénalisaient l'équipage
capturé** : un ennemi absorbé dans un groupe (`clusterSiegeEngines`)
passe `e.dead = true` directement, en dehors de `killEnemy()` — donc
0 or à l'absorption (logique, il n'est pas mort, juste enrôlé). Mais à
la destruction finale, l'ancien code payait un **forfait fixe de 5 or**
identique qu'il y ait 2 ou 6 soldats à bord. Résultat concret : laisser
un groupe se former en engin plutôt que d'abattre chaque attaquant
individuellement faisait perdre jusqu'à 6 or (6 soldats × 1 or) contre
un maigre 5 or forfaitaire — et strictement aucun retour visuel d'or
pendant tout le combat contre l'engin, à l'encontre du principe déjà
acté "rien ne se passe en silence". Rendu possible à corriger
proprement par le travail de la veille (v0.85, `se.soldiers` en vraies
entrées individuelles) : chaque soldat abattu en sortie rapporte
maintenant 1 or immédiatement (comme un ennemi normal), plus un bonus
de destruction (`SIEGE_DESTROY_BONUS = 3`) au coup de grâce — un engin
minimal (2 soldats) rapporte toujours exactement 5 au total (aucune
régression sur le cas déjà équilibré), un engin plein (6 soldats)
rapporte maintenant 9 (une vraie récompense pour un ennemi vraiment
plus dangereux, au lieu d'être pénalisé pour avoir grossi). Section
Astuces mise à jour dans le même commit (règle du fichier), FR et EN.

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit, `grep -c "__DEBUG_"` revenu à 1) : engin à 2 soldats →
2 coups de sortie, gains 1 puis 4 (1+3 bonus), total 5 = exactement
l'ancien comportement pour ce cas minimal ; engin plein à 6 soldats →
6 coups, gains 1×5 puis 4 (1+3), total 9. Aucune erreur console.

**Audité, jugé cohérent, pas touché** : jardin et moulin partagent
déjà volontairement le même ratio coût/revenu (75 or pour 1 or/s de
revenu chacun, voir les commentaires du code — décision déjà actée en
session, pas un oubli). Douves (4 paliers, 20/50/200/500) et zone
d'église (5 paliers, 25/55/100/180/320) sont toutes deux des
investissements coûteux et tardifs par nature (rejoindre leur coût
total, ~770 et ~680, prend des dizaines de vagues rien qu'avec l'or
des kills) — cohérent avec des mécaniques de fin de partie, pas un
signe de déséquilibre en soi.

**Repéré, pas encore tranché — à surveiller en jouant plutôt qu'à
corriger sur la seule base des formules** : les tourelles (5 or pièce,
1 dégât/s chacune) n'ont ni palier ni plafond de nombre, contrairement
à absolument tout le reste de l'économie (jardin/moulin/cheval montent
en coût géométriquement, douves/église par paliers fixes croissants).
Le coût total de N tourelles reste strictement linéaire — aucune
mécanique de rendements décroissants ne vient jamais rendre "encore
une tourelle" moins intéressant que "encore une tourelle" précédente.
Ce n'est pas forcément un problème (leur dégât individuel est modeste,
et empiler de l'or dans les tourelles reste un choix qui coûte
proportionnellement à ce qu'il rapporte, contrairement à un vrai piège
d'investissement) mais ça mériterait d'être vérifié en jeu réel sur
plusieurs vagues avant d'y toucher — pas de changement fait ici,
noté pour la suite.

## Idée en attente : mode à deux, sans serveur (question du 2026-09-09)

Pas commencé — gardé en mémoire, à la demande explicite de Pierre
("garde en mémoire juste"), pour plus tard plutôt que maintenant.

Piste technique retenue si on s'y met : WebRTC pour la connexion de
jeu (pair-à-pair, aucun serveur pendant la partie), avec un échange
initial manuel (code ou QR code affiché/scanné) pour l'appariement —
zéro infrastructure à héberger, marche même sur wifi local sans
internet. AirDrop/Bluetooth écartés (transfert ponctuel ou pas adapté
à deux pages web qui se parlent en direct). Alternative plus fluide
mais avec une dépendance externe : un petit service public gratuit
(type PeerJS) pour un code de partie plus simple à l'appariement.

Reste à trancher le jour où on s'y met : coopératif (un château à
deux) ou versus (un attaquant contrôlé par un joueur) — question de
game design séparée du choix réseau ci-dessus.

## Direction du vent de la neige, alignée sur le courant (consigne du
2026-09-09) → fait en v0.87

Consigne (dictée) : la neige doit dériver comme portée par un vent
fort, toujours dans la même direction ET le même sens que le cours
d'eau — "garde l'actuel" pour le reste, mais la direction "va vers
nous, en tant que joueur" (donc plaquée à l'écran, extra-diégétique)
doit devenir la direction du ruisseau dans le monde.

**Diagnostic** : la neige (`updateSnow`/`drawSnow`) est un système de
particules en espace écran pur (x/y en pixels, pas de position monde)
— voulu ainsi à l'origine (perf, et pour ne jamais ressembler à un
ennemi lointain en phosphore, voir le commentaire déjà en place).
Avant, la dérive était `f.y += vitesse` : toujours vers le bas de
l'écran, quelle que soit la rotation de caméra (`state.theta`) — un
vrai artefact extra-diégétique, exactement ce que décrit Pierre.

**Fait** : nouvelle fonction `windScreenDir()` qui prend le vecteur
tangent du ruisseau (`streamGeometry().tx/tz` — le même vecteur que
l'écoulement de l'eau lui-même, `fl.d += STREAM_FLOW_SPEED`, donc
garanti le même sens que le courant, pas juste le même axe) et lui
applique EXACTEMENT la même rotation+skew isométrique que `project()`
(rotation caméra `state.theta - PI/4`, puis `cosIso`/`sinIso`) — mais
seulement la partie vectorielle (ni hauteur, ni translation caméra,
qui n'ont pas de sens pour une direction). Résultat : un vecteur 2D à
l'écran qui tourne avec la caméra, toujours aligné sur le vrai sens du
courant dans le monde.

Le rebouclage (recyclage d'un flocon sorti de l'écran) doit aussi
généraliser : avant, c'était toujours haut→bas + gauche↔droite figé.
Nouvelle fonction `screenAxisExtent(dx,dy)` calcule l'étendue de
l'écran projetée sur un axe quelconque (les 4 coins du rectangle
écran, min/max de la projection) — généralise le H/W fixe de l'ancien
code à une direction de vent qui peut être n'importe quel angle
maintenant. Le sway (ondulation latérale) reste, mais tourné pour
rester perpendiculaire au nouvel axe du vent plutôt que rester sur
l'axe x fixe d'avant — sinon il aurait fini par se balancer dans le
sens de la dérive principale à certains angles de caméra, ce qui
aurait eu l'air cassé.

"Garde l'actuel" respecté : vitesses/tailles/densité par couche
(`SNOW_LAYERS`) inchangées, seul l'axe de la dérive (et du sway,
perpendiculaire à ce nouvel axe) a changé.

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit, `grep -c "__DEBUG_"` revenu à 1) : `windScreenDir()`
comparée à la dérive RÉELLEMENT observée sur des flocons (sway mis à
zéro le temps du test pour isoler le signal) à 4 angles de caméra
(0, 90°, 180°, 270°) — correspondance exacte (à l'arrondi flottant
près) dans les 4 cas, confirmant que la direction suit bien la
rotation de caméra. Capture d'écran après 15s à angle fixe : pas
d'accumulation ni de flocon coincé hors-écran (le rebouclage
généralisé fonctionne). Capture après rotation de caméra : neige
toujours répartie normalement à l'écran. Aucune erreur console.

## Correctif du v0.87 : la neige doit avoir une vraie existence dans le
monde (consigne du 2026-09-09) → fait en v0.88

Retour de Pierre sur le v0.87 : le v0.87 changeait seulement la
DIRECTION de la dérive future (bonne idée, mal exécutée) — les
flocons restaient des particules en espace ÉCRAN pur. Résultat
concret signalé : "quand je tourne, ça reste au même endroit de
l'écran, puis ça fait une pause, puis ça repart dans la bonne
direction" — parce qu'un flocon existant n'était jamais lui-même
tourné, seule sa prochaine dérive changeait de sens. Consigne
explicite : "le point qui est à tel endroit dans l'espace doit avoir
la même rotation que les autres" — donc une vraie existence MONDE,
comme n'importe quel bâtiment.

**Refonte** : chaque flocon a maintenant une vraie position monde
`(wx, wy, wz)` au lieu de `(x, y)` écran. `updateSnow()` ne connaît
plus du tout la caméra — il fait juste tomber `wy` et dériver
`wx/wz` le long du vecteur MONDE constant du courant
(`streamGeometry().tx/tz`, plus besoin de le re-tourner à la main
comme dans le v0.87). `drawSnow()` projette chaque flocon avec
`project(wx, wy, wz, rot)`, exactement comme tout le reste du décor —
donc tourner la caméra fait tourner la neige avec la scène, sans
aucun code dédié à la rotation : c'est juste project() qui s'en
charge, comme pour une maison. Nouvelles constantes `SNOW_FALL_BAND`
(hauteur de la bande de chute), `SNOW_GROUND_Y` (seuil de rebouclage)
et `SNOW_WIND_MUL` (dérive horizontale nettement plus marquée que la
chute seule, pour lire "vent fort" plutôt qu'une brise). Rebouclage :
au sol OU trop loin du centre (`SPAWN_R`, le rayon déjà utilisé
ailleurs pour garantir la couverture de l'écran à n'importe quel
angle) → réapparition en haut de la bande, position aléatoire dans le
disque.

**Bug trouvé et corrigé avant de tester** : `resize()` appelle
`initSnow()` au tout premier chargement, avant que les nouvelles
constantes (déclarées près de leur code, plus bas dans le fichier) ne
soient initialisées — exactement le piège TDZ déjà documenté pour
`SNOW_LAYERS` (voir le commentaire historique à sa déclaration :
"the whole game silently died right there"). `SNOW_FALL_BAND`/
`SNOW_GROUND_Y`/`SNOW_WIND_MUL` déplacées à côté de `SNOW_LAYERS`,
même remède que la fois précédente. Repéré en testant AVANT de
pousser (erreur console au premier chargement), pas après.

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit, `grep -c "__DEBUG_"` revenu à 1) : un flocon capturé une
fois, projeté à deux angles de caméra DANS LE MÊME appel synchrone
(donc sans que le temps de jeu ne s'écoule entre les deux mesures) —
la position monde reste bit-à-bit identique, seule la position écran
change, exactement le comportement attendu d'un objet du monde. Un
premier essai de test (deux appels séparés) avait donné un faux
négatif — la boucle de jeu continue de tourner en fond entre deux
`page.evaluate()`, donc `updateSnow()` avait le temps de faire
avancer la position réellement entre les deux mesures ; corrigé en
regroupant la mesure dans un seul appel synchrone. Captures d'écran à
15s (pas d'accumulation ni de trou) et après rotation (couverture
toujours normale). Aucune erreur console.

## Gros lot de consignes du 2026-09-09 (dictées en rafale) — log immédiat,
statuts honnêtes, rien commencé sauf mention contraire

### 1. Refonte complète des chemins → pas fait, le plus gros morceau

Consigne détaillée (verbatim reformulé) :
- Bords gauche/droit d'un chemin = traits CONTINUS (pas pointillés).
  Lignes brisées (polygonales) à l'intérieur du village ("construit
  par l'homme"), de plus en plus courbes en s'en éloignant ("un vrai
  chemin").
- La place centrale du village doit être vraiment au centre, entre
  l'église et le donjon.
- Plus aucun chemin à trait unique (sans largeur) : chaque chemin a
  une vraie largeur, praticable.
- Aux intersections (ex. 90°), il faut "couper" le petit bout de
  tracé qui bloquerait le passage — on doit pouvoir traverser d'un
  chemin à l'autre sans qu'un trait ne barre le passage, comme un
  doigt qui glisse en continu.
- Une fois ça fait : re-vérifier qu'aucune maison n'empiète sur un
  chemin ou sur la place (interdit) — seul le moulin est près de
  l'eau, jamais dedans.

Le plus gros morceau du lot : géométrie de chemins à largeur variable
+ courbure progressive + découpe booléenne aux intersections + replacement
de la place + réaudit des maisons. Mérite une passe dédiée plutôt que
d'être casée entre deux autres tâches — prévu comme prochain gros
chantier.

### 2. Roue du moulin → pas fait

La roue à eau est actuellement plate (2D) — doit avoir une vraie
épaisseur pour "pouvoir fonctionner" (lecture visuelle d'un vrai
mécanisme).

### 3. Prière au prêtre : gratuite, avec soin + bonus temporaire → pas fait

Consigne : prier ne doit RIEN coûter — payer sert à AUGMENTER LA
PUISSANCE de l'église (les paliers de zone), pas à prier. Ce sont
deux choses différentes. La prière (gratuite, répétable) doit :
- Soigner le seigneur (et la princesse ?) beaucoup plus vite qu'en
  temps normal.
- Donner un bonus de résistance temporaire (défense) — Pierre cite
  "100% de bonus" pendant "une vague ou deux".

Implique de découpler l'actuel `priestBtn` (v0.83 : payait 25 or ET
débloquait le palier 1 de la zone) en deux choses : un bouton de
prière gratuite et répétable (soin + buff), et l'achat du palier 1 de
la zone d'église qui redevient un vrai achat payant comme les paliers
suivants (au lieu d'être remplacé par la prière). Valeurs exactes du
buff (durée précise en secondes, curseur "vague ou deux") à ma
discrétion — Pierre a donné l'intention, pas les chiffres au tiret
près.

### 4. Bug : les popups moulin/église/prêtre se ferment au clic à côté → pas
fait, pas encore investigué

Rapporté comme un problème : cliquer en dehors de la petite fenêtre
qui s'affiche en touchant le moulin/l'église la fait disparaître. À
vérifier dans le code réel (ces boutons sont-ils vraiment un système
de fermeture au clic extérieur, ou est-ce autre chose qui y
ressemble) avant de corriger.

### 5. Nouvelle maison éloignée, "chez la sorcière" → pas fait

Une maison près du bord de l'écran (visible même en tournant, sur
téléphone et sur ordinateur). Au clic : un message, reformulé court
et efficace (Pierre donne l'intention : ambiguïté volontaire — sorcière
ou dame de compagnie que le seigneur visite "sans assumer" —, pas le
texte exact). Mécaniques prévues :
- Tous les ennemis évitent de s'approcher de cette maison à bonne
  distance (comme une zone interdite).
- De temps en temps (toutes les ~10-30 vagues), un villageois SEUL
  traverse en courant vers cette maison — jamais à deux à cette
  fréquence.
- Très rarement (~toutes les 50 vagues), DEUX villageois y vont
  ensemble (ex. un couple qui va "chercher des informations" — sa
  propre idée narrative). Ils disparaissent à l'écran en entrant,
  restent moins d'une demi-vague, puis reviennent au village.
- D'autres mécaniques à venir plus tard, pas précisées maintenant.

Tout ce lot est noté maintenant, rien perdu — j'attaque les items
bornés (2, 3, 4) en premier, le lot 1 (chemins) en chantier séparé
juste après, le lot 5 (maison + IA villageois dédiée) à la suite.

## Item 4 : popups moulin/église ne se ferment plus au clic à côté → fait
en v0.89

**Diagnostic** : `handleCanvasTap()` faisait un vrai BASCULE (toggle) —
un tap sur le bâtiment fermait la fenêtre si elle était déjà ouverte.
Le bouton flottant (`#moulinBtn`/`#egliseBtn`) est positionné pile
au-dessus du bâtiment (`.worldBtn`, `translate(-50%,-100%)`). Un tap
qui vise "à côté" du petit bouton mais rate légèrement retombe
souvent sur le CANEVAS juste en dessous, encore dans le rayon de
détection (`WORLD_TAP_RADIUS=42px × zoom`) du bâtiment — ce qui
redéclenchait le bascule et refermait la fenêtre sans que ce soit
voulu. Exactement le symptôme décrit par Pierre.

**Fait** : un tap sur le bâtiment n'ouvre plus JAMAIS ne referme la
fenêtre — `moulinBtnVisible`/`egliseBtnVisible` passent de `!x` (bascule)
à `true` (ouverture pure, idempotente). Une fois ouverte, la fenêtre
reste affichée en permanence (prix/état déjà rafraîchis chaque frame
par `refreshBuyButtons()`) — pas besoin de la refermer pour que le jeu
reste jouable, et c'est même un peu plus pratique (affordabilité
visible en permanence, comme un bouton d'achat classique de jeu de
gestion).

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit) : tap sur le moulin → ouvert ; un 2e tap AU MÊME endroit
(le cas exact du bug) → toujours ouvert, pas refermé ; un tap loin de
tout bâtiment → toujours ouvert. Aucune erreur console.

## Item 3 : prière gratuite (soin + bonus de résistance temporaire),
achat du palier 1 de l'église redevient payant dehors → fait en v0.89

Consigne explicite : "prier ne coûte rien — payer sert à AUGMENTER LA
PUISSANCE de l'église, c'est différent." Annule le détour de v0.83
(la prière remplaçait l'achat du palier 1) : les DEUX mécaniques sont
maintenant bien séparées.

**Prière** (`priestBtn`, dans le donjon) : gratuite, répétable. Un
clic soigne instantanément le seigneur ET la princesse (si vivante) au
maximum, et pose `state.prayerBuffTimer = 30s` — pendant ce temps,
`hurtPlayer()` applique `PRAYER_DEF_MUL = 0.5` à tous les dégâts subis
par le seigneur ("100% de bonus de défense" pris au sens propre :
moitié des dégâts encaissés). `state.prayerCooldown = 45s` empêche de
répéter la prière avant ce délai.

**Choix non explicitement demandé, tranché moi-même** : le cooldown de
45s (strictement plus long que les 30s du buff). Sans lui, rien
n'empêchait d'entrer/ressortir du donjon en boucle pour garder le
bonus actif en continu, gratuitement — le jeu ne se met pas en pause
pendant que la scène du donjon est ouverte (vérifié dans `loop()` :
`update(dt)` tourne sans interruption), donc c'était un vrai risque de
rendre le seigneur quasi invulnérable pour zéro coût. Durées (30s/45s)
choisies au jugé pour correspondre à "une vague ou deux" en early-game
— faciles à retoucher si le retour en jeu dit que c'est trop fort/trop
faible.

**Bonus de défense appliqué au seigneur seulement, pas à la
princesse** : elle ne prend jamais de dégâts progressifs (juste un
déclencheur de mort instantanée à moins de 18 unités, voir
`PRINCESS_DANGER_R`) — "bonus de résistance" n'a donc pas de sens
mécanique pour elle. Le soin instantané, lui, s'applique bien aux
deux (même geste que le câlin, qui soignait déjà les deux ensemble).

**Nettoyage fait dans le même commit** (même mécanique touchée) : la
duplication de code qui infligeait des dégâts au seigneur hors de
`hurtPlayer()` (le coup direct d'un ennemi monté sur la plate-forme)
a été routée à travers `hurtPlayer()` — sinon le bonus de défense
aurait été ignoré pour cette seule source de dégâts, un bug silencieux
facile à rater. Clés i18n mortes retirées (`eglise_pray_first`,
`priest_done`), `eglise_btn_start` ("Bénir le terrain", clé existante
mais plus utilisée depuis v0.83) réactivée pour le palier 1. Section
Astuces mise à jour (FR/EN) : nouvelle sous-section "Le prêtre",
zone d'église simplifiée (les 5 paliers achetés pareil, dehors).

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit, `grep -c "__DEBUG_"` revenu à 1) : prière avec PV bas →
soin complet, or inchangé, buff+cooldown posés ; re-clic (forcé,
Playwright refuse de cliquer un vrai bouton `disabled`, ce qui
confirme déjà que l'UI bloque bien le spam) pendant le cooldown →
aucun soin, comme attendu ; `hurtPlayer(2)` pendant le buff → -1 PV
seulement (0.5×2), confirmant le multiplicateur ; achat direct du
palier 1 de l'église (tap sur l'église, sans passer par le prêtre) →
accepté immédiatement, -25 or, libellé "Bénir le terrain" puis
"Agrandir la zone sacrée" ensuite. Aucune erreur console.

## Item 2 : épaisseur de la roue du moulin → fait en v0.90

La roue était un simple cercle 2D (jante + rayons) dans le plan
courant/vertical, sans aucune extension le long de son essieu — plate,
pas de "vraie roue qui tourne". Fait : deux jantes (proche/loin,
`MOULIN_WHEEL_THICKNESS = 6`, décalées le long de `g.rx/g.rz`, l'axe
perpendiculaire au plan de la roue — c'est aussi l'axe de rotation
réel d'une roue à aubes), reliées par quelques montants (un point sur
trois, assez pour lire l'épaisseur sans charger le dessin) — même
idiome que le reste du jeu (deux anneaux + montants pour donner du
volume à une forme, comme les bandes du donjon). Jante proche + rayons
gardés par-dessus, inchangés visuellement dans leur détail.

Vérifié visuellement (capture zoomée ×3 deviceScaleFactor, la roue est
petite à l'écran par défaut) : la double jante + montants se lit
clairement comme une épaisseur, plus un disque plat. Aucune erreur
console.

## Item 1 : refonte des chemins, PREMIÈRE PASSE (largeur réelle partout,
jonction propre, tracé brisé/courbe) → fait en v0.91 — le recentrage
de la place + le réaudit des maisons restent à faire, voir plus bas

Le plus gros morceau du lot du 2026-09-09. Scindé en deux passes
plutôt que tout d'un coup, vu la taille réelle et l'interdépendance
des sous-parties — cohérent avec "approximatif d'abord, on itère
après", et plus sûr qu'un big-bang sur quelque chose d'aussi visible.

**Audit du système existant** (nécessaire avant de toucher quoi que ce
soit) : le réseau de chemins a en réalité 4 morceaux — les deux routes
principales (`ROAD_ANGLES`, tracé sinusoïdal continu via
`roadAngleAt`), deux "bretelles" route→place, et un 3e chemin
place→porte. Trouvé en lisant le code :
- Les bretelles (`drawSingleLinePath`) étaient de VRAIES lignes SANS
  LARGEUR — un commentaire de session antérieure expliquait pourquoi :
  "un ruban qui rejoint une route existante fait croiser ses deux
  bords avec les deux bords de la route, ça dessine une croix". Le
  problème de jonction n'avait donc jamais été résolu, juste évité.
- Le tronçon "chemin" (donjon→village, r<`VILLAGE_R`=210) des deux
  routes principales était dessiné en pointillés
  (`ctx.setLineDash`) — exactement ce que Pierre décrit ("y a pas de
  traits pointillés").
- Le caractère du tracé (une seule sinusoïde continue, amplitude
  croissant en continu depuis le mur) ne distinguait pas "dans le
  village" de "hors du village" — pas de vrais segments droits nulle
  part.

**Fait** :
1. **Jonction bretelle/route sans croix** : nouvelle fonction
   `roadNearEdgePoint(idx, r, versX, versZ)` — calcule la tangente
   locale de la route (différence finie) et arrête la bretelle pile au
   BORD de la route tourné vers la place, jamais sa ligne centrale.
   Un vrai raccord en T. Les deux seules intersections du réseau sont
   ces deux jonctions (les routes ne se croisent jamais entre elles,
   le 3e chemin n'en touche aucune) — pas besoin d'un moteur de
   découpe géométrique généraliste pour cette version.
2. **Largeur réelle partout** : les bretelles réutilisent maintenant
   `drawBowedSplitRoadPath`/`drawSimpleRoadPath` (déjà écrits pour le
   3e chemin, juste jamais réutilisés) au lieu de
   `drawSingleLinePath`/`drawSplitLinePath`/`drawBowedSplitPath`,
   retirées (mortes après ce changement).
3. **Plus de pointillés** : `ctx.setLineDash` retiré de `drawRoadRun`
   — le tronçon "chemin" reste distingué de la "route" par sa largeur
   seule (0.7 vs 1.2 × scale), pas par un motif tireté.
4. **Tracé brisé dans le village, courbe au loin** : `roadAngleAt`
   refondu en deux régimes plutôt qu'une sinusoïde unique. En-deçà de
   `ROAD_VILLAGE_END_R=620` (couvre les deux hameaux + le pôle grange/
   église/place), l'angle avance par PALIERS nets (`ROAD_KINKS`,
   4 coudes fixes) — de vrais segments droits entre deux coudes. Le
   premier coude est à `BASE_R+60` (pas collé au mur) pour garder
   intacte la propriété "the wind straightens out on final approach"
   (déjà en place : la route doit toujours rejoindre la porte en un
   point propre). Au-delà de `ROAD_VILLAGE_END_R`, la sinusoïde
   d'avant reprend, mais son amplitude ne recommence à croître qu'à
   partir de cette frontière (continuité garantie : les deux régimes
   coïncident exactement à `r = ROAD_VILLAGE_END_R`, le terme en sinus
   valant 0 pile à cette limite).

**Pourquoi pas la place/le réaudit des maisons dans cette même passe** :
calculé la vraie position "au milieu entre l'église et le donjon" —
l'église est à r≈449 du donjon (origine du monde), le milieu serait
donc vers r≈225 — alors que la place actuelle (`PLAZA_X/Z`) est à
r≈568, PLUS LOIN du donjon que l'église elle-même : clairement pas
centrée, Pierre a raison. Mais la déplacer correctement demande la
même rigueur qu'avant (script de vérification numérique contre
maisons/grange/moulin/ruisseau/routes, comme pour HOUSES[7] en v0.79),
et ça entraîne mécaniquement le réaudit des maisons qu'il demande
explicitement ensuite — un vrai second chantier, pas une case à cocher
vite fait en fin de passe déjà chargée. Noté honnêtement comme "pas
fait" plutôt que bâclé.

Vérifié en Playwright : 8 vagues forcées en rafale (les ennemis
marchent sur les routes via `roadAngleAt`, y compris à travers les
nouveaux coudes — aucune erreur, le viseur d'angle cible juste
`roadAngleAt(idx, e.r)` chaque frame donc un coude se traduit par un
virage un peu plus franc, pas un bug). Captures d'écran à plusieurs
angles de caméra : coudes bien visibles (vrais segments droits) sur
les deux routes, jonction bretelle/place sans croix visible à l'œil,
plus aucun pointillé sur le réseau de chemins (les points encore
visibles près du pont sont le ruisseau — un système de particules
d'écoulement totalement différent et volontairement pointillé, pas
une route). Aucune erreur console.

## Reste du lot 1 (place recentrée + réaudit des maisons) → pas fait,
prochaine passe

À faire : repositionner `PLAZA_X/PLAZA_Z` entre l'église et le donjon
(pas juste le milieu géométrique brut — vérifier contre toutes les
contraintes existantes comme pour HOUSES[7]), puis réaudit complet de
toutes les maisons/la grange/le moulin contre le nouveau tracé des
chemins ET la nouvelle position de la place (script de vérification
numérique, même méthode que le reste de la session).

## Trois petits correctifs signalés juste après v0.91 → faits en v0.92

**Son de la prière retiré** : "un bruit horrible quand je prie" —
`playHammer()` (le bruit de marteau réutilisé par réflexe pour tout
achat confirmé) n'avait aucun sens pour un geste de prière. Retiré
sans le remplacer par autre chose — silencieux plutôt qu'un mauvais
son inventé à la hâte ; un vrai son de prière pourrait être ajouté
plus tard si Pierre le demande.

**Contresens corrigé sur les fenêtres moulin/église** : le v0.89
avait supprimé TOUTE fermeture au tap, alors que Pierre voulait bien
le clic-dehors-ferme ("je VEUX qu'en cliquant hors de la fenêtre elle
se ferme, tu as fait un contresens") — le vrai bug d'origine (avant
v0.89) n'était pas "ça se ferme au clic dehors", c'était "un tap qui
rate le petit bouton retombe sur le canevas juste en dessous, encore
dans le rayon de détection du bâtiment, et referme par accident".
Fix correct cette fois : un tap sur le bâtiment n'ouvre plus jamais
qu'un bascule (donc plus jamais ce faux-positif), et un tap ailleurs
sur le canevas referme les deux fenêtres — le clic-dehors-ferme que
Pierre voulait, sans réintroduire le vrai bug d'origine.

**Débordement des curseurs de volume** : `.volumeRow` a `width:100%;
max-width:240px`, mais `input[type="range"]` a une largeur minimale
implicite que `flex-shrink` ne réduit jamais en dessous par défaut
("min-width: auto" implicite sur un enfant flex) — ça poussait la
ligne à déborder de son propre max-width, visible sur la capture
envoyée par Pierre (le curseur Bruitages dépassait nettement les
autres boutons du menu). Fix standard : `min-width: 0` sur l'input.

Vérifié en Playwright avec des hooks de debug temporaires (retirés
avant commit, `grep -c "__DEBUG_"` revenu à 1) : tap sur le moulin →
ouvert ; tap ailleurs → fermé ; deux taps de suite sur le moulin
lui-même → reste ouvert (pas de bascule, pas de faux-positif) ;
`.volumeRow` mesurée exactement à 240px de large (avant : plus large
que son propre max-width), curseur bruitages entièrement contenu
dedans. `playHammer()` confirmé absent du handler de clic du prêtre
(lecture directe du code). Aucune erreur console.

## Reste du lot 1 : place recentrée entre l'église et le donjon +
réaudit complet des maisons → fait en v0.93

Deuxième et dernière passe sur les chemins. Confirmé par Pierre :
"place/maisons en premier, ça débloque le reste" avant d'attaquer la
maison de la sorcière.

**Place recentrée** : `PLAZA_ANGLE` alignée EXACTEMENT sur la
direction donjon→église (`atan2(VILLAGE_CENTER_Z+30, VILLAGE_CENTER_X
+120)` — les mêmes coordonnées que l'entrée `eglise` de
`VILLAGE_EXTRAS`, dupliquées ici volontairement : `EGLISE_EXTRA`
n'existe pas encore à ce point du fichier, et `PLAZA_X/Z` sert
justement à construire l'entrée `fontaine` de `VILLAGE_EXTRAS` juste
après — une dépendance circulaire à éviter). Script de vérification
numérique à part (même méthode que HOUSES[7] en v0.79) : balayage de
`PLAZA_R` le long de ce rayon, en modélisant l'église comme DEUX
rectangles orientés (nef 32×60 + clocher 18×18, décalé de 68 unités
selon le même yaw — pas juste un point ni un cercle, pour ne pas
sous-estimer son emprise réelle), la grange pareil, contre les 8
maisons, le moulin, le ruisseau, les deux routes (avec leurs coudes
v0.91) et le mur du donjon. Meilleur point trouvé : `PLAZA_R=246`
(marge ~56 unités, maison[5] et l'église quasi à égalité — un vrai
maximum local, pas juste "la première position qui passe"). Avant :
`PLAZA_R≈568`, plus loin du donjon que l'église elle-même (r≈449) —
Pierre avait raison, ce n'était pas du tout "entre les deux".

Vérifié que le nouveau point tombe bien à l'intérieur du 5e palier de
la zone sacrée de l'église (valeur d'ellipse 0.84) — PAS un nouveau
problème : ce palier est explicitement documenté depuis v0.83 pour
"atteindre la fontaine", et la fontaine est au centre de cette place.
Même intention qu'avant, juste appliquée à la position recentrée.

**Réaudit des maisons** : le nouveau tracé à coudes (v0.91) traversait
carrément `house0` (marge -1.3) et `house6` (marge -17.6), et serrait
trop `house3`/`house7` (7.2/15.1). Script de vérification numérique à
part : rejet-échantillonnage en spirale autour de la position
d'origine de CHAQUE maison (rayon ±160, angle ±0.3 rad — assez pour
rester dans le même coin du village, pas assez pour changer
complètement de cluster), contre TOUTES les contraintes à la fois :
les 7 autres maisons entre elles, la grange, l'église (nef+clocher),
le moulin, le ruisseau, les deux routes avec leurs coudes, la
NOUVELLE place, le mur du donjon — exigé ≥35 unités de marge partout
(pas juste ≥0 : de la marge visuelle confortable, pas seulement
"techniquement pas superposé"). Résultat : 7 des 8 maisons ont dû
bouger (seule `house2` était déjà assez loin de tout, marge 37.7 dès
le départ) ; toutes retombent maintenant entre 35 et 37 unités de
marge, avec des décalages angulaires modestes (elles restent
reconnaissables dans leur coin d'origine, pas téléportées ailleurs).

Vérifié en Playwright avec un hook de debug temporaire (retiré avant
commit, `grep -c "__DEBUG_"` revenu à 1) : 10 vagues forcées en rafale
sans erreur. Captures d'écran à 8 angles de caméra différents :
l'église et la place se voient maintenant clairement l'une à côté de
l'autre, toutes deux proches du donjon (au lieu d'être séparées dans
des coins opposés du village comme avant) ; aucune maison ne chevauche
visuellement une route ou la place, à aucun angle testé. Aucune erreur
console.

Le lot 1 (refonte des chemins, consigne du 2026-09-09) est maintenant
complet : largeur réelle partout, jonctions propres, tracé brisé en
ville/courbe au loin, place recentrée, maisons réauditées.

## Zoom à la molette/trackpad ("c'est où le zoom ?") → fait en v0.94

Signalé en session : le zoom (`camZoom`/`camPanX`/`camPanY`) n'existait
QUE via le pincement à deux doigts (tactile) — rien sur ordinateur
(souris, trackpad). Nouveau `canvas.addEventListener('wheel', ...)` :
même ancrage que le pincement (le point sous le curseur reste fixe à
l'écran pendant le zoom, juste piloté par `deltaY` au lieu de la
distance entre deux doigts) — marche à la molette ET au pincement
trackpad (Firefox/Chrome envoient les deux comme des événements
`wheel`). `preventDefault()` sur l'event pour que le geste ne tente
pas de faire défiler/zoomer la PAGE à la place du jeu.

Vérifié en Playwright : `mouse.wheel()` centré sur le donjon → zoom
avant net (capture à l'appui), puis dézoome jusqu'au niveau de base
(clampé correctement à `CAM_ZOOM_MIN=1`). Aucune erreur console.

## Croisements de chemins : le morceau pris dans l'intersection disparaît
au lieu de se superposer → fait en v0.95

Pierre a envoyé une capture du bug ET une version retouchée à la main
montrant le résultat voulu (le croisement "vidé") — repris tel quel,
pas de doute à trancher ici.

**Diagnostic** : le fix de v0.91 (`roadNearEdgePoint`) empêche déjà la
bretelle de traverser la route AU POINT où elle s'y raccorde (elle
s'arrête au bord, pas au centre) — mais son arc contourné
(`bowedPathPoints`, qui interpole angle+rayon pour éviter de couper à
travers le donjon) pouvait recouper cette MÊME route un peu plus loin
sur sa courbe : un vrai second croisement, différent du premier,
confirmé en reproduisant la scène de la capture (capture à l'appui,
zoomée sur le point exact).

**Fait** : plutôt que d'ajuster la courbe à l'aveugle (fragile — un
autre réglage pourrait recroiser autre chose ailleurs), un vrai test
d'intersection géométrique. Nouvelles fonctions `segsIntersect()`
(intersection de deux segments 2D, formule standard, avec une marge
0.03–0.97 pour ignorer les faux positifs bout-à-bout) et
`crossesAnyRoad()` (teste un petit bout de tracé contre TOUS les
segments réels des deux routes, via `roadSegs()` déjà existant).
Branché dans `drawSplitRoadPath()` (utilisé par la bretelle ET le
3e chemin place→porte) : tout petit morceau qui croise une route n'est
simplement pas dessiné — le trou qui en résulte EST le croisement
propre demandé, exactement ce que montrait la retouche de Pierre.
Généraliste : marche pour n'importe quel croisement rencontré, pas
seulement celui de la capture.

Vérifié en Playwright avec un hook de debug temporaire (retiré avant
commit, `grep -c "__DEBUG_"` revenu à 1) : capture zoomée sur le point
exact du bug signalé → le croisement montre maintenant un vrai trou
(deux bouts de ligne distincts, plus de superposition), balayage à
8 angles de caméra sans nouveau croisement visible ailleurs. 10 vagues
forcées en rafale sans erreur. Aucune erreur console.

Le deuxième point du message ("parfois séparées par un gap vide, ce
n'est pas bon") n'a pas été reproduit séparément — probablement la
même chose décrite deux fois plutôt qu'un bug distinct (le tracé
kinké lui-même reste géométriquement continu par construction : deux
segments consécutifs partagent exactement le même point, vérifié en
lisant `roadSegs()`). Si un vrai gap réapparaît ailleurs (un coude
franc, pas un croisement entre deux chemins), le signaler avec un
exemple précis pour que je le corrige.

## Maison "chez la sorcière" + IA villageois dédiée → fait en v0.96

Demandé en un gros batch de consignes (tâche #15 du batch) : une
nouvelle maison isolée, visible depuis n'importe quel angle de caméra
sur mobile et desktop, un message ambigu au clic (sorcière OU
compagne secrète que le seigneur visite "sans l'admettre"), les
ennemis qui l'évitent toujours à bonne distance, et de temps en temps
un villageois (rarement deux) qui y va en cachette et en revient.
Brouillon de Pierre pour le texte : "Ici habite une dame que vous
connaissez mieux que ce que vous pouvez assumer" — reformulé plus
court : *"Ici : une dame que le seigneur connaît mieux qu'il ne
l'avoue."*

**Position** : même méthode que pour la place/les maisons (v0.93) —
script Node autonome, balayage angulaire à r=480 (proche de
`SPAWN_R_BASE`, comme la ferme, pour rester "quasiment au bord de
l'écran" à tout angle de caméra), clearance minimale contre TOUTES
les contraintes à la fois (les 8 maisons, la grange, l'église,
la ferme, le ruisseau, les deux routes avec leurs coudes). Résultat :
`WITCH_ANGLE = -0.4`, `WITCH_R = 478`, largement le point le plus
isolé testé (~300 unités de marge, loin devant les autres candidats).

**Rendu** : `drawWitchHouse()` — volontairement une maison ordinaire
(même géométrie `collectBoxRoof` que les autres), aucun indice visuel
qui la distingue avant d'avoir cliqué dessus. Le message (`#witchMsg`,
nouvelle classe CSS `.worldMsg` — bulle multi-lignes, non cliquable)
suit le même ancrage écran que les boutons moulin/église.

**Ouverture/fermeture** : branché dans `handleCanvasTap()` sur le même
principe que la correction du v0.92 pour moulin/église — un tap sur la
maison ouvre seulement (jamais de toggle, donc pas de fermeture
accidentelle en la re-tapant), un tap ailleurs sur le canvas qui n'est
ni le moulin ni l'église ni la maison ferme ce qui est ouvert.

**Évitement ennemi** : `avoidWitchHouse()`, calqué sur `avoidBushes()`
déjà existant (repousse circulaire simple), mais toujours actif — pas
de condition d'achat comme pour les buissons. `WITCH_AVOID_R = 70`.

**Visite villageois** : deux compteurs de vague, tirés aléatoirement
et rechargés après chaque déclenchement — `nextWitchSoloWave` (10 à 30
vagues, un·e seul·e villageois·e) et `nextWitchDuoWave` (~45-55
vagues, deux ensemble — l'idée de Pierre : "un couple qui va chercher
des informations chez elle"). `witchCheckWave()`, appelée à chaque
nouvelle vague (normale ET vague anticipée), pioche dans les
villageois en mode `sheltering` et les passe en `toWitch`. Trois
nouveaux modes dans `updateVillagers()` : `toWitch` → `atWitch`
(invisible, caché "à l'intérieur" pendant `WITCH_VISIT_HIDE_TIME =
18s`, soit un peu moins d'une demi-vague comme demandé) → `fromWitch`
(retour à sa maison d'origine, puis `sheltering` normal).

**FAQ** : décision de jugement — la règle habituelle (tout commit qui
touche une mécanique de gameplay documente les vrais chiffres dans
Astuces) heurtait l'intention narrative, volontairement floue, de
cette fonctionnalité. Compromis : une phrase ajoutée à la section
"Le village", sans chiffres (ni rayon d'évitement, ni fréquence des
visites, ni durée) — juste de quoi confirmer que le comportement vu en
jeu est voulu, pas un bug, sans percer le mystère : *"Une maison
isolée, près du bord de la carte, reste toujours à bonne distance des
ennemis — et de temps en temps, un ou deux villageois y font un
aller-retour discret. Ce qui s'y passe reste leur affaire."*

**Vérifié en Playwright**, deux passes (la première avait deux pièges
méthodologiques classiques de cette session, tous deux corrigés) :
- Tap sur la maison → message visible avec le bon texte bilingue ; tap
  ailleurs → se referme. Confirmé.
- Évitement : ennemi à 999 PV (pour survivre au tir le temps du test)
  spawné à distance 40 de la maison (donc sous `WITCH_AVOID_R=70`) →
  distance 87.4 après 0.8s. Premier essai faussé (le suivi se faisait
  par index dans `state.enemies`, décalé par la mort naturelle d'autres
  ennemis pendant l'attente → un saut de distance de 40 à 587,
  totalement irréaliste) ; corrigé en taguant l'ennemi de test
  (`__debugTag`) et en le retrouvant par `.find()` plutôt que par
  index.
- Déclenchement de visite : forcer les deux seuils de vague à 1 puis
  appeler `witchCheckWave()` → 3 villageois (1 solo + 2 duo, les deux
  seuils tombant en même temps dans ce test) passés en `toWitch`.
  Premier essai à 0 déclenchement : les seuils sont tirés aléatoirement
  au chargement (10-30 et 45-55), et forcer `state.wave = 15` ne les
  dépassait pas forcément ; corrigé avec un hook dédié pour forcer les
  deux seuils directement.
- Capture d'écran de la bulle de message (zoomée) : texte correct,
  bien positionnée au-dessus du bâtiment.

Tous les hooks `__DEBUG_*` ajoutés pour ces tests retirés avant commit
(`grep -c "__DEBUG_" index.html` revenu à 1). 8 vagues forcées en
rafale en régression finale, aucune erreur console (le seul 404
observé est `favicon.ico`, absent du repo depuis toujours — sans
rapport, non corrigé ici).

D'autres mécaniques pour cette maison pourraient venir plus tard (pas
précisées par Pierre) — noté pour info, rien à construire maintenant.

## Amélioration de l'expérience de jeu (à l'initiative de la session, 2026-09-10)

Pierre a demandé de réfléchir, ordonner, et enchaîner directement —
sans lister puis attendre un go. Réflexion (en regardant ce qui manque
vraiment dans le jeu actuel, pas une liste générique) :

1. **Record de vague + récap de fin de partie** → fait en v0.97
2. **Tremblement d'écran sur les gros impacts** → fait en v0.97
3. Accroche discrète au tout premier lancement (aucun onboarding
   actuellement, un joueur qui arrive à froid doit tout deviner ou
   aller chercher dans Astuces) → pas fait, prochaine étape naturelle
4. Indicateur directionnel quand le château encaisse des dégâts hors
   champ de caméra (un bélier qui tape de l'autre côté du donjon peut
   passer inaperçu) → pas fait, à creuser
5. Variété sonore (un seul type de bip synthétique pour toutes les
   actions) → pas fait, plus cosmétique, priorité plus basse

Choix d'ordre : 1 et 2 ont été retenus en premier parce que ce sont
les deux manques les plus francs de "sensation" — mourir ne donnait
aucun but de rejeu (juste "vous avez perdu", pas de repère), et les
gros coups (bélier, trébuchet) ne "se sentaient" pas malgré des
dégâts confirmés au chiffre. 3 et 4 demandent plus de jugement sur le
ton/la forme (un tutoriel intrusif serait pire que rien), laissés en
attente plutôt que bâclés dans la foulée.

### 1. Record de vague + récap de fin de partie

`bestWaveEver`, persisté (`localStorage['bo_bestWave']`), chargé une
fois au démarrage (indépendant de `state`, qui se réinitialise à
chaque Recommencer). Nouveau `state.totalGoldEarned`, incrémenté au
seul point d'appel commun à tous les gains d'or (`spawnFloatingGold`,
déjà existant depuis la Partie 2.4 — un seul endroit à toucher plutôt
que les 6 sites de gain individuels).

`showGameOver()` remplit maintenant 3 lignes sous le texte principal :
vague atteinte, or gagné, et soit "🏆 Nouveau record !" soit "Record :
vague N" — jamais les deux en même temps. `#overlayText` restait
identique à avant (le texte de défaite lui-même n'a pas changé),
seul le récap est nouveau.

### 2. Tremblement d'écran

Volontairement PAS branché sur le grignotage routine du mur (un
ennemi ordinaire au contact, -6 PV château toutes les 1.2s) — avec
plusieurs assaillants simultanés ça aurait donné un tremblement
quasi permanent, du bruit plutôt qu'un signal. Branché uniquement sur
les deux vrais impacts : le chip direct arbalète/bélier (`tier.dmg`,
donc 5 pour l'arbalète — à peine perceptible — jusqu'à 22 pour le
bélier — net) et l'atterrissage du caillou de trébuchet (`pr.dmg`,
10). Magnitude = `min(14, dmg * 0.5)`, décroissance linéaire sur
`SHAKE_DURATION = 0.3s`.

Détail technique noté pour la suite : le décompte de `state.shakeT`
se fait dans `render()` (nouveau `frameDt`, écrit par `loop()` à
chaque frame) plutôt que dans `update()` — parce que `update()`
s'arrête net une fois `waveState === 'gameover'` (voir `loop()`), et
un shake déclenché sur le coup fatal serait resté bloqué à son
intensité de départ pour toujours si son décompte avait dépendu de
update(). N'affecte que `ctx.translate()` du monde dessiné au
canevas — pas `toScreen()` (utilisé par les boutons DOM moulin/
église/sorcière), qui doivent rester tapables sans trembler avec
l'écran.

**Vérifié en Playwright** (hooks de debug temporaires, retirés avant
commit — `grep -c "__DEBUG_"` revenu à 1) :
- Déclenchement à magnitude 14 → décalage non nul confirmé
  (`shakeX≈-10, shakeY≈4` à un instant donné, aléatoire donc variable
  d'un run à l'autre) juste après ; retombé exactement à `(0,0)` après
  400ms (> les 300ms de `SHAKE_DURATION`). Premier essai de
  vérification se trompait de variable (vérifiait `camPanX`/`camPanY`,
  qui ne bougent jamais — le shake est un offset LOCAL à `render()`,
  pas un changement permanent du pan) ; corrigé en exposant
  temporairement l'offset lui-même.
- Récap de fin de partie : `__DEBUG_FORCE_GAMEOVER` + best forcé à 0 →
  "🏆 Nouveau record !" affiché, `bestWaveEver` mis à jour et persisté.
- 8 vagues forcées en régression finale, aucune erreur console (seul
  le 404 `favicon.ico`, absent du repo depuis toujours, sans rapport).

Suite proposée à Pierre : passer au point 3 (accroche premier
lancement) si validé, sinon reste en attente ici avec le reste de la
liste ci-dessus.

## Suite de l'amélioration de l'expérience (points 3-5) → fait en v0.98

Pierre a répondu "Fais tout" — enchaîné sans repasser par lui sur les
3 points laissés en attente en v0.97.

### 3. Accroche discrète au tout premier lancement

`#introHint`, bandeau sous la barre du haut, jamais bloquant (le jeu
tourne en dessous, wave 1 démarre comme toujours immédiatement).
Une seule fois par appareil (`localStorage['bo_seenIntro']`, posé dès
l'affichage — pas au moment de la fermeture — pour ne jamais
réapparaître même si la page est rechargée pendant qu'il est encore
visible). Se ferme au tap sur ✕ ou tout seul après 11s.

Contenu choisi après relecture du vrai fonctionnement du jeu (pas
générique) : le seigneur ne "vise" pas en tapant, il vise en TOURNANT
LA CAMÉRA (le tir est automatique sur la cible la plus proche, avec un
bonus de dégâts dans l'axe) — un mécanisme central mais totalement
invisible pour qui n'a pas lu Astuces. Texte : "Glissez pour tourner
la caméra et viser — dégâts bonus droit dans l'axe. Sortie pour
charger dehors, Réparer si le mur faiblit. Plus de détails dans
☰ Astuces."

### 4. Indicateur directionnel de dégâts hors champ

Petite flèche au bord de l'écran, uniquement quand le point d'impact
n'est PAS déjà visible à l'écran (`isPointOnScreen()` — utile surtout
zoomé, depuis le zoom du v0.94 ; à zoom normal (1×) la carte entière
tient dans le cadre, donc rarement déclenché). Recalculée à chaque
frame depuis la position MONDE de la source (position de l'engin de
siège, ou point de tir du trébuchet) plutôt que mémorisée en position
écran — reste correcte même si la caméra tourne pendant que
l'indicateur s'efface (`DAMAGE_INDICATOR_LIFE = 1.8s`).

Détail retenu après un premier essai raté : le rectangle où poser la
flèche ne peut PAS être un simple inset symétrique — la barre du bas
(#bottomStack, boutons d'action) fait 100px de haut contre 42px pour
la barre du haut ; un inset symétrique à 46px plaçait régulièrement la
flèche pile DERRIÈRE les boutons (repéré en vérifiant la position
calculée, pas juste à l'œil — `iy=754` avec un écran de 800px de
haut, sous le début des boutons à `y=700`). Corrigé avec un vrai
rectangle asymétrique (`clampToScreenRect`, marge 112px en bas contre
50px en haut, 20px sur les côtés) et une intersection rayon/rectangle
standard plutôt qu'un simple ratio symétrique.

**Vérifié en Playwright** (hooks de debug temporaires, retirés avant
commit) : `isPointOnScreen` confirmé vrai à zoom normal sur un point
proche, faux à zoom ×4 sur un point qu'on aurait dû sortir du cadre ;
un déclenchement sur un point déjà visible n'ajoute PAS d'indicateur
(pas de doublon inutile) ; capture d'écran à l'appui montrant la
flèche correctement positionnée juste au-dessus de la barre de
boutons, jamais dessous.

### 5. Variété sonore

`playHammer()` était réutilisé pour TOUT (achats de moulin/église/
douves/cheval, coup de mêlée en sortie, huile, réparation) — un seul
son plat sans distinction entre "j'ai amélioré quelque chose" et
"j'ai frappé quelque chose". Nouveau `playPurchase()` (montant plutôt
que descendant, lecture "caisse enregistreuse") pour TOUS les achats
(moulin/église/douves/cheval/jardin/tourelle) ; `playHammer()` reste
réservé aux vraies actions physiques (mêlée, huile, réparation),
inchangé. Au passage, deux achats étaient restés complètement
silencieux depuis leur ajout (Jardin, Tourelle) — corrigé, plus rien
ne reste muet à l'achat.

Le caillou de trébuchet réutilisait aussi `playShoot()` (le même tir
sec qu'une flèche/un carreau normal) — nouveau `playSiegeShot()`,
plus grave et plus long (sawtooth, 220ms contre 70ms), cohérent avec
le tremblement d'écran ajouté en v0.97 sur ce même impact.

Volontairement PAS ajouté : un son à chaque ennemi tué. Ça arrive des
dizaines de fois par vague — un bip répété à cette fréquence
deviendrait vite fatiguant plutôt qu'utile, contrairement aux nombres
d'or flottants (purement visuels, pas de saturation possible de la
même façon). Resterait un bon candidat pour plus tard, mais demande
plus de soin (variation de hauteur aléatoire, throttling) qu'un simple
`playX()` de plus.

**Vérifié en Playwright** : tous les boutons d'achat cliqués (or forcé
à 5000 via un hook de debug temporaire) sans erreur console — y
compris jardin/tourelle, qui n'avaient jamais été exercés par un test
avant (rien ne les couvrait, le silence n'avait jamais été repéré en
testant, seulement en relisant le code).

### Régression finale (les 3 points ensemble)

8 vagues forcées en rafale, aucune erreur console (seul le 404
`favicon.ico`, absent du repo depuis toujours, sans rapport). Tous les
hooks de debug retirés (`grep -c "__DEBUG_"` = 1).

Reste en attente : rien — les 5 points de la réflexion "amélioration
de l'expérience" sont maintenant tous traités.

## Collision souple entre personnages (goulots d'étranglement type porte) → pas fait, en attente

Demandé en session (2026-09-10), pendant la refonte procédurale du
monde : actuellement rien n'empêche deux personnages (ennemis,
villageois, le seigneur) d'occuper exactement la même position — pas
de collision du tout entre eux (seulement avec les bâtiments/le
ruisseau/etc., voir avoidBushes/avoidWitchHouse/avoidStream).

Consigne de Pierre, à l'image des globules rouges dans un vaisseau :
- Collision SOUPLE, pas un mur dur — comme s'ils étaient "un peu en
  caoutchouc" : s'ils veulent se serrer (ex. converger vers un même
  point d'intérêt), une répulsion élastique les pousse à se
  contracter/se tasser entre eux plutôt que de se chevaucher ou de se
  bloquer complètement.
- Un goulot d'étranglement (la porte du donjon, explicitement citée)
  ne doit laisser passer qu'UN SEUL personnage à la fois — pas deux de
  front, même si la répulsion souple les autoriserait ailleurs à se
  frôler d'assez près.

Pas encore conçu : quel idiome technique (répulsion circulaire façon
avoidBushes mais entre TOUS les personnages entre eux, à quelle force/
rayon) ni comment détecter spécifiquement "dans une porte" pour y
durcir la contrainte. À reprendre après la refonte procédurale du
monde en cours.

## Refonte procédurale du monde (routes, village, maisons, ferme, sorcière) → fait en v0.99

Pierre, en plein milieu de la todo "amélioration de l'expérience" :
*"il va falloir faire une refonte globale du système de placement...
peut-être un système procédural... on est en train de faire du micro-
management qui perd du temps qui est pas efficace"* — signalé une fois
de plus après un croisement de routes cassé. Demande explicite de
réfléchir avant d'agir et de le "bombarder de questions" plutôt que de
trancher seul sur un chantier de cette taille.

**Questions posées et réponses obtenues** (AskUserQuestion, 4
questions) :
1. Portée : "Tout, y compris les bâtiments repères" (pas juste les
   routes — église/moulin/ferme/sorcière aussi procéduraux).
2. Régénération : "Sur demande seulement" (pas à chaque partie, pas
   automatique — un bouton dédié).
3. Graine : "Visible et exportable pour les joueurs" (pas juste un
   outil de dev interne — un ami peut la copier/coller).
4. Priorité vs la petite todo en cours (accroche/indicateur/sons) :
   "Je les finis vite d'abord" — fait en premier (voir entrée v0.98
   ci-dessus), CE chantier est venu ensuite.

### Principe retenu

Un PRNG déterministe (`mulberry32`, seedé par un hachage FNV-1a de la
graine texte — `Math.random()` n'est pas reproductible) pilote un
rejet-échantillonnage EN DIRECT dans le navigateur, à chaque
chargement (ou clic sur "Nouvelle carte"/"Charger") — pas hors ligne
comme les scripts Node des sessions précédentes. Différence
fondamentale et volontaire : le générateur (`buildWorld()`) réutilise
les VRAIES fonctions du jeu (`roadAngleAt`, `streamGeometry`/
`streamPointAt`, `moulinGeometry`) au lieu de les dupliquer côté
script à part — élimine une classe entière de bugs déjà rencontrée
cette session (le script de vérification et le jeu pouvaient diverger
silencieusement, rien ne les gardait synchronisés).

Portée assumée, décidée pour limiter le chantier à une taille
raisonnable : seule la POSITION de chaque ancre est procédurale
(routes, cœur de village, 8 maisons, ferme, sorcière). La FORME de
chaque petit groupe (écart église/grange autour du centre du village,
écart ferme_maison/ferme_grange, écart clocher/nef) reste la
disposition dessinée à la main — seul le point d'ancrage bouge.
L'orientation (yaw) des bâtiments repères reste fixe aussi (celle des
maisons était déjà aléatoire avant cette refonte, désormais tirée par
le PRNG seedé — reproductible).

### Détails techniques notables

- **Réordonnancement TDZ nécessaire** : `STREAM_CROSS_R`/
  `STREAM_HALF_WIDTH`/`STREAM_WIND_AMP`/`STREAM_WIND_FREQ`/`MOULIN_D`/
  `MOULIN_BANK` (initialement déclarées bien plus loin dans le
  fichier, près du rendu du ruisseau/moulin) ont dû être déplacées
  AVANT `buildWorld()` — le générateur en a besoin pour vérifier les
  collisions bien avant leur point d'usage habituel. Simple
  déplacement de constantes pures (aucune dépendance), sans risque.
- **Ordre de placement** (chaque étape ne vérifie que ce qui est déjà
  posé, jamais ce qui vient après) : routes (chacune avec sa PROPRE
  suite de coudes désormais — v0.91 en partageait une seule entre les
  deux, plus "en miroir") → cœur de village (dans la plus large des
  deux poches laissées libres par les deux routes) → place (balayage
  le long du rayon donjon→église) → 8 maisons (2 hameaux de 4, un par
  route) → ferme → sorcière (recherche du MEILLEUR isolement possible,
  pas juste "assez", via `findPlacement(..., minScore=Infinity, ...)`
  qui épuise volontairement tous ses essais).
- **`findPlacement()`** : rejet-échantillonnage générique borné (jamais
  de boucle infinie — essentiel pour tourner en direct dans le
  navigateur), garde le meilleur candidat trouvé même si aucun
  n'atteint le seuil demandé — dégrade proprement plutôt que de
  planter ou de boucler.
- **Bug trouvé et corrigé pendant l'audit** (voir ci-dessous) : sur
  30 graines aléatoires testées, 2 échouaient — la place se
  retrouvait avec une marge négative contre une route ou le ruisseau.
  Diagnostic : `scoreVillage()` ne vérifiait que le centre du village
  et les positions finales église/grange, jamais le COULOIR entre le
  donjon et l'église lui-même — un point le long de ce trajet pouvait
  être bloqué sans que rien ne s'en aperçoive avant que la place
  n'essaie (en vain) de s'y caser. Corrigé en échantillonnant 6 points
  le long de ce couloir pendant le choix du centre du village, pas
  seulement à ses deux extrémités.

### Vérifié

- Syntaxe : le script extrait parse sans erreur (`new Function(...)`
  en Node).
- **95 graines aléatoires + fixes testées en Playwright** (15 puis 30
  puis 50, dans 3 passes séparées), chaque fois avec un audit complet
  des marges réelles (maisons entre elles, maisons vs route/ruisseau/
  moulin/église/grange/place, église vs grange/moulin/ruisseau/route,
  place vs tout, ferme vs tout, sorcière vs tout) via les VRAIES
  fonctions de clearance du jeu exposées temporairement — 0 échec
  après le correctif du couloir donjon→église, 0 erreur JS.
- **Déterminisme** : charger la même graine via l'UI ("Charger") ou en
  forçant directement `localStorage.bo_worldSeed` avant rechargement
  produit un monde BIT-À-BIT identique (maisons, centre du village,
  sorcière comparés) — confirme qu'une graine partagée reproduit
  vraiment le même village.
- Régression complète : 8 vagues forcées, aucune erreur console (seul
  le 404 `favicon.ico`, absent du repo depuis toujours, sans rapport).
- Popups moulin/église/sorcière toujours tapables et fonctionnels
  après la refonte (testé en forçant un tap sur leurs nouvelles
  positions générées).
- Menu testé sur viewport mobile (390px) : la nouvelle carte "Graine"
  (affichage + champ + bouton Charger + bouton Nouvelle carte) reste
  dans les limites de l'écran, aucun débordement.
- Capture d'écran à l'appui : village cohérent, routes continues avec
  coudes nets, aucun chevauchement visible.

Tous les hooks de debug retirés avant commit (`grep -c "__DEBUG_"` = 1).

### Décisions de jugement, notées honnêtement

- L'orientation (yaw) des bâtiments repères reste FIXE (pas seedée) —
  choix délibéré pour limiter la portée du chantier, pas un oubli.
  Pourrait être seedé plus tard si demandé.
- Le donjon reste le centre fixe du monde (ancre de toute la
  génération) — jamais remis en question, c'est le point autour
  duquel la caméra orbite.
- "Nouvelle carte"/"Charger" font un rechargement complet de la page
  plutôt qu'une régénération à chaud — `buildWorld()` alimente des
  caches ailleurs dans le fichier (segments de route, graines de
  scintillement du ruisseau, population des villageois...) ; un
  rechargement est plus sûr qu'un réinit partiel qui oublierait
  forcément quelque chose. Coût : un flash de chargement au clic,
  jugé acceptable pour une action volontaire et rare.
- Un `confirm()` natif protège les deux actions (nouvelle graine,
  charger une graine) — remplacer tout un village n'est pas anodin,
  mieux vaut un clic de confirmation qu'un village aimé perdu par
  accident.
