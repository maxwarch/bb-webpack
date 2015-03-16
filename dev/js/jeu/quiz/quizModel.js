'use strict';

var _config 	= require('./config.json'),
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
		},

		validate:function(id){
			return this.props.get(id).attributes.r == true;
		}
	});


module.exports = Backbone.Collection.extend({
	type:null,
	doValidation:_config.doValidation,	// est-ce que les réponses doivent être bonnes ou est-ce un quiz type 'magazine feminin'

	initialize:function(){
		this.type = _config.type;

		var self 	= this,
			i 		= 0;

		_.map(_config.questions, function(q){
			q.id = ++i;
			q.ruser = null;
			self.add(new Question(q));
		})

		//console.log(this.toJSON());
	},

	validate:function(question){
		var err = new Array();

		var item = (question) ? this.get(question) : null;

		if(!this.doValidation){
			if(question){
				if(_.isNull(item.get('ruser'))) err.push({id:item.id, invalid:false});
			}else{
				this.each(function(item){
					if(_.isNull(item.get('ruser'))) err.push({id:item.id, invalid:false});
				});
			}
			
		}else{
			if(question){
				if(!_.isNull(item.get('ruser')) && !item.validate(item.get('ruser'))){
					err.push({id:item.id, invalid:true});
				}else{
					if(_.isNull(item.get('ruser'))) err.push({id:item.id, invalid:false});
				}
			}else{
				this.each(function(item){
					if(!_.isNull(item.get('ruser')) && !item.validate(item.get('ruser'))){
						err.push({id:item.id, invalid:true});
					}else{
						if(_.isNull(item.get('ruser'))) err.push({id:item.id, invalid:false});
					}
				});
			}
		}

		return err;
	},

	save:function(){
		$.cookie(config.prefix + 'quiz', JSON.stringify(this.toJSON()));

		return true;
	}
});