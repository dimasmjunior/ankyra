(function () {
  angular.module('ankyra')
    .controller('CardsUpdateController', function($routeParams, $scope, Cards) {
      Cards.one($routeParams.id)
        .success(function(data) {
          $scope.card = data;
        });
      $scope.update = function (card) {
        $scope.errors = null;
        Cards.update($routeParams.id, card)
          .catch(function (card) {
            $scope.errors = card.data.error;
          });
      };
    });
})();
