'use strict';

var MODULE_NAME = 'scripts';

var angular = require('angular');

var DEPS = [];

var scripts = angular.module(MODULE_NAME, DEPS);
scripts.directive('scriptList', require('./scriptList/script-list.directive'));
scripts.directive('scriptDetail', require('./scriptDetail/script-detail.directive'));

module.exports = MODULE_NAME;