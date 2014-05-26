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
			_.bindAll(this, 'render');
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
			} else {
				this.powerOn();
			}

			this.model.save();
		},

		powerOn: function() {
			this.model.set({'value' : '1'});
		},

		powerOff: function() {
			this.model.set({'value' : '0'});
		},

		isPoweredOn : function() {
			return this.model.get('value') == 1
		}
	});

	return mainsView;

});