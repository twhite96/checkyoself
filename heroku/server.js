var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/public')));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/texts.ejs', function(request, response) {
  response.render('pages/texts');
});

app.get('/faq.ejs', function(request, response) {
  response.render('pages/faq');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});





// let express = require("express");
// let app = express();
// let path = require("path");
// let port = process.env.PORT || 8080;
//
// app.use(express.static(__dirname + '/public'));
//
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(req, res) {
//   res.render('pages/index')
// });


// app.set("view engine", "ejs");
// app.engine('html', require('ejs').renderFile);
//
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));
//
// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.get('/', function (req, res) {
//   res.render('faq');
// });
//
// app.get('/', function (req, res) {
//   res.render('texts');
// });

// app.listen(port, function () {
//   console.log('Example app listening on 8080!');
// });
