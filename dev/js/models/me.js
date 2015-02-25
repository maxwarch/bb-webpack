'use strict';

module.exports = Backbone.Model.extend({
	initialize:function(){
	},

	defaults:{
		nom:'KUIL',
		prenom:'Maxime',
		email:'mkuil@krealid.com'
	},

	urlRoot:config.rest + 'inscrit',

	parse:function(response){
		console.log('r', response)
		delete response.errorfields;
		delete response.options;
		delete response.status;

		return response;
	},

	getFormData: function(form) { 
	    var self = this;
	    var unindexed_array = form.serializeArray();
	    _.map(unindexed_array, function(n){
	        self.set(n.name, n.value);
	    });

	    return this;
	}
});