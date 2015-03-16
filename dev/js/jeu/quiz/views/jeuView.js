'use strict';

var jeuModel 		= new (require('../quizModel')),
	questionView 	= require('./questionView'),
	_config			= require('../config.json'),
	_module			= app.module('jeu');

module.exports = Marionette.LayoutView.extend({
	_question:null,

	initialize:function(id){
		this._question = _module.current().params[0] || null;

		if($.cookie(config.prefix + 'quiz')) _module.navigate('jeu/merci');
		if(!this._question && _config.method == 'page') _module.navigate('jeu/question/1');
	},

	className:'' + CLASSVIEW + '', 
	regions:{
		quizRegion:'#quiz'
	},

	ui:{
		'btvalid' : '#valid'
	},

	events:{
		'click @ui.btvalid':'validate'
	},

    template: _.template(require('../templates/jeu.html')),

    validate:function(e){
    	$('.error').addClass('hide');
    	var err = jeuModel.validate(this._question);

    	if(err.length > 0){
    		_.map(err, function(index){
	    		if(!index.invalid){
	    			$('.err-' + index.id).removeClass('hide');
	    		}else{
	    			$('.err-invalid-' + index.id).removeClass('hide');
	    		}
	    	})
    	}else{
    		if(this._question && this._question < jeuModel.length){
    			this._question++;
    			_module.navigate('jeu/question/' + this._question);
    		}else{
    			this.resultat();
    		}
    	}
    },

    resultat:function(){
    	jeuModel.save();
    	_module.navigate('jeu/merci');
    },

    onRender:function(){
    	this.quizRegion.show(new questionView({collection:jeuModel, question:this._question}));
    }
});