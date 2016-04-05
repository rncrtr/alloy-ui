'use strict';

var MODULE_NAME = 'helpers';

var DEPS = [];

var helpers = angular.module(MODULE_NAME, DEPS);

helpers.directive('watchFile', require('./watch-file.directive'));

module.exports = MODULE_NAME;