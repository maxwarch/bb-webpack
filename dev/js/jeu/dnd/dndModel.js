'use strict';

var _config 	= require('./config.json'),
	Element 	= Backbone.Model.extend({
		validate:function(){
			return this.get('drag') == this.get('droprep');
		}
	});


module.exports = Backbone.Collection.extend({
	essais:_config.essais,
	type:null,

	initialize:function(){
		var c = this.getCookie()
		this.essais = (c) ? c : this.essais;
		this.type = _config.type;

		var self 	= this,
			i 		= 0;

		_.map(_config.elements, function(q){
			q.id = ++i;
			q.droprep = null;
			self.add(new Element(q));
		});
	},

	validate:function(){
		var result = true,
			isNull = false;

		this.each(function(item){
			var it = item.get('droprep');
			if(_.isNull(it)) isNull = true;
		})

		if(isNull) return -2;	// incomplet

		this.each(function(item){
			if(!item.validate()) result = false;
		});

		this.essais -= 1;
		this.saveCookie();

		return (this.essais > 0) ? result : -1 /* essais dépassé */;
	},

	save:function(){
		this.saveCookie()

		return true;
	},

	saveCookie:function(){
		$.cookie(config.prefix + 'dnd', this.essais);
	},

	getCookie:function(){
		return ($.cookie(config.prefix + 'dnd')) ? $.cookie(config.prefix + 'dnd') : null;
	}
});