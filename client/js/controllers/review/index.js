(function () {
  angular.module('ankyra')
    .controller('ReviewController', function($http) {
      var controller = this;
      $http({method: 'GET', url: '/cards'})
        .success(function(data) {
          controller.card = data[0];
        });
    });
})();
