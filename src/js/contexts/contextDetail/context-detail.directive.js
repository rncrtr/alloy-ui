
'use strict';
ContextDetailDirective.$inject = ['dataService'];
function ContextDetailDirective(dataService) {

    return {
        restrict: 'E',
        templateUrl: 'contexts/contextDetail/context-detail-view.html',
        scope: {
            ctx: "=ctx"
        },
        
        link: link
    }

    function link($scope, $elem, $attrs) {
        $scope.showReports = true;
    }

}

module.exports = ContextDetailDirective;

