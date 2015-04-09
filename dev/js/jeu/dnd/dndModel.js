'use strict';

var JeuModel 	= require(SUPERCLASS + 'JeuModel'),
	HybridModel = require(SUPERCLASS + 'HybridModel');

var _config 	= require('./config.json'),
 
	Element 	= Backbone.Model.extend({
		validate:function(){
			if(this.get('drag') == this.get('droprep')){
				this.set({rep:true});
			}else{
				this.set({rep:false});
			}

			return this.get('rep');
		} 
	}),

	Elements 	= Backbone.Collection.extend({
		initialize:function(attr, data){
			var self 	= this,
				i 		= 0;

			data = data || _config.elements;

			_.map(data, function(q){
				q.id = ++i;
				q.droprep = null;
				q.rep = false;
				self.add(new Element(q));
			});
		}		
	}),

	Data 		= HybridModel.extend({
		initialize:function(attr, options){
			if(!_.isNull(options.cookie)){
				this.set({essais:options.cookie.data.essais});
				this.set({elements:new Elements(options.cookie.data.elements)});
			}else{
				this.set({essais:_config.essais});
				this.set({elements: new Elements()}); 
			}
		},

		validate:function(){
			var result = true,
				isNull = false,
				elements = this.get('elements'),
				essais = parseInt(this.get('essais'));

			elements.each(function(item){
				var it = item.get('droprep');
				if(_.isNull(it)) isNull = true;
			})

			if(isNull) return -2;	// incomplet

			elements.each(function(item){ 
				if(!item.validate()) result = false;
			});
			this.set({essais: essais - 1});

			return (essais > 0) ? result : -1; // essais dépassé
		}
	})


module.exports = JeuModel.extend({
	elements:null,

	initialize:function(){
		this.data = new Data(null, {cookie:this.getCookie()});
		this.set({data: this.data});
		this.elements = this.data.get('elements');
		console.log(this.toJSON());
	},

	validate:function(){
		var result = this.data.validate();
		this.setCookie();
		return result;
	},

	essais:function(){
		return this.data.get('essais');
	},

	save:function(){
		this.setCookie(this.toJSON())

		return true;
	}
});