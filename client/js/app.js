(function () {
  var app = angular.module('ankyra', ['ngRoute']);
  app.controller('ReviewController', function() {
    this.card = card;
  });
  var card = {
    front: '1 + 1',
    back: '2'
  };
})();
