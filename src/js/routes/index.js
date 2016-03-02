'use strict';

var MODULE_NAME = 'routes';

var DEPS = [require('angular-ui-router')];

var routes = angular.module(MODULE_NAME, DEPS);

routes.config(require('./routes.config'));
routes.directive('activeLink', require('./routes.directives'))

module.exports = MODULE_NAME;