var express = require('express');
var app = express();

app.use(express.static(__dirname + '/pages/')); 

var test1 = require('./assets/solution-sequential-items/solution-sequential-items');
var test2 = require('./assets/kwowing-countries/knowing-countries');

app.get('/exercise-01-solution-sequential-items', function (req, res) {
  res.send(test1.printSequentialResults());
});

app.get('/exercise-02-knowing-countries', function (req, res) {
  res.send(test2.printCountriesData());
});

var port = 8000; // you can use any port
app.listen(port);
