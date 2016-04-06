'use strict';

var MODULE_NAME = 'scripts';

var angular = require('angular');

var DEPS = [];

var scripts = angular.module(MODULE_NAME, DEPS);
scripts.directive('scriptsList', require('./scriptsList/scripts-list.directive'));
scripts.directive('scriptsDetail', require('./scriptsDetail/scripts-detail.directive'));
scripts.directive('scriptsApproval', require('./scriptsApproval/scripts-approval.directive'));
scripts.directive('scriptUploadTrigger', require('./scriptUploadTrigger/script-upload-trigger.directive'));
scripts.controller('scriptUploadModalCtrl', require('./scriptUploadModal/script-upload.controller'));

module.exports = MODULE_NAME;