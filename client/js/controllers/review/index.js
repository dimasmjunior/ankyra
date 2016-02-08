(function () {
  angular.module('ankyra')
    .controller('ReviewController', function(Cards) {
      var vm = this;
      Cards.all()
        .success(function(data) {
          vm.card = data[0];
        });
    });
})();
