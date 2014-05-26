define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/zoneContentTemplate.html'
], function($, _, Backbone, zoneContentTemplate){

	var ZoneView = Backbone.View.extend({

		className: 'tab-pane',

		events: {
			'click .zone' : 'putState'
		},

		initialize: function() {
			_.bindAll(this, 'render', 'addActiveClass', 'putState', 'isPoweredOn', 'powerOn', 'powerOff');
			this.model.on('change', this.render, this);
			this.template = _.template(zoneContentTemplate);
			this.render();
			
		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			$(this.el).attr("id",this.model.get('id'));	
			$('#zoneContainer').append(this.el);
		},

		addActiveClass: function() {
			$(this.el).addClass('active');
		},

		putState : function() {
			if (this.isPoweredOn()) {
				this.powerOff();
			} else {
				this.powerOn();
			}
			this.model.save();
		},

		isPoweredOn: function() {
			return this.model.get('value') == 1
		},

		powerOn: function() {
			this.model.set({'value' : '1'});
		},

		powerOff: function() {
			this.model.set({'value' : '0'});
		}
	});

	return ZoneView;
});