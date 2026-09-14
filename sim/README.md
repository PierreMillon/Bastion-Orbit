# Simulateur de difficulté

Simule des parties de Bastion Orbit sans rendu, avec 3 politiques de
joueur (naïf / correct / bon), pour mesurer et régler la courbe de
difficulté sans testeurs humains. Voir les commentaires en tête de
`balance-sim.js` pour le modèle retenu et les simplifications
assumées, et `BACKLOG.md` (section difficulté) pour l'historique des
réglages.

```
node sim/balance-sim.js                 # rapport lisible, 60 parties/politique, 100 vagues
node sim/balance-sim.js --runs=100 --waves=50
node sim/balance-sim.js --json          # sortie machine
node sim/balance-sim.js --check         # test de régression (exit 1 si hors cibles)
```

**Règle** (demandée en session, notée ici et dans BACKLOG.md) : toute
modification d'une constante de gameplay touchant au rythme des vagues,
aux PV/dégâts des ennemis, au coût/gain des tourelles, du jardin, des
douves ou de la princesse doit relancer `node sim/balance-sim.js --check`
avant de pousser — et rester dans les cibles, ou les cibles elles-mêmes
doivent être délibérément mises à jour (jamais silencieusement laissées
à rouge).

Depuis l'arc de 20 vagues (2026-09-14), la courbe n'est plus une
formule mais une **table** : `K.WAVES` et `DIFFICULTY_TIERS` dans
`sim/balance-sim.js` doivent rester synchronisés avec `WAVES` et
`DIFFICULTY_TIERS` dans `../index.html` — ce ne sont pas des valeurs
lues automatiquement du jeu réel, juste copiées.

Le `--check` tourne sur **250 parties** par défaut, et non 80 : à 80, le
bruit atteint ±6 points pour des cibles larges de 20, au point qu'un
palier a mesuré successivement 0%, 18%, 26% puis 19% sur des réglages de
plus en plus *faciles*. On ne règle pas contre une mesure qui bouge plus
que l'effet cherché.
