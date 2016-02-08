(function () {
  angular.module('ankyra')
    .controller('ReviewController', function($scope, Cards) {
      Cards.all()
        .success(function(data) {
          $scope.card = data[0];
        });
    });
})();
