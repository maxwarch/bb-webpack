'use strict';

var jeuModel 		= new (require('../quizModel')),
	questionView 	= require('./questionView');

module.exports = Marionette.LayoutView.extend({
	initialize:function(){

	},

	className:'' + CLASSVIEW + '', 
	regions:{
		quizRegion:'#quiz'
	},

	events:{
		
	},

	ui:{
		
	},

    template: _.template(require('../templates/jeu.html')),

    onRender:function(){
    	this.quizRegion.show(new questionView({collection:jeuModel}));
    }
});