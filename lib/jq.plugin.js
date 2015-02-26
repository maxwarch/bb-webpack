(function ( $ ) {
	$.postJSON = function(url, data, callback){
		var result = ($.isArray(data)) ? JSON.stringify($.extend({}, data)) : JSON.stringify(data);
		$.ajax({
				url: url,
				type: 'POST',
				data: result,
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				async: false,
				success: function(data) {
					callback(data);
				},
				error: function(data, status, jqXHR){
					
				}
			});
	}
}( jQuery ));

