/* global angular */
var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  // 
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  // 
  // Now set up the states 
  $stateProvider
    .state('page', {
      url: "/page",
      templateUrl: "views/page.html"
    });
});