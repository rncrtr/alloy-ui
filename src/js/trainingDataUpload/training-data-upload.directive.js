'use strict';

function TrainingDataUploadDirective() {

    return {
        restrict: 'E',
        templateUrl: 'trainingData/training-data-view.html',
        scope: {},
        link: link
    }

    function link(scope, $elem, $attrs) {

    }

}

module.exports = TrainingDataUploadDirective;