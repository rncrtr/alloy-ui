'use strict';

var MODULE_NAME = 'tags-input';

var DEPS = [];

var tagsInput = angular.module(MODULE_NAME, DEPS);

tagsInput.directive('tagsInput', require('./tags-input.directive'));

module.exports = MODULE_NAME;