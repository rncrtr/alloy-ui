
'use strict';

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

module.exports = ContextDetailDirective;

