(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('CardsDeleteController', CardsDeleteController);

  function CardsDeleteController($routeParams, $location, Cards) {
    var vm = this;

    vm.delete = del;

    activate();

    function activate() {
      Cards
        .one($routeParams.id)
        .success(function(data) {
          vm.card = data;
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
