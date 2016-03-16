'use strict';
ReportListController.$inject = ['dataService'];
function ReportListController(dataService) {

    return {
        restrict: 'E',
        templateUrl: 'reports/reportList/report-list-view.html',
        scope: {
            context: '=context'
        },
        link: link
    }

    function link($scope, $elem, $attrs) {
        // set config
        var viewData = {};
        viewData.rest_url = '';
        viewData.rest_method = 'get';
        viewData.rest_params = '';
        viewData.totalItems = 39;
        viewData.fieldLabels = ['Field 1'];
        viewData.hideFields = ['id'];
        viewData.sortType = 'id';

        // array of action objects label, class, url to for
        viewData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/contexts/'+$scope.context.id+'/reports/:id'}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        //console.log(viewData);
        $scope.reports = viewData;
    }

}

module.exports = ReportListController;