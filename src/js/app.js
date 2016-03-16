'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    trainingDataUpload = require('./trainingDataUpload'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    uiBootstrap = require('angular-ui-bootstrap'),
    ngFileUpload = require('ng-file-upload');

var DEPS = [routes, contexts, reports, 'templates',trainingDataUpload, gridTable, helpers, uiBootstrap, ngFileUpload];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));