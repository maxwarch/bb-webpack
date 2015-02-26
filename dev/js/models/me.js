'use strict';

require(SUPERCLASS + 'Singleton');
var BaseModel = require(SUPERCLASS + 'BaseModel');

var Me = BaseModel.extend({
	inscrit:false,

	initialize:function(){
		
	},

	defaults:{ 
		id:false,
		nom:'KUIL',
		prenom:'Maxime',
		email:'mkuil@krealid.com'
	},

	urlRoot:config.rest + 'inscrit'
});

_.extend(Me, Backbone.Singleton);

module.exports = Me;