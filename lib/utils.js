(function ($, _) {
	uniqid = function(){
		return (new Date().getTime() + Math.floor((Math.random()*10000)+1)).toString(16);
	};

	$.fn.show = function(){
		$(this).removeClass('hide');
	};

	$.fn.hide = function(){
		$(this).addClass('hide');
	}
})($, _)