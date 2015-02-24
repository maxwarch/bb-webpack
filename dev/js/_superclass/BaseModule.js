'use strict';

module.exports = Marionette.Module.extend({

    startWithParent: false,

    _started: false,

    initialize: function() {
        this.listenTo(Backbone.history, 'route', this._onRoute);
    },

    onStart: function() {
        this._started = !this._started;
    },

    onStop: function() {
        this._started = !this._started;
    },

    _onRoute: function(router) {
        if (this.router === router) {
            if (!this._started) this.start();
        } else {
            if (this._started) this.stop();
        }
    }
});