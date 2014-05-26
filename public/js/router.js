define([
  'jquery',
  'underscore',
  'backbone',
  'views/login',
  'views/home'  
  ], function($, _, Backbone, LoginView, HomeView) {
  
 
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
    });

     Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});