var express = require('express');
var app = express();

var model = {
  cards: {
    front: '1+1',
    back: '2',
    tags: ['math.algebra'],
    seen: 0
  }
};

app.get('/cards', function(request, response){
  response.send(model.cards);
});

app.listen(8080);
