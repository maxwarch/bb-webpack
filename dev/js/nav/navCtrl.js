'use strict';

var NavView 	= require('./views/navView');


module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        app.headerRegion.show(new NavView());
    }
});