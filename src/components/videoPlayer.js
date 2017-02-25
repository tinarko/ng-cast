angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      cVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('VL : ', $scope);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
