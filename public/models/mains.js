define([
  'jquery',
  'underscore',
  'backbone',  
], function($, _, Backbone){

	var mainsModel = Backbone.Model.extend({

		urlRoot: '/mains',

		idAttribute: 'id'
		
	});

	return mainsModel;

});