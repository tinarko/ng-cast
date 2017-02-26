angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      onClick: '<',
      video: '='
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      //console.log('VLE', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
