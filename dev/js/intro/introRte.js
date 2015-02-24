'use strict';

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'intro',
        'about':'about',
        'contact':'contact'
    },

    current : function() {
		    var Router = this,
		        fragment = Backbone.history.fragment,
		        routes = _.pairs(Router.routes),
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