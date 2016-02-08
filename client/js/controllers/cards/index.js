(function () {
  angular.module('ankyra')
    .controller('CardsController', function($http, $scope) {
      $http({method: 'GET', url: '/cards'})
        .success(function(data) {
          $scope.cards = data;
        });
    });
})();
