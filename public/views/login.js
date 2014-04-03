define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login.html'
], function($, _, Backbone, loginTemplate){

	var LoginView = Backbone.View.extend({

		initialize: function() {
			this.template = _.template(loginTemplate);
			$(this.el).html(this.template);
		},

		render: function() {
			$('.container').html(this.el);
		}
	});

	return LoginView;
});