'use strict';

var questionTpl = require('../templates/question.html');

var Question = Marionette.ItemView.extend({
	tagName:'li',
	template:_.template(questionTpl),

	events:{
		'click [type="radio"]':'clickReponse'
	},

	clickReponse:function(e){
		this.model.set('reponse', $(e.currentTarget).attr('data-propid'));
	}
});

module.exports = Marionette.CollectionView.extend({
	initialize:function(){

	},

	className:'question',
	tagName:'ul',
	childView:Question,

	childEvents:{
		'reponse':function(data){
			console.log(this.collection.toJSON())
		}
	},

    template: _.template(require('../templates/jeu.html')),

    onRender:function(){
    	
    }
});