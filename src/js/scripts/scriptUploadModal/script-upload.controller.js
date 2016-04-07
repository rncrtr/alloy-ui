'use strict';

ScriptUploadModalCtrl.$inject = ['$scope', '$timeout', '$uibModalInstance', 'Upload'];

function ScriptUploadModalCtrl($scope, $timeout, $uibModalInstance, Upload) {

    $scope.fileName = null;
    resetValidations();

    $scope.triggerSelectFile = triggerSelectFile;
    $scope.onFileChange = onFileChange;
    $scope.isValid = isValid;
    $scope.submit = submit;

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

        uploadfile(file);
    }

    function uploadfile(file) {

        Upload.upload({
            url: '/api/script',
            method: "POST",
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
/*


        $http({
            method: 'POST',
            url: '/api/script',
            timeout: 25000,
            headers: {
                "Content-Type": "application/zip"
            },
            data: fileData
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

}

module.exports = ScriptUploadModalCtrl;