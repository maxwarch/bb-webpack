'use strict';

var _config		= require('../config.json');

var Question = Marionette.ItemView.extend({
	tagName:'li',
	template:_.template(require(THEME + 'question.html')),

	events:{
		'click [type="radio"]':'clickReponse'
	},

	clickReponse:function(e){
		this.model.set('ruser', $(e.currentTarget).attr('data-propid'));
	}
});

module.exports = Marionette.CollectionView.extend({
	_question : null,

	initialize:function(q){
		this._question = q.question || null;
	},

	className:'question',
	tagName:'ul',
	childView:Question,

    template: _.template(require(THEME + 'jeu.html')),

    addChild:function(child, ChildView, index)
    {
        if(_config.method == 'page' && child.id == this._question) 
        {
            Marionette.CollectionView.prototype.addChild.apply(this, arguments);
        }else{
        	if(_.isNull(this._question)) Marionette.CollectionView.prototype.addChild.apply(this, arguments);
        }
    },

    onRender:function(){
    	
    }
});