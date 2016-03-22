(function() {
    'use strict';

    angular.module('reports')

        .controller('ScriptDetailController',ScriptDetailController);

    ScriptDetailController.$inject = ['dataService','$stateParams'];
    function ScriptDetailController() {

    }

}());