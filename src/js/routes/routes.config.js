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
            url: "/contexts/:context_name",
            templateUrl: 'routes/templates/context-detail-template.html'
        })
}

module.exports = RouteConfig;
