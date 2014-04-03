require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    templates: '../templates',
    views: '../views', 
    models: '../models',
    collections: '../collections'
  }

});

require(['thermoPiApplication'], function(thermoPi) {
	thermoPi.start();
});