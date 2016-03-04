'use strict';

var MODULE_NAME = 'contexts';

var DEPS = [];

var contexts = angular.module(MODULE_NAME, DEPS);

contexts.directive('contextDetail', require('./contextDetail/context-detail.directive'));
contexts.directive('contextList', require('./contextList/context-list.directive'));

module.exports = MODULE_NAME;