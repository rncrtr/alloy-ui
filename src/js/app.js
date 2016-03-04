'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    gridTable = require('./gridTable');


var DEPS = [routes, contexts, reports, gridTable,'templates'];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));
