'use strict';

// Active Link Directive
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
            if (newVal.indexOf($scope.routeName) >= 0) {
                $elem.addClass('active');
            } else {
                $elem.removeClass('active');
            }
        })
    }
}

module.exports = activeLinkDirective;

// // Main Tab Directive
// tabDirective.$inject = ['$rootScope'];
// function tabDirective($rootScope) {
//     return {
//         restrict: "A",
//         scope: {
//             set: '@tab-set',
//             tab: '@tab-name'
//         },
//         link: link
//     }

//     function link($scope, $elem, $attrs) {
//         // $elem.addClass('active');
//         $elem.on('click',function(){
//             element.html('You clicked me!');
//         });
//     }
// }
// module.exports = tabDirective;