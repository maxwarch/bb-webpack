'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    inscription: function(id) {
        app.contentRegion.show(new (require('./views/inscriptionView')))
    }
});