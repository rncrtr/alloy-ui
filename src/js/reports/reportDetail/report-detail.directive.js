'use strict';

ReportDetailDirective.$inject = ['dataService','$stateParams'];
function ReportDetailDirective(dataService,$stateParams) {
  return {
    restrict: 'E',
    templateUrl: 'reports/reportDetail/report-detail-view.html',
    scope: {
      reportDetail:'=detail'
    },
    link: link
  }

  function link($scope, $elem, $attrs) {
    function initScript(){
      var reportid = $stateParams.report_name;
      var url = '/report/'+reportid;
      var method = 'GET';
      var params = '';
      dataService.getRest(url, method, params).then(function(result){
          $scope.ctx = result;
      });
    }
    initScript();
  }

}

module.exports = ReportDetailDirective;