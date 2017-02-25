angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    controller: function($scope) {
     
      console.log('video List', $scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
