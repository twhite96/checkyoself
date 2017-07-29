var express = require('express');
var app = express();
var path = require('path');
const VIEWS = path.join(__dirname, 'views');
var port = process.env.PORT || 8080;

app.set('view engine', 'html');
app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root : VIEWS });
});

app.get("/faq.html", function (req, res) {
  res.sendFile('faq.html', { root : VIEWS });
});

app.get("/texts.html", function (req, res) {
  res.sendFile('texts.html', { root : VIEWS });
});

app.listen(port, function () {
  console.log('Example app listening on 8080!');
});
