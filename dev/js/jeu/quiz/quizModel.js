'use strict';

//var BaseModel = require(SUPERCLASS + 'BaseModel');
var config 		= require('./config.json'),
	Prop 		= Backbone.Model.extend({}),
	Question 	= Backbone.Model.extend({
		props:new Backbone.Collection,
		titre:null,

		initialize:function(q){
			var self 	= this,
				i 		= 0;

			_.map(q.props, function(p){
				p.id = ++i;
				self.props.add(new Prop(p));
			});
		}
	});


module.exports = Backbone.Collection.extend({
	type:null,

	initialize:function(){
		this.type = config.type;

		var self 	= this,
			i 		= 0;

		_.map(config.questions, function(q){
			q.id = ++i;
			self.add(new Question(q));
		})

		console.log(this.toJSON());
	}
});