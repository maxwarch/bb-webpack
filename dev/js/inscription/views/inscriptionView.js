'use strict';

var Me 	= new (require(MODEL + 'me'));
require(CSS + 'inscription.css');

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	model:Me,
	className:'' + CLASSVIEW + '', 
	tagName:'div id="inscription"',

	events:{
		'click @ui.valid':'clickValid'
	},

	ui:{
		valid:'#valid',
		form:'#form-inscription'
	},

    template: _.template(require('../templates/inscription.html')),

    clickValid:function(e){
    	e.preventDefault();
    	this.model.getFormData($('#form-inscription'))
    		.save(this.model.attributes, {
	    		success:function(model, response){
	    			console.log(model, response)
	    		}
	    	})
    }
});