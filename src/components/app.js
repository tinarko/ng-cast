angular.module('video-player')
.controller('AppCtrl', function(youTube) {
  this.searchService = youTube;
  //this.videos = window.exampleVideoData;
  //this.currentVideo = window.exampleVideoData[0];
  this.selectVideo = (video) => {
    //this binding fixed !!
    console.log('clicked! Video : ', video);
    this.currentVideo = video;
  };
  this.searchResults = (videos) => {
    this.videos = videos;
    this.currentVideo = videos[0];
  };
  youTube.search('javascript tutorial', this.searchResults);
})
.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'

  };
});
