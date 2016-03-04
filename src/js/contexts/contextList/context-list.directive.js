
'use strict';

function ContextListDirective() {

    return {
        restrict: 'E',
        templateUrl: 'contexts/contextList/context-list-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
        // set config
        var dt = {};
        dt.rest_url = '';
        dt.rest_method = '';
        dt.rest_params = '';
        dt.currPage = 1;
        dt.pageSize = 25;
        dt.pageSets = ['10','25','50','100','500','1000'];
        dt.totalItems = 100;
        dt.sortReverse = false;
        dt.search = '';
        dt.fieldlabels = ['Field 1','Field 2','Field 3'];
        dt.sortType = 'field1';
        $scope.contexts = dt;
    }

}

module.exports = ContextListDirective;