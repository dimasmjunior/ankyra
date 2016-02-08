(function () {
  angular.module('ankyra')
    .controller('CardsController', function($scope, Cards) {
      Cards.all()
        .success(function(data) {
          $scope.cards = data;
        });
    });
})();
