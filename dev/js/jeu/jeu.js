'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./jeuCtrl'));
        this.router 	= new (require('./jeuRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});