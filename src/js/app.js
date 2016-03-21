'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    servers = require('./servers'),
    scripts = require('./scripts'),
    trainingDataUpload = require('./trainingDataUpload'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    tagsInput = require('./tagsInput');

var DEPS = [routes, contexts, reports, servers, 'templates',trainingDataUpload, gridTable, helpers,tagsInput];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));