define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', 
], function($, _, Backbone, Router) {
 
  var start = function(){
    Router.initialize();
  };

  return { 
    start: start
  };
});