(function () {
  angular.module('ankyra')
    .controller('ReviewController', function($http, $scope) {
      $http({method: 'GET', url: '/cards'})
        .success(function(data) {
          $scope.card = data[0];
        });
    });
})();
