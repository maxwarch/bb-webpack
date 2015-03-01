'use strict';

window.config = require('./config');

var app 		= require('./app');

// add all modules
app.module('accueil', require('./accueil/accueil'));

// start the app
app.start();

// start the history
Backbone.history.start();
