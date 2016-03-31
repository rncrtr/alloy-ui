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
        $scope.formData = [];
        
        function initContext(){
            var contextid = $stateParams.context_name;
            var url = '/context/'+contextid;
            var method = 'GET';
            var params = '';
            $scope.ctx = dataService.getMockCtx();
            /*dataService.getRest(url, method, params).then(function(result){
                $scope.ctx = result;
            });*/
        }

        $scope.saveContext = function(){
            var contextid = $stateParams.context_name;
            var url = '/context/'+contextid;
            var method = 'PUT';
            var params = $scope.formData;
            // console.log(serializeObj($scope.formData));
            // dataService.getRest(url, method, params).then(function(result){
            //     $scope.ctx = result;
            // });
            $scope.editContext = false;
            console.log($scope.formData);
        }

        function serializeObj(obj) {
            var result = [];
            for (var property in obj){
                if(typeof obj==Array){
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                }else{
                    result.push(encodeURIComponent(property) + "=[" + encodeURIComponent(obj[property]).replace(/%2C/g,',')+"]");
                }
            }
            return result.join("&");
        }


        initContext();
    }

}

module.exports = ContextDetailDirective;