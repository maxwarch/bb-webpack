'use strict';

require(SUPERCLASS + 'Singleton');
var BaseModel = require(SUPERCLASS + 'BaseModel');

var Me = BaseModel.extend({
	initialize:function(){
		var cookie = $.cookie(config.prefix + 'me');
		if(cookie) this.set(JSON.parse(cookie));
	},

	defaults:{ 
		id 		:false,
		nom		:(!PROD) ? 'KUIL' : '',
		prenom	:(!PROD) ? 'Maxime' : '',
		email	:(!PROD) ? 'mkuil@krealid.com' : ''
	},

	urlRoot:config.rest + 'user'
});

_.extend(Me, Backbone.Singleton);

module.exports = Me;