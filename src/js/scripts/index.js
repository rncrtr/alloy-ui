'use strict';

var MODULE_NAME = 'scripts';

var angular = require('angular');

var DEPS = [];

var scripts = angular.module(MODULE_NAME, DEPS);
scripts.directive('scriptsList', require('./scriptsList/scripts-list.directive'));
scripts.directive('scriptsDetail', require('./scriptsDetail/scripts-detail.directive'));

module.exports = MODULE_NAME;