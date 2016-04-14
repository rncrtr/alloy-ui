'use strict';
ReportListDirective.$inject = ['$stateParams'];
function ReportListDirective($stateParams) {

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
        viewData.rest_url = '/contexts/0/reports';
        viewData.rest_method = 'get';
        viewData.rest_params = 'name='+context_name;
        viewData.totalItems = 39;

        viewData.fieldLabels = ['Report Name'];
        viewData.hideFields = ['id'];
        viewData.sortType = 'name';

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

module.exports = ReportListDirective;