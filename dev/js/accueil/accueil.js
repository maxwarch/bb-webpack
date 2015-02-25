'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./accueilCtrl'));
        this.router 	= new (require('./accueilRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});