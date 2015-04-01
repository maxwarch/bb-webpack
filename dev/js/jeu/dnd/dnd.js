'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./dndCtrl'));
        this.router 	= new (require('./dndRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});