(function ($, _) {
	insertScript = function(script){
		var js = document.createElement('script');
		js.src = script;
		var first = document.getElementsByTagName('script')[0];
		first.parentNode.insertBefore(js, first);
	}
})($, _)