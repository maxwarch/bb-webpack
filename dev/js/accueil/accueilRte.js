'use strict';

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'accueil',
        'inscription':'goInscription',
        'jeu':'goJeu'
    }
});