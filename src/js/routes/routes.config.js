(function() {
   'use strict';

    angular.module('routes')
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('page', {
                url: "/page",
                templateUrl: "views/page.html"
            });
    }

}());