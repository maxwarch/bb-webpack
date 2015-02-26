'use strict';

module.exports = Marionette.ItemView.extend({
	initialize:function(){
		if(!this.model.id) 
    		_.defer(function(){
    				app.module('jeu').navigate('inscription', {trigger:true})
    			});
	},

	className:'' + CLASSVIEW + '',
	model:Me,

	events:{
		
	},

	ui:{
		
	},

    template: _.template(require('../templates/jeu.html')),

    onRender:function(){
    	
    }
});