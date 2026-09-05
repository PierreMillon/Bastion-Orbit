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

## Vague manuelle (appel anticipé, cumulatif)

Bouton pour faire venir la vague suivante par-dessus l'actuelle (pas de
limite — 15 appuis = 15 vagues qui s'ajoutent). Intérêt : aller plus vite,
plus de challenge, et de l'or bonus. Formule proposée pour l'or, à tester :
la moitié de ce que la vague précédente a rapporté (ou aurait rapporté si
tous les ennemis avaient été tués).

## IA ennemis : trajectoire plus directe

Le zigzag latéral ajouté en v0.17 est jugé trop marqué — le réduire d'environ
50% (ennemis qui avancent visiblement plus droit vers le donjon qu'aujourd'hui,
sans revenir à une ligne parfaitement radiale).

## Bouclier de siège : très résistant plutôt qu'invincible

Actuellement le palier "bouclier" (2 ennemis groupés) ignore complètement
les tirs à distance — seule la sortie peut le toucher. Retour d'expérience :
si on ne sort pas, la partie se bloque, ce n'est pas satisfaisant. Piste :
au lieu d'une immunité totale, le rendre juste très résistant aux tirs à
distance (3 à 5x plus de coups qu'un ennemi normal) plutôt qu'invincible —
la sortie reste plus rapide/efficace, mais rester sur les remparts doit
rester une option viable, juste plus lente.

## Priorité de ciblage à la sortie

Quand le seigneur sort, il doit d'abord chercher : un engin de siège, ou un
ennemi en train d'en construire un, ou un ennemi qui porte une échelle
(cf. idée d'échelle ci-dessus). À défaut, il attaque l'ennemi le plus
proche du mur (ou de lui-même). Contrôlable plus finement plus tard si
besoin, mais "le plus proche" comme comportement par défaut.

## Princesse : vivante et utile en haut, absente en bas

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

## Roi et Reine : entrée/sortie par la porte uniquement

Aujourd'hui le seigneur (et la future princesse au sol) se téléportent
plus ou moins à leur position cible. Voulu : ils descendent/montent
toujours par un chemin fixe au centre de la tour, et ne sortent/entrent
dans le monde extérieur que par la porte — jamais à travers le mur.

## Câlin roi/reine : régénération rapide à deux

Mécanique proposée : un appui simple sur le bouton princesse la fait
descendre ; un second appui simple la fait remonter (déjà le cas). Un
appui **maintenu** sur ce même bouton appelle le roi à la rejoindre, où
qu'il soit — il vient se coller à elle (façon câlin/bisous). Pendant ce
contact, leur vie à tous les deux régénère rapidement (proposé : ~3
secondes de maintien pour un retour à 100%), avec un petit cœur affiché
au-dessus d'eux pendant que ça régénère.

## Roi livré à lui-même : errer, pas revenir à la porte

Si le seigneur est sorti (Sortie) et qu'il n'y a rien à attaquer, le
comportement actuel (retour automatique pile devant la porte) n'est pas
satisfaisant. Il devrait pouvoir se déplacer librement dans le jardin,
voire "nager" dans les douves (éventuellement un moyen de régénérer un
peu, à l'étude) plutôt que revenir toujours au même endroit fixe.

## Ennemis : apparition et portée de tir

- Un ennemi doit **toujours** apparaître depuis l'extérieur de l'écran
  visible, jamais directement près du donjon comme téléporté — quelle que
  soit la taille/le ratio de l'écran du joueur.
- Pas de limite de distance pour tirer : dès qu'un ennemi est visible à
  l'écran (y compris tout en haut, donc loin), on peut lui tirer dessus.
  Ceux qui seraient géométriquement proches mais hors-champ (sur le côté,
  hors de l'écran) ne doivent pas être des cibles valables.

## Pont de fortune sur les douves

Une vague qui se fait ralentir dans l'eau envoie quelques soldats (pas
tous) poser un petit pont/planche (rectangle, largeur = leur diamètre,
longueur un peu plus que la largeur des douves) — ça leur prend un
instant à poser, et une fois posé toute vague suivante peut traverser
sans ralentir. Détruisible (proposé : 2-3 coups d'épée, ~10x la
résistance d'un soldat) — s'il n'est pas détruit, les vagues suivantes
continuent de s'en servir.

## Douves décalées du jardin

Actuellement les douves démarrent au même rayon que le jardin, donc elles
le touchent visuellement — il faut un écart net entre les deux (les
douves plus loin du mur, pas collées au jardin).

## Effets de mort

Un ennemi tué déclenche un effet de fumée ; un engin de siège détruit
déclenche un effet d'étincelles plutôt que le même effet.

## Neige / effet de profondeur en particules

Des flocons (gros, façon boules de neige stylisées) qui tombent avec un
léger effet de vent latéral, sur plusieurs plans de profondeur — gros et
rapides près de la caméra, petits et lents loin — pour un sentiment d'air/
de volume. Idée à l'essai, pas encore de mécanique.

## Fausse pub à la défaite

Sur l'écran de défaite, proposer une option façon "publicité factice avec
un faux message d'erreur" qui dit en substance "vous pouvez continuer quand
même" — référence donnée à ce qui existe déjà dans un des autres jeux du
portfolio (à retrouver et adapter, pas juste copier).

## Bugs signalés à vérifier

- **Arbres/jardin peu fluides en tournant la caméra** : mouvement saccadé
  signalé pendant la rotation — à investiguer (pourrait être lié aux
  sprites en cache ajoutés en v0.18, à vérifier en priorité).
- **Le seigneur passe derrière les tourelles en tournant vite** : bug de
  profondeur/z-order. Règle voulue : les tourelles doivent toujours être
  au bord extérieur du dernier étage, le seigneur un cran plus à
  l'intérieur. Comportement souhaité en prime : si on reste immobile une
  demi-seconde, le seigneur "saute" sur une tourelle/les remparts, et en
  tournant il saute de tourelle en tourelle façon ronde de garde ; s'il
  est au sol (sorti), tourner la caméra le fait reculer d'un cran vers
  l'intérieur.

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
