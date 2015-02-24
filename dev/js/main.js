'use strict';

window.config = require('./config');

var app 		= require('./app'),
	IntroModule = require('./intro/intro'),
	NavModule 	= require('./nav/nav');
 

// add all modules
app.module('nav', NavModule);
app.module('intro', IntroModule);

// start the app
app.start();

// start the history
Backbone.history.start();
