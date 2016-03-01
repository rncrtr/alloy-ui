'use strict';

var MODULE_NAME = 'contexts';

var DEPS = [];

var contexts = angular.module(MODULE_NAME, DEPS);

contexts.directive('contextDetail', require('./contextDetail/context-detail.directive'));
contexts.factory('contextService', require('./context.service'));

module.exports = MODULE_NAME;