'use strict';

/** Set up so each route has a dedicated template
 *  Templates for routes are found in ./templates
 *  Controllers for routes (if needed) are found in ./controllers
 *  If possible, controller type functionality should be part of a specific component
 *  instead of the route.
 */

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/contexts");

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'routes/templates/main-template.html'
        })
        .state('main.contexts', {
            url: '/contexts',
            templateUrl: 'routes/templates/contexts-template.html'
        })
        .state('main.context-detail', {
            url: "/contexts/:id",
            templateUrl: "routes/templates/context-detail-template.html"
        })
        .state('main.reports', {
            url: '/reports',
            templateUrl: 'routes/templates/reports-template.html'
        })
        .state('main.report-detail', {
            url: "/contexts/:id/reports/:rid",
            templateUrl: "routes/templates/report-detail-template.html"
        })
        .state('main.scripts', {
            url: '/scripts',
            templateUrl: 'routes/templates/scripts-template.html'
        })
        .state('main.script-detail', {
            url: '/scripts/:id',
            templateUrl: 'routes/templates/script-detail-template.html'
        })
        .state('main.servers', {
            url: '/servers',
            templateUrl: 'routes/templates/servers-template.html'
        })
        .state('main.server-detail', {
            url: '/servers/:id',
            templateUrl: 'routes/templates/server-detail-template.html'
        })
}

module.exports = RouteConfig;
