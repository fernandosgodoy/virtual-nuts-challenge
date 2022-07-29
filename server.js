var express = require('express');
var app = express();

app.use(express.static(__dirname + '/pages/')); 

var test = require('./assets/solution-sequential-items/solution-sequential-items');

app.get('/exercise-01-solution-sequential-items', function (req, res) {
  res.send(test.printSequentialResults());
});

var port = 8000; // you can use any port
app.listen(port);
