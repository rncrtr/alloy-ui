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
        $scope.scripts = gridTableData;

  }

}

module.exports = ScriptListDirective;