angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      click: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      //console.log('VL : ', $scope);
     
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
