'use strict';

var MODULE_NAME = 'servers';

var DEPS = [];

var servers = angular.module(MODULE_NAME, DEPS);

servers.directive('serverList', require('./serverList/server-list.directive'));
servers.directive('serverDetail', require('./serverDetail/server-detail.directive'));

module.exports = MODULE_NAME;