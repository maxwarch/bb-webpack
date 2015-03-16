'use strict';

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'accueil',
        'inscription(/*uri)':'loadInscription',
        'jeu(/*uri)':'loadJeu'
    }
});