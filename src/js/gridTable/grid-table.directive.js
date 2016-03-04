'use strict';
gridTable.$inject = ['dataService'];
function gridTable(dataService) {
  var directive = {
    scope:{
      viewData: '=view'
    },
    link: link,
    templateUrl: 'gridTable/grid-table.html',
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    console.log('grid table I choose you!');
    var url = scope.viewData.rest_url;
    var method = scope.viewData.rest_method.toUpperCase();
    var params = scope.viewData.rest_params;
    dataService.getRest(url, method, params).then(function(result){
      $scope.results = result;
    });
  }
}

module.exports = gridTable;