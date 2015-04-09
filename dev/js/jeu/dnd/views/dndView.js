'use strict';

require('../css/dnd.css');

require(BOWER + 'jquery-ui/ui/core');
require(BOWER + 'jquery-ui/ui/widget');
require(BOWER + 'jquery-ui/ui/mouse');
require(BOWER + 'jquery-ui/ui/draggable');
require(BOWER + 'jquery-ui/ui/droppable');

var _config		= require('../config.json'),
	dndModel 	= new (require('../dndModel'));

module.exports = Marionette.ItemView.extend({
	initialize:function(){
	},

	className:'' + CLASSVIEW + '',
	tagName:'div id="dnd"',

	model:null,

	events:{
		'click #valid':'clickValid'
	},

	ui:{
		drag:'.drag',
		elt:'.elt'
	},

    template: _.template(require(THEME + 'dnd.html')),

    templateHelpers:{
    	data:dndModel.elements.toJSON(),
    	shuffle:_config.shuffle
    },

    onRender:function(){
    	var self = this;
    	_.each(this.ui.elt, function(item){
			self.makeElementAsDragAndDrop(item)
		});
    },

    clickValid:function(e){
    	e.preventDefault();

		$('.error').addClass('hide'); 
		var result = dndModel.validate();
		
		if(result == -2){
			$('.incomplet').show(); 
			return;
		}

		if(result == -1){
			$('.tentative').show();
			return;
		}

		if(result === false){
			$('.rep').html('Plus que ' + dndModel.data.get('essais') + ' essais');
			$('.rep').show();
		}else{
			dndModel.set({played:true});
			if(!rep){
				$.post('/jeu/setplaying', {valid:playing}, function(data){
					if(data < 2)
					{
						$.colorbox({html:$('#lightbox-perdu').html(), width:'90%', height:'90%', opacity:0.7, maxWidth:775, maxHeight:560, closeButton:false});
					}else{
						$.post('/jeu/setplaying', {valid:'nok'}, function(data){
							app.module('jeu').navigate('jeu/perdu', false, true)
						});
					}
				});
			}else{
				$.post('/jeu/setplaying', {valid:'ok'}, function(data){
					app.module('jeu').navigate('jeu/gagne', false, true)
				});
			}
		}
    },

    saveResult:function(){
    	dndModel.save(null, {
    		success:function(model, data){
    			console.log('ok', model, data)
    		},

    		error:function(model, data){
    			console.log('erreur', data)
    		}
    	});
    },

    makeElementAsDragAndDrop:function(elem) {
    	var self = this;
		if($(elem).hasClass('drag'))
		{
			$(elem).draggable({
				revert: "invalid",
				cursor: "grab",
				helper: "clone"
			});
		}
		
		$(elem).droppable({
			accept:'.drag',
			drop: function(event, ui) {
				_.defer(function(){
					dndModel.elements.each(function(item){
						item.set('droprep', null);
					});

					$.each($('.elt-drop'), function(){
						var elt = $(this).find('.drag');
						if(elt.length)
							dndModel.elements.findWhere({id:parseInt($(this).attr('data-pos'))}).set('droprep', elt.find('img').attr('src'));
					});
				});

				var $dragElem = $(ui.draggable).clone().replaceAll(this);
				$(this).replaceAll(ui.draggable);
				self.makeElementAsDragAndDrop(this);
				self.makeElementAsDragAndDrop($dragElem);
			}
		});
	}
});