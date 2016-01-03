var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var model = {
  cards: {
    front: '1+1',
    back: '2',
    tags: ['math.algebra'],
    seen: 0
  }
};

app.get('/cards', function(request, response){
  response.send('GET ALL');
  console.log('GET ALL');
});

app.get('/cards/:id', function (request, response) {
  response.send('GET ' + request.params.id);
  console.log('GET ' + request.params.id);
});

app.post('/cards', function (request, response) {
  response.send('POST');
  console.log('POST');
});

app.delete('/cards/:id', function (request, response) {
  response.send('DELETE ' + request.params.id);
  console.log('DELETE ' + request.params.id);
});

app.listen(PORT, function () {
  console.log('Ankyra listening on port ' + PORT + '.');
});
