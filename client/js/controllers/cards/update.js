(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('CardsUpdateController', CardsUpdateController);

  function CardsUpdateController($routeParams, $location, Cards) {
    var vm = this;

    vm.update = update;
    vm.delete = del;

    activate();

    function activate() {
      Cards
        .one($routeParams.id)
        .success(function(data) {
          vm.card = data;
        });
    }

    function update(card) {
      Cards
        .update($routeParams.id, card)
        .success(function (data) {
          $location.path('/cards');
        })
        .catch(function (card) {
          vm.errors = card.data.error;
        });
    }

    function del() {
      Cards
        .delete($routeParams.id)
        .success(function (data) {
          $location.path('/cards');
        })
        .catch(function (card) {
          vm.errors = card.data.error;
        });
    }
  }

})();
