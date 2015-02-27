'use strict';

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

    	this.model.saveValidate(this.ui.form, {
												special_fields:['email'],
												before:function(form){
													$('#valid').attr('disabled', true)
												},
												onError:function(data, form){
													$('#valid').attr('disabled', false)
												}
											}, function(model, form){
												model.setCookie('me', model.jsonString());
												app.module('inscription').navigate('go-jeu');
											});
    }
});