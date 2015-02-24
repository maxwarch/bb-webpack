'use strict';

//require('../../../css/bootstrap/js/tooltip');
//require('../../../css/bootstrap/js/popover');

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	events:{
		'click @ui.bt' : 'clickBt'
	},

	ui:{
		bt:'#example'
	},

    template: _.template(require('../templates/intro.html')),

    clickBt:function(e){
    	$.getJSON(config.rest + 'test', function(data){
    	//$.getJSON('http://chat.krealid.nexylan.net/api/sujets', function(data){
    		console.log(data);
    	});
    },

    onShow:function(){
    	//this.ui.bt.popover();
    }
});