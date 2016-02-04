(function () {
  var app = angular.module('ankyra', ['ngRoute']);
  app.controller('ReviewController', function() {
    this.card = card;
  });
  var card = {
    front: '1 + 1',
    back: '2'
  };
  angular.module('ankyra').config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        templateUrl: 'templates/review/index.html'
      })
      .when('/cards', {
        templateUrl: 'templates/cards/index.html'
      })
      .otherwise({
        redirectTo: '/review'
      });
  });
})();
