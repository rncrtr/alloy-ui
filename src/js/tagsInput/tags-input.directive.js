'use strict';

tagsInput.$inject = [];
function tagsInput() {
  var directive = {
    restrict: 'E',
    templateUrl: 'tagsInput/tags-input-view.html',
    scope: {
      typedTags:'='
    },
    link: link
  };

  return directive;

  function link($scope, $elem, $attrs) {
    $scope.typedTags = [];
    $scope.keyPress = function(e){
      if(e.charCode==13){
        saveTag(e);
      }
    }

    function saveTag(e){
      // console.log(e);
      var typedTag = e.currentTarget.innerHTML;
      typedTag = typedTag.replace(/&nbsp;/g,' ');
      typedTag = typedTag.replace(/&amp;/g,'&');
      if($scope.typedTags.indexOf(typedTag)==-1){
        $scope.typedTags.push(typedTag);
      }
      e.currentTarget.innerHTML = '';
    } 

    $scope.removeTag = function(i){
      $scope.typedTags.splice(i,1);
    } 

  }
}

module.exports = tagsInput;