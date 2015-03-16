'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },

    defaut:function(){
    	app.module('inscription').navigate('inscription', false, true)
    },

    inscription: function() {
        app.contentRegion.show(new (require('./views/inscriptionView')))
    },

    merci: function() {
        app.contentRegion.show(new (require('./views/merciView')))
    },
});