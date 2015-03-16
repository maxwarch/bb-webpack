'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./partageCtrl'));
        this.router 	= new (require('./partageRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});