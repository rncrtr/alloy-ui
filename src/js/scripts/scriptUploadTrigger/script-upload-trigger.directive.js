'use strict';

ScriptUploadTriggerDirective.$inject = ['$uibModal'];

function ScriptUploadTriggerDirective($uibModal) {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "scripts/scriptUploadTrigger/script-upload-trigger-template.html",
        link: link
    }

    function link($scope, $elem, $attrs) {
        
        $scope.openUploadModal = openUploadModal;

        function openUploadModal() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'scripts/scriptUploadModal/script-upload-view.html',
                controller: 'scriptUploadModalCtrl',
                size: "lg"
            });

        }
    }
}

module.exports = ScriptUploadTriggerDirective;