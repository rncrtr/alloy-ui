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

  function link(scope, element, attrs){
    // init nicer vars for local consumption and reuse
    var url = scope.viewData.rest_url;
    var method = scope.viewData.rest_method.toUpperCase();
    var params = scope.viewData.rest_params;

    getData();
    scope.tellMeAboutIt = function(id, url){
      console.log(id, url);
      if(url.indexOf(':id')){
        url = url.replace(/\:id/ig,id);
      }
      console.log(url);
      location.href = url;
    }

    // call data on the service
    function getData(){
      dataService.getRest(url, method, params).then(function(result){
        console.log(result);
        scope.results = result;
      });
    }

    // requery data when the pageSize is selected
    scope.pageSizeChanged = function() {
      scope.viewData.lastPage = Math.round(scope.viewData.totalItems / scope.viewData.pageSize);
      return getData();
    };

    // requery data when the currPage changes
    scope.$watch('viewData.currPage', (function() {
      getData();
    }));
  }
}

module.exports = gridTable;