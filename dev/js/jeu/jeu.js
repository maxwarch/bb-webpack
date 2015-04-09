'use strict';

//window.Jeu = require(MODEL + 'jeu').getInstance();

module.exports = BaseModule.extend({

    onStart:function(data){
        
    },

    initialize: function() {
    	if(!Me.id) 
    		_.defer(function(){
    				//app.module('accueil').navigate('inscription', {trigger:true})
    			});

        this.controller = new (require('./' + JEU + '/' + JEU + 'Ctrl'));
        this.router 	= new (require('./' + JEU + '/' + JEU + 'Rte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});