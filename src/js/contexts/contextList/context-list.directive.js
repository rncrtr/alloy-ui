'use strict';

ContextListDirective.$inject = ['dataService'];
function ContextListDirective(dataService) {

    return {
        restrict: 'E',
        templateUrl: 'contexts/contextList/context-list-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
        // gridtable config
        var gridTableData = {};
        gridTableData.rest_url = '/contexts';
        gridTableData.rest_method = 'get';
        gridTableData.rest_params = '';
        gridTableData.totalItems = 20;
        gridTableData.fieldLabels = ['Name', 'Transform Svc', 'Processing Svc',
            'Report Svc', 'Endpoint Key',
            'ID Key', 'Polynomial Map', 'Threshold',
            'Expiration', 'Field List'];
        gridTableData.hideFields = ['id'];
        gridTableData.sortType = 'id';

        // array of action objects label, class, url to for
        gridTableData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/contexts/:id'},
            //{'label':'Cache','class':'btn-success','url':'/#/cache/:id'}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        $scope.contexts = gridTableData;
    }

}

module.exports = ContextListDirective;