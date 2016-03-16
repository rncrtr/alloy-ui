'use strict';

serverDetailDirective.$inject = [];
function serverDetailDirective() {

    return {
        restrict: "E",
        templateUrl: 'servers/serverDetail/server-detail-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
        $scope.isEdit = false;

        $scope.didClickView = didClickView;
        $scope.didClickEdit = didClickEdit;


        function didClickView() {
            $scope.isEdit = false;
        }

        function didClickEdit() {
            $scope.isEdit = true;
        }
    }

}

module.exports = serverDetailDirective;