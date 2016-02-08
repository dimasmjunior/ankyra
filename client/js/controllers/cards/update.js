(function () {
  angular.module('ankyra')
    .controller('CardsUpdateController', function($routeParams, Cards) {
      var vm = this;
      Cards.one($routeParams.id)
        .success(function(data) {
          vm.card = data;
        });
      vm.update = function (card) {
        vm.errors = null;
        Cards.update($routeParams.id, card)
          .catch(function (card) {
            vm.errors = card.data.error;
          });
      };
    });
})();
