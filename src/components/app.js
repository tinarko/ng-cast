angular.module('video-player', [])
.controller('ctrl', function($scope) {
  $scope.exampleVideoData = window.exampleVideoData;
  $scope.currentVideo = window.exampleVideoData[0];
  $scope.onClick = function (video) {
    console.log('clicked! Video : ', video);
    $scope.currentVideo = video;
    console.log($scope);
  };

})
.directive('app', function() {
  return {

    controller: function($scope) {
      $scope.exampleVideoData = window.exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'

  };
});
