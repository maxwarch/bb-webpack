'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    accueil: function() {
        app.contentRegion.show(new (require('./views/accueilView')))
    },
    goInscription:function(id){
    	require.ensure([], function(){
    		app.module('inscription', require(JS + 'inscription/inscription'));
    		app.module('accueil').navigate('inscription');
    	}, 'inscription');
    },
    goJeu:function(id){
    	require.ensure([], function(){
    		app.module('jeu', require(JS + 'jeu/jeu'));
    		app.module('accueil').navigate('jeu');
    	}, 'jeu');
    }
});