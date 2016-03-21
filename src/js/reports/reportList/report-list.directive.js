'use strict';
ReportListController.$inject = ['dataService','$stateParams'];
function ReportListController(dataService,$stateParams) {

    return {
        restrict: 'E',
        templateUrl: 'reports/reportList/report-list-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
        var context_name = $stateParams.context_name
        var report_name = $stateParams.report_name
        // set config
        var viewData = {};
        viewData.rest_url = '';
        viewData.rest_method = 'get';
        viewData.rest_params = 'name='+context_name;
        viewData.totalItems = 39;
        viewData.fieldLabels = ['Field 1'];
        viewData.hideFields = ['id'];
        viewData.sortType = 'field1';

        // array of action objects label, class, url to for
        viewData.actions = [
            {'label':'View','class':'btn-primary','url':'/#/contexts/'+context_name+'/reports/'+report_name}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        //console.log(viewData);
        $scope.reports = viewData;
    }

}

module.exports = ReportListController;