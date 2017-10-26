/* jshint ignore:start */


const express = require('express'),
  app = express(),
  favicon = require('serve-favicon'),
  path = require('path'),
  http = require('http'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  writeGood = require('write-good'),
  spell = require('spell-checker'),
  multiViews = require('multi-views'),
  flash       = require("connect-flash"),
  passport    = require("passport"),
  LocalStrategy = require('passport-local'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  User  = require('./models/user'),
  Text = require('./models/text');




// TODO: Put app.js logic in this file according to routes.

const databaseURL = process.env.DATABASEURL || 'mongodb://localhost/checkyoself';
const sessionSecret = process.env.SESSION_SECRET || 'None of your business, mate';

mongoose.connect(databaseURL);
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 8000);
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(cookieParser('secret'));
app.use(flash());
app.locals.moment = require('moment');


// passport config
app.use(require("express-session")({
  secret: "Cats are the cutest things on earth",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use(express.static(__dirname + 'public/src'));

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

app.get('*', function(req, res) {
  res.render('404');
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port 8000');
});
/* jshint ignore:end */
