'use strict';

module.exports = Marionette.Module.extend({

    startWithParent: false,

    _started: false,

    initialize: function() { 
        this.listenTo(Backbone.history, 'route', this._onRoute);
        var self = this;
        _.defer(function(){
            if(_.isFunction(self.controller[self.current().route])){
                self.controller[self.current().route].apply(self, arguments);
            }else{
                self.controller.defaut();

            }
        })
    },

    onStart: function() {
        //console.log('start', this);
        this._started = !this._started;
        
    },

    onStop: function() {
        //console.log('stop', this);
        this._started = !this._started;
    },

    _onRoute: function(router) {
        if (this.router === router) {
            if (!this._started) this.start();
        } else {
            if (this._started) this.stop();
        }
    },

    navigate:function(uri, trigger, replace){
        var self = this;
        _.defer(function(){
            self.router.navigate(uri, {trigger:trigger || true, replace:replace || false});
        })
    },

    current : function() {
        var Router = this.router,
            fragment = Backbone.history.fragment,
            routes = _.pairs(Router.appRoutes),
            route = null, params = null, matched;

        matched = _.find(routes, function(handler) {
            route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
            return route.test(fragment);
        });

        if(matched) {
            // NEW: Extracts the params using the internal
            // function _extractParameters 
            params = Router._extractParameters(route, fragment);
            route = matched[1];
        }

        return {
            route : route,
            fragment : fragment,
            params : params
        };
    }
});