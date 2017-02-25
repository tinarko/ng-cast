angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      videoTitle: '@',
      videoDesc: '@',
      videoThumbnail: '@'
    },
    controller: function($scope) {
     
      console.log('video List Entry', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
