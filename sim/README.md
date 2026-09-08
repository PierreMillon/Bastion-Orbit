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

`enemyHp(wave)` et `waveSpawnCount(wave)` dans `sim/balance-sim.js`
(objet `K`) doivent rester synchronisés avec leurs équivalents dans
`../index.html` — ce ne sont pas des valeurs lues automatiquement du
jeu réel, juste copiées et documentées avec leur ligne d'origine.
