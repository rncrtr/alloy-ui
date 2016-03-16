'use strict';

var MODULE_NAME = 'helpers';

var DEPS = [];

var helpers = angular.module(MODULE_NAME, DEPS);

helpers.controller('TabsCtrl', require('./tabs.controller'));

module.exports = MODULE_NAME;