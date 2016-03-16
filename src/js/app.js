'use strict';

var angular = require('angular');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    trainingDataUpload = require('./trainingDataUpload'),
    gridTable = require('./gridTable'),
    ngFileUpload = require('ng-file-upload');


var DEPS = [routes, contexts, reports, gridTable,'templates',trainingDataUpload,ngFileUpload];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));