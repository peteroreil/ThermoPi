define([
  'jquery',
  'underscore',
  'backbone',
  'views/login'
  ], function($, _, Backbone, LoginView) {
  
 
  var Router = Backbone.Router.extend({
    routes: {
      '': 'login'
    }
  });
  
  
  var initialize = function(){

    var router = new Router;
    
    router.on('route:login', function() {
        var loginView = new LoginView();
        loginView.render();
      });

     Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});