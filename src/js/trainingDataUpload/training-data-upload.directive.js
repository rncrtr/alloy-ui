'use strict';

TrainingDataUploadDirective.$inject = ['$http','$timeout'];
function TrainingDataUploadDirective($http,$timeout) {

    return {
        restrict: 'E',
        templateUrl: 'trainingDataUpload/training-data-upload-view.html',
        scope: {},
        link: link
    }

    function link($scope, $elem, $attrs) {
      document.getElementById('fileinput').addEventListener('change', function(){
        var file = this.files[0];
        $http({
          method: 'POST',
          url: '/api/upload',
          timeout: 25000,
          data: file
        }).success(function(result){
          $scope.uploadresult = 'valid';
        }).error(function(result){
          $scope.uploadresult = 'invalid';
        });
      }, false);
    }
}

module.exports = TrainingDataUploadDirective;