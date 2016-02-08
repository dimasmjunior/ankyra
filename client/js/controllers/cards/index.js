(function () {
  angular.module('ankyra')
    .controller('CardsController', function(Cards) {
      var vm = this;
      Cards.all()
        .success(function(data) {
          vm.cards = data;
        });
    });
})();
