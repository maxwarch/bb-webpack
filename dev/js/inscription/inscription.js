'use strict';

require('utils');
insertScript('/bower_components/hello/dist/hello.all.min.js');

module.exports = BaseModule.extend({

    initialize: function() {
    	var self = this;
    	require.ensure([], function(){
    		var Hello = require('hello');
    		console.log(Hello);

    		self.controller = new (require('./inscriptionCtrl'));
	        self.router 	= new (require('./inscriptionRte'))({ controller: self.controller });
	        BaseModule.prototype.initialize.apply(self, arguments);
    	});
    		
    	
        //this.controller = new (require('./inscriptionCtrl'));
        //this.router 	= new (require('./inscriptionRte'))({ controller: this.controller });
        //BaseModule.prototype.initialize.apply(this, arguments);
    }
});