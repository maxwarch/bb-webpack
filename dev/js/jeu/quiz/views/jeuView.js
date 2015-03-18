'use strict';

var jeuModel 		= new (require('../quizModel')),
	questionView 	= require('./questionView'),
	_config			= require('../config.json');

module.exports = Marionette.LayoutView.extend({
	_question:null,

	initialize:function(id){
		this._question = app.currentApp.current().params[0] || null;

		if($.cookie(config.prefix + 'quiz')) app.currentApp.navigate('jeu/merci');
		if(!this._question && _config.method == 'page') app.currentApp.navigate('jeu/question/1');
	},

	className:'' + CLASSVIEW + '', 
	regions:{
		quizRegion:'#jeu'
	},

	ui:{
		'btvalid' : '#valid'
	},

	events:{
		'click @ui.btvalid':'validate'
	},

    template: _.template(require(THEME + 'jeu.html')),

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
    			app.currentApp.navigate('jeu/question/' + this._question);
    		}else{
    			this.resultat();
    		}
    	}
    },

    resultat:function(){
    	jeuModel.save();
    	app.currentApp.navigate('jeu/merci');
    },

    onRender:function(){
    	this.quizRegion.show(new questionView({collection:jeuModel, question:this._question}));
    }
});