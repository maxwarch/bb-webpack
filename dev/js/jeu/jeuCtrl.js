'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    jeu: function(id) {
        require.ensure([], function(){
            app.contentRegion.show(new (require('./views/jeuView')))
        });
    }
});