'use strict';

var angular = require('angular');
var uiBootstrap = require('angular-ui-bootstrap');

var routes = require('./routes'),
    contexts = require('./contexts'),
    gridTable = require('./gridTable'),
    helpers = require('./helpers'),
    tagsInput = require('./tagsInput');

var DEPS = ['templates', uiBootstrap,routes,contexts,gridTable,helpers,tagsInput];

angular.module('app', DEPS)
       .service('dataService',require('./data.service'));