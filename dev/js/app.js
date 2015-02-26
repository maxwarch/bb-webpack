'use strict';

require('../css/bootstrap/less/bootstrap.less'); 
require('../css/app.css'); 

var $ 			= require('jquery'),
	_ 			= require('lodash'),
	Backbone 	= require('backbone'),
	Marionette 	= require('backbone.marionette'),
	cookie 		= require('jquery.cookie');

window.BaseModule 	= require('./_superclass/BaseModule');
window.Me 			= require(MODEL + 'me').getInstance();

// Create the application instance

window.app = new Marionette.Application({
    regions: {
    	headerRegion	: 'header',
        contentRegion 	: '#content',
        footerRegion	: 'footer'
    }
});


module.exports = window.app; 
