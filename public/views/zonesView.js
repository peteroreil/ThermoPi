define([
  'jquery',
  'underscore',
  'backbone',
  'views/zoneTabView',
  'views/zoneContentView'
  ], function($, _, Backbone, ZoneTabView, ZoneContentView){

	var ZonesView = Backbone.View.extend({

		initialize: function() {
			_.bindAll(this, 'render', 'renderTabs');
		},

		render: function() {
			this.renderTabs();
		}, 

		renderTabs: function() {
			_.each(this.collection.models, function(zoneModel){
				var index = this.collection.indexOf(zoneModel);
				
				var tabView = new ZoneTabView({model: zoneModel});				
				var contentView = new ZoneContentView({model: zoneModel});

				if (this.model.get('value') == 0) {
					contentView.disableButton();
				}

				if (index == 0) {
					tabView.addActiveClass();
					contentView.addActiveClass();
				}
				
			}, this);
			
		}		
	});

	return ZonesView;
});