'use strict';

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	className:'' + CLASSVIEW + '',
	tagName:'div id="_module_"',

	model:null,

	events:{
		
	},

	ui:{
		
	},

    template: _.template(require('../templates/_module_.html')),

    onRender:function(){

    }
});