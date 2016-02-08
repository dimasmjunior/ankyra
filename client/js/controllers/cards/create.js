(function () {
  angular.module('ankyra')
    .controller('CardsCreateController', function($routeParams, Cards) {
      var vm = this;
      vm.create = function (card) {
        vm.errors = null;
        Cards.create(card)
          .catch(function (card) {
            vm.errors = card.data.error;
          });
      };
    });
})();
