/*jslint node: true*/

var express = require('express'),
  app = express(),
  favicon = require('serve-favicon'),
  path = require('path'),
  http = require('http'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var databaseURL = process.env.DATABASEURL || 'mongodb://localhost/checkyoself';
var sessionSecret = process.env.SESSION_SECRET || 'None of your business, mate';

mongoose.connect(databaseURL);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 8000);
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/texts', function(req, res) {
  res.render('texts');
});

app.get('/show', function(req, res) {
  res.render('show');
});

app.get('/faq', function(req, res) {
  res.render('faq');
});

// app.get("*", function(req, res) {
//   res.render("404");
// });

app.listen(app.get('port'), function() {
  console.log('App is listening on port 8000');
});
