define([
  'jquery',
  'underscore',
  'backbone',
  'models/zoneModel' 
], function($, _, Backbone, ZoneModel){

	var ZoneCollection = Backbone.Collection.extend({
		
		model: ZoneModel,

		url: '/zone'
		
	});

	return ZoneCollection;

});