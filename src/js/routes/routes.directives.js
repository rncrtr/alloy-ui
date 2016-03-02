'use strict';

activeLinkDirective.$inject = ['$location'];
function activeLinkDirective($location) {
    return {
        restrict: "A",
        scope: {
            routeName: "@activeLink"
        },
        link: link
    }

    function link($scope, $elem, $attrs) {
        $scope.$watch(function() {
            return $location.path();
        },
        function pathChanged(newVal) {
            console.log(newVal);
            console.log($scope.routeName);
            if (newVal.indexOf($scope.routeName) >= 0) {
                $elem.addClass('active');
            } else {
                $elem.removeClass('active');
            }
        })
    }
}

module.exports = activeLinkDirective;