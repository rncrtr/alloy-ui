(function() {
    'use strict';

    angular.module('contexts')
        .directive('contextDetail', ContextDetailDirective);

    function ContextDetailDirective() {

        return {
            restrict: 'E',
            template: 'context-detail-view.html',
            scope: {
                ctx: "=ctx"
            },
            link: link
        }

        function link($scope, $elem, $attrs) {

        }


    }

}());