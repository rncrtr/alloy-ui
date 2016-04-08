'use strict';

ScriptUploadModalCtrl.$inject = ['$scope', '$timeout', '$uibModalInstance', '$http', 'Upload'];

function ScriptUploadModalCtrl($scope, $timeout, $uibModalInstance, $http, Upload) {

    $scope.fileName = null;
    $scope.uid = null;
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

        uploadFile(file);
    }

    function uploadFile(file) {

        Upload.upload({
            url: '/api/script',
            method: "POST",
            data: {file: file}
        }).then(function (resp) {
            handleFileUploaded(resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            //Update function
        });


        function handleFileUploaded(resp) {

            $scope.uid = resp.uid;

            $timeout(function() {
                $scope.isScriptValid = resp.validations.javascript;
                $scope.scriptValidated = true;

                $timeout(function() {
                    $scope.isTestValid = resp.validations.json;
                    $scope.testValidated = true;

                    $timeout(function() {
                        $scope.testRan = true;
                        $scope.testPassed = true;
                    }, 500);

                }, 500);

            }, 500);
        }
    }

    function resetValidations() {
        $scope.scriptValidated = false;
        $scope.isScriptValid = false;
        $scope.testValidated = false;
        $scope.isTestValid = false;
        $scope.testRan = false;
        $scope.testPassed = false;
        $scope.uid = null;
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
        $http({
            method: "POST",
            url: "/api/script",
            data: {uid: $scope.uid}
        }).then(function(response) {
            $uibModalInstance.close(response);
        });
    }


    function closeUploadModal(){
        $uibModalInstance.close();
    }

}

module.exports = ScriptUploadModalCtrl;