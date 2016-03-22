'use strict';

ScriptListDirective.$inject = ['dataService'];
function ScriptListDirective(dataService) {
  return {
    restrict: 'E',
    templateUrl: 'scripts/scriptList/script-list-view.html',
    scope: {},
    link: link
  }

  function link($scope, $elem, $attrs) {
    // set config
        var scriptsData = {};
        scriptsData.url = ''; 
        scriptsData.method = 'get'; 
        scriptsData.params = ''; 

        // gridtable config
        var gridTableData = {};
        gridTableData.rest_url = '';
        gridTableData.rest_method = 'get';
        gridTableData.rest_params = '';
        gridTableData.totalItems = 0;
        gridTableData.fieldLabels = ['Field 1'];
        gridTableData.hideFields = ['id'];
        gridTableData.sortType = 'id';

        // array of action objects label, class, url to for
        gridTableData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/scripts/:id'}
        ];
        $scope.scripts = gridTableData;

        // call data on the service
        function getData(){
          dataService.getRest(scriptsData.url, scriptsData.method, scriptsData.params).then(function(result){
            console.log(result);
            $scope.scripts.results = result;
          });
        }
        getData();
  }

}

module.exports = ScriptListDirective;