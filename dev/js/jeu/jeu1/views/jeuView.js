'use strict';

module.exports = Marionette.ItemView.extend({
	initialize:function(){

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