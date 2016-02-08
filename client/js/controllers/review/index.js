(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('ReviewController', ReviewController);

  function ReviewController(Cards) {
    var vm = this;

    activate();

    function activate() {
      Cards
        .all()
        .success(function(data) {
          vm.card = data[0];
        });
    }
  }

})();
