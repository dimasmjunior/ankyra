(function () {
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
