'use strict';

TrainingDataUploadDirective.$inject = ['Upload','$timeout'];
function TrainingDataUploadDirective(Upload,$timeout) {

    return {
        restrict: 'E',
        templateUrl: 'trainingDataUpload/training-data-upload-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
      document.getElementById('fileinput').addEventListener('change', function(){
        var file = this.files[0];
          Upload.upload({
              method: 'POST',
              url: '/api/upload',
              timeout: 25000,
              data: {file: file}
        }).success(function(result){
          $scope.uploadresult = 'valid';
        }).error(function(result){
          $scope.uploadresult = 'invalid';
        });
      }, false);
    }
}

module.exports = TrainingDataUploadDirective;