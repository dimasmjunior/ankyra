(function () {
  angular.module('ankyra').config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        templateUrl: 'templates/review/index.html',
        controller: 'ReviewController',
        controllerAs: 'review'
      })
      .when('/cards', {
        templateUrl: 'templates/cards/index.html',
        controller: 'CardsController',
        controllerAs: 'cards'
      })
      .when('/cards/edit/:id', {
        templateUrl: 'templates/cards/edit.html',
        controller: 'CardsEditController',
        controllerAs: 'card'
      })
      .otherwise({
        redirectTo: '/review'
      });
  });
})();
