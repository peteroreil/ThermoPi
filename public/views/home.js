define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html',
  'models/mains',
  'views/mainsView',
  'collections/zonesCollection',
  'views/zonesView'
], function($, _, Backbone, homeTemplate, MainsModel, MainsView, ZonesCollection, ZonesView){

	var HomeView = Backbone.View.extend({

		initialize: function() {
			this.el = $('.container');
			this.template = _.template(homeTemplate);
			$(this.el).html(this.template);
		},

		render: function() {
			$('.container').empty();
			$(this.el).html(this.template);

			 var mainsPowerModel  = new MainsModel();
			 var zonesCollection = new ZonesCollection();
			 var mainsPowerView = new MainsView({model : mainsPowerModel, collection: zonesCollection});			 

			zonesCollection.fetch({success: function() {
	            var zonesView = new ZonesView({collection: zonesCollection, model: mainsPowerModel});
	            zonesView.render();
        	}});
		}
	});

	return HomeView;
});