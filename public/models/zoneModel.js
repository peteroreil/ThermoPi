define([
  'jquery',
  'underscore',
  'backbone'  
], function($, _, Backbone){

	var ZoneModel = Backbone.Model.extend({
		
		idAttribute: 'id',

		url: function() {
			return this.id ? '/zone/'+this.id : '/zone'
		}
		
	});

	return ZoneModel;

});