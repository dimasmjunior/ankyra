(function () {
  angular.module('ankyra')
    .controller('CardsEditController', function($http, $routeParams) {
      var controller = this;
      $http({method: 'GET', url: '/cards/' + $routeParams.id})
        .success(function(data) {
          controller.card = data;
        });
      this.update = function (card) {
        controller.errors = null;
        $http({method: 'PUT', url: '/cards/' + $routeParams.id, data: card})
          .catch(function (card) {
            controller.errors = card.data.error;
          });
      };
    });
})();
