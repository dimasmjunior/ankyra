(function () {
  angular.module('ankyra')
    .factory("Cards", function CardsFactory($http) {
      return {
        all: function () {
          return $http({method: 'GET', url: '/cards'});
        },
        one: function (id) {
          return $http({method: 'GET', url: '/cards/' + id})
        },
        update: function (id, card) {
          return $http({method: 'PUT', url: '/cards/' + id, data: card});
        }
      };
    });
})();
