'use strict';

TrainingDataUploadDirective.$inject = ['Upload','$timeout'];
function TrainingDataUploadDirective(Upload, $timeout) {

    return {
        restrict: 'E',
        templateUrl: 'trainingDataUpload/training-data-upload-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
      $scope.uploadFiles = function(files, errFiles) {
        $scope.f = files;
        $scope.errFile = errFiles && errFiles[0];
        console.log(files);
        if (files) {
          files.upload = Upload.upload({
            url: '/api/uploads',
            method: 'POST',
            file: files
          });
          
          files.upload.then(function (response) {
              $timeout(function () {
                files.result = response.data;
              });
          }, function (response) {
              if (response.status > 0){
                $scope.errorMsg = response.status + ': ' + response.data;
              }
          }, function (evt) {
              files.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });
        }   
      }
    }

}

module.exports = TrainingDataUploadDirective;