'use strict';

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	className:'' + CLASSVIEW + '',
	tagName:'div id="partage"',

	model:null,

	events:{
		
	},

	ui:{
		
	},

    template: _.template(require(THEME + 'partage.html')),

    onRender:function(){

    }
});