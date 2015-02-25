(function ( $ ) {
	$.fn.validate = function( options, callback ) 
	{
		var $this;
		
		var hidemessage = (options.hidemessage) ? false : true;

		$(this).on('submit', function(e, nooptin){
			e.preventDefault();
			e.stopImmediatePropagation();
			$this = $(this);

			if(jQuery.isFunction(options.before)) options.before($this);
			options.format = (options.format) ? options.format : 'json';
			
			if(nooptin != 1) $this.find('input[name="nooptin"]').val(0);
			
			$this.find("#datedenaissance").val($this.find("#jour").val()+'-'+$this.find("#mois").val()+'-'+$this.find("#annee").val());

			$.post($this.attr('action'), $this.serialize(), function(data)
			{
				$this.find('input').removeClass('error-input');
				$this.find('.error').hide();

				if(data.status == 'error')
				{
					$.each(data.errorfields, function(i, item) {
						
						if(hidemessage)
						{
							$this.find('.'+item.field).css('display','block');
							if(jQuery.inArray( item.field, options.special_fields ) >= 0)
							{
								$this.find('.'+item.field).html(item.error);
							}
						}

						$this.find('input[name="'+item.field+'"]').addClass('error-input');
						if(jQuery.isFunction(options.onError)) options.onError(data, $this);
					});
				}else{
					callback(data, $this);
					if(options.deleteAfter)
					{
						$this.find('input[type="text"]').val('');
						$this.find('input[type="password"]').val('');
						$this.find('textarea').val('');
						$this.find(':checkbox').attr('checked', false);
						$this.find(':radio').attr('checked', false);
					}
				}
			}, options.format);

			return false;
		});
		
		if(options && options.bt_no_optin)
		{
			$(this).append('<input type="hidden" name="nooptin" value="0" />');
			
			$(options.bt_no_optin).click(function(e){
				e.preventDefault();	
				if ($(this).find('input[name="nooptin"]').val() == 0) 
				{				
					$('input[name="nooptin"]').val(1);
					$('input[name="reglement"]').attr("checked", true);
					$('input[name="optin_1"]').attr("checked", false);
					//$('input[name="optin_2"]').attr("checked", false);
					//$('input[name="optin_3"]').attr("checked", false);
				}else {
					$(this).find('input[name="nooptin"]').val(0);
				}
				
				$(this).trigger('submit', [1]);
				return false;
			});
			
			
			$(this).find('input[type="submit"]').click(function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				$(this).trigger('submit');
				return false;
			});
		}
	};
	
	
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

