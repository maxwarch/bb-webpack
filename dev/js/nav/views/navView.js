'use strict'; 

module.exports = Marionette.ItemView.extend({
	initialize:function(){
		this.listenTo(Backbone.history, 'route', this.changeActive);
		require.ensure([], function(){
			require(BOWER + 'hello/dist/hello');
		}, 'hello');
	},

    template: _.template(require(THEME + 'nav.html')),

    changeActive:function(data){
    }
});