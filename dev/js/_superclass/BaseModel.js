'use strict';

require(LIB + 'jq.plugin');

module.exports = Backbone.Model.extend({
	jsonString:function(){
		return JSON.stringify(this.toJSON());
	},

	saveValidate:function(form, options, callback){
		var self = this, dataForm = {};
		var d = form.serializeArray();
		_.map(d, function(n){
			dataForm[n.name] = n.value;
		})

		var hidemessage = (options && options.hidemessage) ? false : true;
		var special_fields = (options && options.special_fields) ? options.special_fields : null;
		if(_.isFunction(options && options.before)) options.before(form);
		if(options && options.nooptin != 1) form.find('input[name="nooptin"]').val(0);
		form.find("#datedenaissance").val(form.find("#jour").val()+'-'+form.find("#mois").val()+'-'+form.find("#annee").val());

		$.postJSON(this.urlRoot, dataForm, function(data){
			form.find('input').removeClass('error-input');
			form.find('.error').hide();
			form.find('.error').addClass('hide');

			if(data.form.status == 'error')
			{
				$.each(data.form.errorfields, function(i, item) {
					
					if(hidemessage)
					{
						form.find('.'+item.field).css('display','block');
						form.find('.'+item.field).removeClass('hide');
						
						if(special_fields){
							if(jQuery.inArray( item.field, special_fields ) >= 0)
							{
								form.find('.'+item.field).html(item.error);
							}
						}
					}

					form.find('input[name="'+item.field+'"]').addClass('error-input');
					if(options && _.isFunction(options.onError)) options.onError(data, form);
				});
			}else{
				// mise à jour du modéle avec les données filtrées en PHP
				self.set(data.result);

				if(_.isFunction(callback)) callback(self, form);
				if(options.deleteAfter)
				{
					form.find('input[type="text"]').val('');
					form.find('input[type="password"]').val('');
					form.find('textarea').val('');
					form.find(':checkbox').attr('checked', false);
					form.find(':radio').attr('checked', false);
				}
			}

			if(options && options.bt_no_optin)
			{
				form.append('<input type="hidden" name="nooptin" value="0" />');
				
				$(options.bt_no_optin).click(function(e){
					e.preventDefault();	
					if (form.find('input[name="nooptin"]').val() == 0) 
					{				
						$('input[name="nooptin"]').val(1);
						$('input[name="reglement"]').attr("checked", true);
						$('input[name="optin_1"]').attr("checked", false);
						//$('input[name="optin_2"]').attr("checked", false);
						//$('input[name="optin_3"]').attr("checked", false);
					}else {
						form.find('input[name="nooptin"]').val(0);
					}
					
					form.trigger('submit', [1]);
					return false;
				});
				
				
				form.find('input[type="submit"]').click(function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					form.trigger('submit');
					return false;
				});
			}
		});
	},

	getFormData: function(form) { 
	    var self = this;
	    var unindexed_array = form.serializeArray();
	    _.map(unindexed_array, function(n){
	        self.set(n.name, n.value);
	    });

	    return this;
	},

	setCookie:function(name, data){
		$.cookie(config.prefix + name, data);
	}
});