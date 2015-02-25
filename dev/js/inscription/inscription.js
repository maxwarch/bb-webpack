'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./inscriptionCtrl'));
        this.router 	= new (require('./inscriptionRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});