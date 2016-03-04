'use strict';

var MODULE_NAME = 'grid-table';

var DEPS = [];

var gridTable = angular.module(MODULE_NAME, DEPS);

gridTable.directive('gridTable', require('./grid-table.directive'));

module.exports = MODULE_NAME;