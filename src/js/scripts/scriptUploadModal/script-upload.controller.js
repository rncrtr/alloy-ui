'use strict';

ScriptUploadModalCtrl.$inject = ['$scope', '$timeout', '$uibModalInstance'];

function ScriptUploadModalCtrl($scope, $timeout, $uibModalInstance) {

    $scope.fileName = null;
    resetValidations();

    $scope.triggerSelectFile = triggerSelectFile;
    $scope.onFileChange = onFileChange;
    $scope.isValid = isValid;
    $scope.submit = submit;
    $scope.closeUploadModal = closeUploadModal;

    function triggerSelectFile() {
        $scope.$broadcast('triggerFileUpload');
    }

    function onFileChange(file) {

        resetValidations();
        $scope.fileName = file.name;
        $scope.$digest();

        $timeout(function() {
            $scope.isScriptValid = true;
            $scope.scriptValidated = true;

            $timeout(function() {
                $scope.isTestValid = true;
                $scope.testValidated = true;

                $timeout(function() {
                    $scope.testRan = true;
                    $scope.testPassed = true;
                }, 500);

            }, 500);

        }, 500);



        /*var file = this.files[0];
         $http({
         method: 'POST',
         url: '/api/script',
         timeout: 25000,
         data: file
         }).success(function(result){
         $scope.uploadscriptresult = 'valid';
         }).error(function(result){
         $scope.uploadscriptresult = 'invalid';
         });*/
    }

    function resetValidations() {
        $scope.scriptValidated = false;
        $scope.isScriptValid = false;
        $scope.testValidated = false;
        $scope.isTestValid = false;
        $scope.testRan = false;
        $scope.testPassed = false;
    }

    function isValid() {
        if ($scope.scriptValidated && $scope.testValidated) {
            if ($scope.isScriptValid && $scope.isTestValid) {
                return $scope.testRan && $scope.testPassed;
            }
        }
        return false;
    }

    function submit() {
        $uibModalInstance.close();
    }


    function closeUploadModal(){
        $uibModalInstance.close();
    }

}

module.exports = ScriptUploadModalCtrl;