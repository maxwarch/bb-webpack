(function ($, _) {
	insertScript = function(script){
		var js = document.createElement('script');
		//js.type = 'text/javascript';
		//js.charset = 'utf-8';
		//js.async = 'async'
		js.src = script;

		/*js.onreadystatechange = function() {
			console.log('ready')
		    if (this.readyState == 'complete') { callback(); }
		}*/

		var first = document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1];
		first.appendChild(js, first);
	}
})($, _)