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
