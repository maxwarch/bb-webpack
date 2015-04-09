'use strict';

window.config = require('./config');

require('../css/bootstrap/less/bootstrap.less'); 
require('../css/app.css');
require(LIB + 'utils');

window.BaseModule 	= require('./_superclass/BaseModule');
window.Me 			= require(MODEL + 'me').getInstance();

// Create the application instance

window.app = new Marionette.Application({
	onStart:function(){
		this.startSubApp('accueil', require('./accueil/accueil'));
		Backbone.history.start(); 
	},

    regions: {
    	headerRegion	: 'header',
        contentRegion 	: '#content',
        footerRegion	: 'footer'
    },

    startSubApp:function(appName, args){
		var currentApp = this.module(appName, args);
		if (this.currentApp === currentApp) return;

		if (this.currentApp) this.currentApp.stop();

		this.currentApp = currentApp;

		this.currentApp.start();
	}
});


app.start();