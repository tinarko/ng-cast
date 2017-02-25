angular.module('video-player', [])
.controller('ctrl', function($scope) {
  $scope.exampleVideoData = window.exampleVideoData;
  $scope.onClick = function () {};

})
.directive('app', function() {
  return {

    controller: function($scope) {
      $scope.exampleVideoData = window.exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'

  };
});
