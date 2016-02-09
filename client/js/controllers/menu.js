(function () {
  'use strict';

  angular
    .module('ankyra')
    .controller('MenuController', MenuController);

  function MenuController($location) {
    var vm = this;

    vm.isActive = isActive;

    function isActive (viewLocation) {
      return viewLocation === $location.path();
    };

  }

})();
