'use strict';

WatchFileDirective.$inject = [];

function WatchFileDirective() {
    return {
        restrict: "A",
        scope: {
            callback: "&watchFile"
        },
        link: link
    }

    function link($scope, $elem, $attrs) {

        var callbackHandler = $scope.callback();

        $scope.$on('triggerFileUpload', function() {
            $elem.click();
        });

        $elem.bind('change', function(e) {

            var file = e.target.files[0];
            callbackHandler(file);

        });
    }
}

module.exports = WatchFileDirective;