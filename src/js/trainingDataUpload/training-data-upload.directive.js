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
      $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
          file.upload = Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {file: file}
          });

          file.upload.then(function (response) {
              $timeout(function () {
                file.result = response.data;
              });
          }, function (response) {
              if (response.status > 0){
                $scope.errorMsg = response.status + ': ' + response.data;
              }
          }, function (evt) {
              file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });
        }   
      }
    }

}

module.exports = TrainingDataUploadDirective;