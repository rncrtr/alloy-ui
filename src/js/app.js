'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    servers = require('./servers'),
    trainingDataUpload = require('./trainingDataUpload'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    ngFileUpload = require('ng-file-upload');

var DEPS = [routes, contexts, reports, servers, 'templates',trainingDataUpload, gridTable, helpers, ngFileUpload];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));