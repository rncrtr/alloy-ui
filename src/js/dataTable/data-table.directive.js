(function() {
    'use strict';

    angular.module('directives')
      .directive('dataTable',dataTable);
    
    function dataTable() {
      var directive = {
        link: link,
        controllerAs: 'ctrl',
        templateUrl: 'data-table.html',
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        ctrl.dt.currPage = 1;
        ctrl.dt.pageSize: 25;
        ctrl.dt.pageSets: ['10','25','50','100','500','1000'];
        ctrl.dt.totalItems: 100;
        ctrl.dt.sortReverse: false;
        ctrl.dt.search: '';
      }
    }

}());