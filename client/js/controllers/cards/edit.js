(function () {
  angular.module('ankyra')
    .controller('CardsEditController', function($http, $routeParams) {
      var controller = this;
      $http({method: 'GET', url: '/cards/' + $routeParams.id})
        .success(function(data) {
          controller.card = data;
        });
    });
})();
