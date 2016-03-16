'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    servers = require('./servers'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    uiBootstrap = require('angular-ui-bootstrap');


var DEPS = [routes, contexts, reports, servers, gridTable, helpers, uiBootstrap, 'templates'];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));
