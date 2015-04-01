'use strict';

require(SUPERCLASS + 'Singleton');
var BaseModel = require(SUPERCLASS + 'BaseModel');

var Jeu = BaseModel.extend({
	initialize:function(){
		var cookie = $.cookie(config.prefix + 'jeu');
		if(cookie) this.set(JSON.parse(cookie));
	},

	defaults:{ 
		id 		: (Me.id) ? Me.id : null,
		jeu		: JEU,
		result	: null
	},

	urlRoot:config.rest + 'jeu'
});

_.extend(Jeu, Backbone.Singleton);

module.exports = Jeu;