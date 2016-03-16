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
        function initContext(){
            console.log('init context detail');
            var contextid = $stateParams.context_name;
            var url = '/context/'+contextid;
            var method = 'GET';
            var params = '';
            dataService.getRest(url, method, params).then(function(result){
                $scope.ctx = result;
            });
        }

        function saveContext(){
            console.log('save to server here');
            $scope.editContext = false;
        }

        initContext();
    }

}

module.exports = ContextDetailDirective;