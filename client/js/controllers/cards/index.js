(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('CardsAllController', CardsAllController);

  function CardsAllController(Cards) {
      var vm = this;

      activate();

      function activate() {
        Cards
          .all()
          .success(function(data) {
            vm.cards = data;
          });
      }
  }

})();
