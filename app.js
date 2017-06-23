var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var database = require('./config/database');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || 1800;

// Connect to database
mongoose.connect(database.localUrl);

// Define Routes
var app_route = require('./config/route.js');
var apiRoute = require('./api/routes/users');
// var users = require('./routes/users');
// var viewRoute = require('./routes/view');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', app_route);
app.use('/api',apiRoute);

app.listen(port);
console.log("App listening on port " + port);