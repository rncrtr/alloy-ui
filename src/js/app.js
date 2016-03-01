'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports');


var DEPS = [routes, contexts, reports, 'templates'];

angular.module('app', DEPS);