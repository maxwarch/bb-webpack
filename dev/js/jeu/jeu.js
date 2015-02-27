'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./' + JEU + '/jeuCtrl'));
        this.router 	= new (require('./' + JEU + '/jeuRte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});