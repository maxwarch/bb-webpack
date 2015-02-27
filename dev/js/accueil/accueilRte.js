'use strict';

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'accueil',
        'go-inscription':'goInscription',
        'inscription':'goInscription',
        'go-jeu':'goJeu',
        'jeu':'goJeu'
    }
});