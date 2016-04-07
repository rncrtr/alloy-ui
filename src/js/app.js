'use strict';

var angular = require('angular');
var uiBootstrap = require('angular-ui-bootstrap');
var fileUpload = require('ng-file-upload');

var routes = require('./routes'),
    contexts = require('./contexts'),
    reports = require('./reports'),
    servers = require('./servers'),
    scripts = require('./scripts'),
    trainingDataUpload = require('./trainingDataUpload'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    tagsInput = require('./tagsInput');


var DEPS = ['templates', uiBootstrap, fileUpload,
            routes,contexts,
            reports,servers,
            scripts,trainingDataUpload,
            gridTable,helpers,tagsInput];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));