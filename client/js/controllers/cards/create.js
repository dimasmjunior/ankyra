(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('CardsCreateController', CardsCreateController);

  function CardsCreateController($routeParams, Cards) {
      var vm = this;

      vm.create = create;

      function create (card) {
        Cards
          .create(card)
          .catch(function (card) {
            vm.errors = card.data.error;
          });
      }
    }

})();
