'use strict';

var MODULE_NAME = 'training-data';

var angular = require('angular');

var DEPS = [];

var trainingData = angular.module(MODULE_NAME, DEPS);
trainingData.directive('trainingDataUpload', require('./trainingDataUpload/training-data-upload.directive'));

module.exports = MODULE_NAME;
