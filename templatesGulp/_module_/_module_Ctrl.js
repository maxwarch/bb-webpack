'use strict';
 
module.exports = Marionette.Controller.extend({
    initialize: function(opts) {
        
    },
    _module_: function(id) {
        app.contentRegion.show(new (require('./views/_module_View')))
    }
});