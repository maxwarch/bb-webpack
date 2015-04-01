'use strict';

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        'jeu(/question/:id)': 'jeu',
        'jeu/merci':'merci'
    }
});