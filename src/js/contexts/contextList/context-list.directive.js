
'use strict';

function ContextListDirective() {

    return {
        restrict: 'E',
        templateUrl: 'contexts/contextList/context-list-view.html',
        scope: {},
        link: link
    }

    function link(scope, $elem, $attrs) {
        // set config
        var viewData = {};
        viewData.rest_url = '';
        viewData.rest_method = 'get';
        viewData.rest_params = '';
        viewData.currPage = 1;
        viewData.pageSize = 25;
        viewData.pageSets = [
            {'name':'10','value':10},
            {'name':'25','value':25},
            {'name':'50','value':50},
            {'name':'100','value':100},
            {'name':'500','value':500},
            {'name':'1000','value':1000}
        ];
        viewData.totalItems = 39;
        viewData.lastPage = Math.round(viewData.totalItems / viewData.pageSize);
        viewData.sortReverse = false;
        viewData.search = '';
        viewData.fieldLabels = ['Field 1'];
        viewData.hideFields = ['id'];
        viewData.sortType = 'id';

        // array of action objects label, class, url to for
        viewData.actions = [
            {'label':'View','class':'btn-primary','url':'/context/:id'}
            //{'label':'Edit','class':'btn-success','url':'/context/:id/edit'},
            //{'label':'Delete','class':'btn-danger','url':'/context/:id/delete'}
        ];
        scope.contexts = viewData;
    }

}

module.exports = ContextListDirective;