(function () {
  angular.module('ankyra')
    .controller('CardsCreateController', function($routeParams, $scope, Cards) {
      $scope.create = function (card) {
        $scope.errors = null;
        Cards.create(card)
          .catch(function (card) {
            $scope.errors = card.data.error;
          });
      };
    });
})();
