'use strict';

//var BaseModel = require(SUPERCLASS + 'BaseModel');
var config 		= require('./config'),
	Prop 		= Backbone.Model.extend({}),
	Question 	= Backbone.Model.extend({
		props:new Backbone.Collection,
		titre:null,

		initialize:function(q){
			var self = this;
			_.map(q.props, function(p){
				self.props.add(new Prop(p));
			});
			this.titre = q.t;
		}
	});


module.exports = Backbone.Collection.extend({
	type:null,

	initialize:function(){
		this.type = config.type;

		var self = this;
		_.map(config.questions, function(q){ 
			self.add(new Question(q));
		})

		console.log(this.toJSON());
	}
});