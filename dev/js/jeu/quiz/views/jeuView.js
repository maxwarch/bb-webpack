'use strict';

var jeuModel = new (require('../quizModel'));

module.exports = Marionette.ItemView.extend({
	initialize:function(){

	},

	className:'' + CLASSVIEW + '', 
	model:jeuModel,

	events:{
		
	},

	ui:{
		
	},

    template: _.template(require('../templates/jeu.html')),

    onRender:function(){
    	
    }
});