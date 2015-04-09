'use strict';

module.exports = Backbone.Model.extend({
	toJSON:function(){
		
		var json = _.clone(this.attributes);
	    for(var attr in json) {
	    	if(!_.isNull(json[attr]) && !_.isUndefined(json[attr]) && json[attr].hasOwnProperty('models')) {
	    		json[attr] = json[attr].toJSON();
	    	}
	    }
	    return json;
	}
});