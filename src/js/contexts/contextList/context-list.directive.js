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
        // set config
        var contextData = {};
        contextData.url = ''; 
        contextData.method = 'get'; 
        contextData.params = ''; 

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
            {'label':'View','class':'btn-primary','url':'/#/contexts/:id'}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        $scope.contexts = gridTableData;

        // call data on the service
        function getData(){
          dataService.getRest(contextData.url, contextData.method, contextData.params).then(function(result){
            // console.log(result);
            $scope.contexts.results = result;
          });
        }
        getData();
    }

}

module.exports = ContextListDirective;