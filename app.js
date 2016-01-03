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

app.get('/cards/:id', function (request, response) {
  console.log('GET ' + request.params.id);
});

app.listen(process.env.PORT || 8080);
