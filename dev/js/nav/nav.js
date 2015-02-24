'use strict';

module.exports = BaseModule.extend({
	startWithParent:true,

    initialize: function() {
        this.controller = new (require('./navCtrl'));
        //this.router = new NavRouter({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);
    },
});