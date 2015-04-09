'use strict';

 var HybridModel = require(SUPERCLASS + 'HybridModel');
require(SUPERCLASS + 'Singleton');

var Jeu = Backbone.Model.extend({
	initialize:function(){
		//var cookie = $.cookie(config.prefix + 'jeu');
		//if(cookie) this.set(JSON.parse(cookie));
	},

	defaults:{ 
		id 		: (Me.id) ? Me.id : null,
		jeu		: JEU,
		data 	: null,
		played	: false
	},

	urlRoot:config.rest + 'jeu',

	data:function(){
		return this.get('data');
	},

	setCookie:function(data){
		$.cookie(config.prefix + JEU, JSON.stringify(this.toJSON()));
	},

	getCookie:function(){
		return ($.cookie(config.prefix + JEU)) ? JSON.parse($.cookie(config.prefix + JEU)) : null;
	}, 

	toJSON:function(){
		var json = _.clone(this.attributes);
	    for(var attr in json) {
	    	if(!_.isNull(json[attr]) && !_.isUndefined(json[attr]) && json[attr].hasOwnProperty('attributes')) {
	        	json[attr] = json[attr].toJSON(); 
	        }
	    }
	    return json;
	}
});

_.extend(Jeu, Backbone.Singleton);

module.exports = Jeu;