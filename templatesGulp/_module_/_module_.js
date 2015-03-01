'use strict';

module.exports = BaseModule.extend({

    initialize: function() {
        this.controller = new (require('./_module_Ctrl'));
        this.router 	= new (require('./_module_Rte'))({ controller: this.controller });
        BaseModule.prototype.initialize.apply(this, arguments);

        this.controller._module_();
    },
});