angular.module('video-player', [])
.controller('Ctrl', function($scope) {
  $scope.exampleVideoData = window.exampleVideoData;
})
.directive('app', function() {
  return {

    controller: function($scope) {
      $scope.exampleVideoData = window.exampleVideoData;
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'

  };
});
