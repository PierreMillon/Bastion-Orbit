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

**Pas encore fait / en attente** :
- Teinte : vert posé par défaut (#46ffa0), mais le joueur n'a pas encore
  ouvert le comparateur pour trancher entre vert/ambre/cyan — à changer
  via la constante `PHOSPHOR_LINE` (une seule ligne) une fois décidé.
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
formule sans plafond. Les tourelles et les autres "améliorations du
joueur" évoquées dans le principe général n'ont pas été touchées.

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

**A. Engins de siège à distance** — *pas fait*. Aujourd'hui les ennemis
attendent d'être trop près du donjon pour lancer les engins (voir
`SIEGE_GROUP_RADIUS`/`clusterSiegeEngines`). Il faut qu'ils se
FABRIQUENT au loin (visibles à l'écran, mais loin du donjon), puis
agissent selon leur nature : le trébuchet tire à distance depuis là où
il est construit (aujourd'hui `SIEGE_TIERS` n'a pas de portée — tous les
tiers restent stationnaires au pied du mur une fois formés). Un nouveau
type, le **bélier** (n'existe pas encore) : s'approche très lentement
mais frappe très fort. **Validation Pierre en attente** avant
d'implémenter le bélier précisément (stats, comportement exact) — ne pas
deviner ses chiffres sans confirmation.

**B. Ça doit grouiller de vie** — *pas fait*. Le "rendu multi-soldats"
déjà noté ailleurs dans ce fichier comme jamais fait : des vrais groupes
visibles, des équipages autour des engins, du mouvement partout — pas
juste 2-3 silhouettes isolées.

**C. Princesse et mécaniques utiles** — *pas fait*. Chaque mécanique
doit être réellement rentable, l'avantage doit se voir. La princesse au
jardin doit rapporter un gain visiblement supérieur, affiché en chiffres
flottants au-dessus d'elle (comme la mécanique de nombres flottants
demandée plus largement en partie 2.4).

### Partie 2 — uniformisation des 3 jeux (même consigne envoyée à Knight Wars et Forge Line — ces deux-là ne sont pas dans ce dépôt/cette session)

1. **Audio** — *pas fait*. Musique ET bruitages fonctionnels (déjà le
   cas ici) + curseurs de volume séparés (musique / bruitages) dans le
   menu, 0 à 100%.
2. **Langue** — *pas fait*. Anglais + français minimum, jeu ouvert PAR
   DÉFAUT en anglais (menu Réglages compris), français choisi dans les
   options. Point en attente de confirmation Pierre : anglais fixe par
   défaut, ou auto-détection navigateur avec repli anglais — préparer
   l'infra pour les deux, défaut = anglais en attendant sa réponse.
3. **Section explicative (Astuces/FAQ/Conseils)** — *pas fait*. Explique
   sans mystère TOUTES les mécaniques, avec exemples chiffrés (forces,
   gains, seuils, timings). Règle à respecter dès maintenant, notée ici
   formellement : **tout commit qui touche une mécanique de gameplay met
   à jour la section explicative correspondante dans le même commit.**
   Idéalement, plus tard, un test automatique vérifiant que chaque
   constante de gameplay est référencée dans les textes — pas fait non
   plus.
4. **Lisibilité des mécaniques** — *pas fait*. Chaque mécanique
   concrète a un retour visuel explicite : jauge/horloge circulaire au-
   dessus du personnage pour toute attente qui déclenche un effet ;
   nombre flottant au-dessus de la tête pour tout gain d'or. Règle :
   rien ne se passe en silence.

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
