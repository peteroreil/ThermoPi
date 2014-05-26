define([
  'jquery',
  'underscore',
  'backbone',
  'views/login',
  'views/home',
  'models/mains',
  'views/mainsView',
  'collections/zonesCollection',
  'views/zonesView'
  ], function($, _, Backbone, LoginView, HomeView, MainsModel, MainsView, ZonesCollection, ZonesView) {
  
 
  var Router = Backbone.Router.extend({
    routes: {
      '': 'login',
      'main': 'loggedIn'
    }
  });
  
  
  var initialize = function(){

    var router = new Router;
    
    router.on('route:login', function() {
        var loginView = new LoginView();
        loginView.render();
      });

    router.on('route:loggedIn', function() {
        var homepage = new HomeView();
        homepage.render();

        var mainsPowerModel  = new MainsModel();
        var mainsPowerView = new MainsView({model : mainsPowerModel});

        var zonesCollection = new ZonesCollection();
        zonesCollection.fetch({success: function() {
            var zonesView = new ZonesView({collection: zonesCollection});
            zonesView.render();
        }});
        
    });

     Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});