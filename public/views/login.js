define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login.html'
], function($, _, Backbone, loginTemplate){

	var LoginView = Backbone.View.extend({

		className : 'login',
		
		events : {
		'submit  form' : 'login'
		},

		initialize: function() {
			this.template = _.template(loginTemplate);
			$(this.el).html(this.template);
		},

		render: function() {
			$('.container').html(this.el);
		}, 

		login: function(event) {
			event.preventDefault();	
			// authenticate user yada yada	
			Backbone.history.navigate('#main', true);
		}
	});

	return LoginView;
});