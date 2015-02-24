'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./introCtrl'));
        this.router 	= new (require('./introRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});