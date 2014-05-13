define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainsTemplate.html'
], function($, _, Backbone, mainsTemplate){

	var mainsModel = Backbone.Model.extend({

		urlRoot: '/mains',

		idAttribute: 'id'
		
	});

	return mainsModel;

});