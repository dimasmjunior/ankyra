(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('CardsCreateController', CardsCreateController);

  function CardsCreateController($routeParams, $location, Cards) {
      var vm = this;

      vm.create = create;

      function create (card) {
        Cards
          .create(card)
          .success(function (data) {
            $location.path('/cards');
          })
          .catch(function (card) {
            vm.errors = card.data.error;
          });
      }
    }

})();
