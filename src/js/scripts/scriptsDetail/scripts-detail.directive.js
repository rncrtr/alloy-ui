'use strict';

ScriptsDetailDirective.$inject = ['dataService','$stateParams'];
function ScriptsDetailDirective(dataService,$stateParams) {
  return {
    restrict: 'E',
    templateUrl: 'scripts/scriptsDetail/scripts-detail-view.html',
    scope: {
      scriptDetail:'=detail'
    },
    link: link
  }

  function link($scope, $elem, $attrs) {
    function initScript(){
      var scriptid = $stateParams.script_name;
      var url = '/scripts/'+scriptid;
      var method = 'GET';
      var params = '';
      // $scope.ctx = dataService.getMockScripts();
      dataService.getRest(url, method, params).then(function(result){
          $scope.ctx = result;
      });
    }
    initScript();
  }

}

module.exports = ScriptsDetailDirective;