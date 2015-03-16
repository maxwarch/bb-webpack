'use strict';

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	className:'' + CLASSVIEW + '',
	
	events:{
		
	},

	ui:{
		
	},

    template: _.template(require(THEME + 'accueil.html'))
});