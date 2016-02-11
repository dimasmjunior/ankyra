(function () {
  'use strict';

  angular
    .module('ankyra')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/review', {
          templateUrl: 'templates/review/index.html',
          controller: 'ReviewController',
          controllerAs: 'vm'
        })
        .when('/cards', {
          templateUrl: 'templates/cards/index.html',
          controller: 'CardsAllController',
          controllerAs: 'vm'
        })
        .when('/cards/create/', {
          templateUrl: 'templates/cards/create.html',
          controller: 'CardsCreateController',
          controllerAs: 'vm'
        })
        .when('/cards/update/:id', {
          templateUrl: 'templates/cards/update.html',
          controller: 'CardsUpdateController',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/review'
        });
    });

})();
