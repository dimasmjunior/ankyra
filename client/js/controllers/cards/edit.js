(function () {
  angular.module('ankyra')
    .controller('CardsEditController', function($http, $routeParams, $scope) {
      $http({method: 'GET', url: '/cards/' + $routeParams.id})
        .success(function(data) {
          $scope.card = data;
        });
      $scope.update = function () {
        $scope.errors = null;
        $http({method: 'PUT', url: '/cards/' + $routeParams.id, data: $scope.card})
          .catch(function (card) {
            $scope.errors = card.data.error;
          });
      };
    });
})();
