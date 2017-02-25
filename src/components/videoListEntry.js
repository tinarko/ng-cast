angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      videoTitle: '@',
      videoDesc: '@',
      videoThumbnail: '@',
      click: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
     
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
