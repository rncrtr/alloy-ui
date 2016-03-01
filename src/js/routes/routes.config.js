'use strict';

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
            templateUrl: "contexts/contextList/context-list-view.html"
        })
        .state('main.contextDetail', {
            url: "/contexts/{id}",
            templateUrl: "contexts/contextDetail/context-detail-view.html"
        })
}

module.exports = RouteConfig;
