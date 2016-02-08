(function () {
  'use strict';

  angular
    .module('ankyra')
    .factory("Cards", function CardsFactory($http) {
      return {
        all: function () {
          return $http({method: 'GET', url: '/cards'});
        },
        one: function (id) {
          return $http({method: 'GET', url: '/cards/' + id})
        },
        create: function (card) {
          return $http({method: 'POST', url: '/cards/', data: card})
        },
        update: function (id, card) {
          return $http({method: 'PUT', url: '/cards/' + id, data: card});
        }
      };
    });

})();
