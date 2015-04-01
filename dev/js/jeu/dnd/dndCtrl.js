'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },

    defaut:function(){
    	this.jeu();
    	app.module('jeu').navigate('jeu', false, true)
    },

    jeu: function(id) {
        app.contentRegion.show(new (require('./views/dndView')))
    }
});