'use strict';

var MODULE_NAME = 'reports';

var angular = require('angular');

var DEPS = [];

var reports = angular.module(MODULE_NAME, DEPS);
reports.directive('reportList', require('./reportList/report-list.directive'));
reports.directive('reportDetail', require('./reportDetail/report-detail.directive'));
module.exports = MODULE_NAME;
