'use strict';

ContextDetailDirective.$inject = [];
function ContextDetailDirective() {

    return {
        restrict: 'E',
        templateUrl: 'servers/serverList/server-list.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
        // set config
        var contextData = {};
        contextData.url = '/servers';
        contextData.method = 'get';
        contextData.params = '';

        // gridtable config
        var gridTableData = {};
        gridTableData.rest_url = '/servers';
        gridTableData.rest_method = 'get';
        gridTableData.rest_params = '';
        gridTableData.totalItems = 20;
        gridTableData.fieldLabels = ['Name', 'Timeout', 'Base URL'];
        gridTableData.hideFields = ['id'];
        gridTableData.sortType = 'id';

        // array of action objects label, class, url to for
        gridTableData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/servers/:id'}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        $scope.servers = gridTableData;
    }

}

module.exports = ContextDetailDirective;