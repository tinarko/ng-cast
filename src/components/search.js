angular.module('video-player')
.controller('SearchCtrl', function() {
  this.clickHandler = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})
.directive('search', function() {
  return {
    scope: {
      service: '<',
      result: '<'
    },
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
