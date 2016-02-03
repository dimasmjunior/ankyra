(function () {
  var app = angular.module('ankyra', []);
  app.controller('ReviewController', function() {
    this.card = card;
  });
  var card = {
    front: '1 + 1',
    back: '2'
  };
})();
