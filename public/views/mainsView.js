define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainsTemplate.html'
], function($, _, Backbone, mainsTemplate){

	var mainsView = Backbone.View.extend({

		className: 'row',

		events : {
			'click .btn' : 'putState'
		},

		initialize : function() {
			_.bindAll(this, 'render', 'disableZones');
			this.model.on('change',this.render,this);
			this.template = _.template(mainsTemplate);	
			this.model.fetch();			
		},

		render: function() {
			$('#main-power').empty();
			$(this.el).html(this.template(this.model.toJSON()));
			this.delegateEvents(this.events);
			$('#main-power').append(this.el);
		},

		putState : function() {
			if (this.isPoweredOn()) {
				this.powerOff();
				this.disableZones();
			} else {
				this.powerOn();
				this.enableZones();
			}
			
			this.model.save();
		},

		powerOn: function() {
			this.model.set({'value' : '1', 'state': 'on'});
		},

		powerOff: function() {
			this.model.set({'value' : '0', 'state': 'off'});
		},

		isPoweredOn : function() {
			return this.model.get('value') == 1
		},

		disableZones : function() {
			_.each(this.collection.models, function(model){
				console.log(model.get('value'));
				model.set({'value' : '0'});
				model.save();
			}, this);
			$('.zone-buttons').addClass('disabled');			
		},

		enableZones : function() {
			$('.zone-buttons').removeClass('disabled');

			_.each(this.collection.models, function(model){
				console.log(model.get('value'));
				model.set({'value' : '0', 'state' : 'off'});
				model.save();
			}, this);			
		}

	});

	return mainsView;

});