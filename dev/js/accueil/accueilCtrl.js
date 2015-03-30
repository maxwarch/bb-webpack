'use strict';

module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    accueil: function() {
        app.contentRegion.show(new (require('./views/accueilView')));

    },
    loadInscription:function(id){
    	require.ensure([], function(){
    		app.startSubApp('inscription', require(JS + 'inscription/inscription'));
    	}, 'inscription');
    },
    loadJeu:function(id){
    	require.ensure([], function(){
    		app.startSubApp('jeu', require(JS + 'jeu/jeu'));
    	}, 'jeu');
    },
    loadPartage:function(id){
        require.ensure([], function(){
            app.startSubApp('partage', require(JS + 'partage/partage'));
        }, 'partage');
    }
});