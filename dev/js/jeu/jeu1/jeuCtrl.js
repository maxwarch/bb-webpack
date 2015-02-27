'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    jeu: function(id) {
        app.contentRegion.show(new (require('./views/jeuView')))
    },

    merci:function(id) {
        app.contentRegion.show(new (require('./views/merciView')))
    },
});