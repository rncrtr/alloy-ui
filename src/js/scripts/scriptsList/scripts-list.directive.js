'use strict';

ScriptsListDirective.$inject = ['dataService','$http'];
function ScriptsListDirective(dataService,$http) {
  return {
    restrict: 'E',
    templateUrl: 'scripts/scriptsList/scripts-list-view.html',
    scope: {},
    link: link
  }

  function link($scope, $elem, $attrs) {

        // gridtable config
        var gridTableData = {};
        gridTableData.rest_url = '/scripts';
        gridTableData.rest_method = 'get';
        gridTableData.rest_params = '';
        gridTableData.totalItems = 10;
        gridTableData.fieldLabels = ['Name','Language','Status'];
        gridTableData.hideFields = ['id'];
        gridTableData.sortType = 'id';

        // array of action objects label, class, url to for
        gridTableData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/scripts/:id'}
        ];
        $scope.scriptList = true;
        $scope.scripts = gridTableData;

        document.getElementById('scriptinput').addEventListener('change', function(){
            var file = this.files[0];
            $http({
                method: 'POST',
                url: '/api/script',
                timeout: 25000,
                data: file
            }).success(function(result){
              $scope.uploadscriptresult = 'valid';
            }).error(function(result){
              $scope.uploadscriptresult = 'invalid';
            });
        }, false);

  }

}

module.exports = ScriptsListDirective;