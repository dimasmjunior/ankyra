(function () {
  angular.module('ankyra')
    .controller('CardsController', function($http) {
      var controller = this;
      $http({method: 'GET', url: '/cards'})
        .success(function(data) {
          controller.cards = data;
        });
    });
})();
