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

  function link($scope, $element, $attrs){
    // init nicer vars for local consumption and reuse
    var url = $scope.viewData.rest_url;
    var method = $scope.viewData.rest_method.toUpperCase();
    var params = $scope.viewData.rest_params;

    // init grid configs
    $scope.viewData.currPage = 1;
    $scope.viewData.pageSize = 25;
    $scope.viewData.pageSets = [
        {'name':'10','value':10},
        {'name':'25','value':25},
        {'name':'50','value':50},
        {'name':'100','value':100},
        {'name':'500','value':500},
        {'name':'1000','value':1000}
    ];
    $scope.viewData.lastPage = Math.round($scope.viewData.totalItems / $scope.viewData.pageSize);
    $scope.viewData.sortReverse = false;
    $scope.viewData.search = '';

    getData();
    $scope.actionButtonClick = function(id, url){
      //console.log(id, url);
      if(url.indexOf(':id')){
        url = url.replace(/\:id/ig,id);
      }
      // console.log(url);
      location.href = url;
    }

    // call data on the service
    function getData(){
      dataService.getRest(url, method, params).then(function(result){
        $scope.results = result;
        console.log(result[0]);
        var firstobj = result[0];
        $scope.resultKeys = Object.keys(firstobj);
        $scope.resultKeys = $scope.resultKeys.filter(function(el){
          if($scope.viewData.hideFields.indexOf(el) !== -1){
            return false;
          }
          return true;
        });
        $scope.viewData.sortType = $scope.resultKeys[0];
      });
    }

    // requery data when the pageSize is selected
    $scope.pageSizeChanged = function() {
      $scope.viewData.lastPage = Math.round($scope.viewData.totalItems / $scope.viewData.pageSize);
      return getData();
    };

    // requery data when the currPage changes
    $scope.$watch('viewData.currPage', (function() {
      getData();
    }));
  }
}

module.exports = gridTable;