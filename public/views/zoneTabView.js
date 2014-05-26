define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/zoneTabTemplate.html'
], function($, _, Backbone, zoneTabTemplate){

	var ZoneView = Backbone.View.extend({

		tagName: 'li',		

		initialize: function() {
			_.bindAll(this, 'render', 'addActiveClass');
			this.model.on('change', this.render, this);
			this.template = _.template(zoneTabTemplate);			
			this.render();
		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			this.$('a').attr("href", "#"+this.model.get('id'));
			$('#zoneTabs').append(this.el);
		},

		addActiveClass: function() {
			$(this.el).addClass('active');
		}
	});

	return ZoneView;
});