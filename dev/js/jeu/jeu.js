'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
    	if(!Me.id) 
    		_.defer(function(){
    				//app.module('accueil').navigate('inscription', {trigger:true})
    			});

        this.controller = new (require('./' + JEU + '/jeuCtrl'));
        this.router 	= new (require('./' + JEU + '/jeuRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);

        this.controller.jeu();
    },
});