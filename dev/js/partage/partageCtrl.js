'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    partage: function(id) {
        app.contentRegion.show(new (require('./views/partageView')))
    }
});