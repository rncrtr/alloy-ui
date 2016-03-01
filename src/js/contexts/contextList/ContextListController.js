(function() {
    'use strict';

    angular.module('reports')
      .controller('ContextListController',ContextListController);

    ContextListController.$inject = [];
    function ContextListController() {
      function contextList(){
        return contextService.listContexts()
        .then(function(results){
          var fieldlabels = ['Field 1','Field 2','Field 3'];
          results.dt = {};
          results.dt.fieldLabels = fieldlabels;
          results.dt.sortType = 'field1';
          $scope.contexts = results;
        });

      }
      contextList();
    }

}());