'use strict';
ContextDetailDirective.$inject = ['dataService','$stateParams'];
function ContextDetailDirective(dataService,$stateParams) {

    return {
        restrict: 'E',
        templateUrl: 'contexts/contextDetail/context-detail-view.html',
        scope: {
            editContext:'=edit'
        },
        link: link
    }

    function link($scope, $elem, $attrs) {
        var contextid = $stateParams.id;
        var url = '/context/'+contextid;
        var method = 'GET';
        var params = '';
        dataService.getRest(url, method, params).then(function(result){
            $scope.ctx = result;
        });
    }

}

module.exports = ContextDetailDirective;