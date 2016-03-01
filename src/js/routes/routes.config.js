(function() {
   'use strict';

    angular.module('routes')
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/contexts");

        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: 'partials/main-template.html'
            })
            .state('main.contexts', {
                url: '/contexts',
                template: "main.contexts"
            })
            .state('main.contextDetail', {
                url: "/contexts/{id}",
                template: "main.contextDetail"
            })
    }

}());