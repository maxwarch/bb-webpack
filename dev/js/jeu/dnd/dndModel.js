'use strict';

var _config 	= require('./config.json'),
	Element 	= Backbone.Model.extend({

		initialize:function(q){
			
		},

		validate:function(id){
			return this.props.get(id).attributes.r == true;
		}
	});


module.exports = Backbone.Collection.extend({
	type:null,

	initialize:function(){
		this.type = _config.type;

		var self 	= this,
			i 		= 0;

		_.map(_config.elements, function(q){
			q.id = ++i;
			self.add(new Element(q));
		});
	},

	validate:function(question){

		return err;
	},

	save:function(){
		$.cookie(config.prefix + 'dnd', JSON.stringify(this.toJSON()));

		return true;
	}
});