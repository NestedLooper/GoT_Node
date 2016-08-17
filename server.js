var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./utils/config');
var router = express.Router();
var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
mongoose.connect(config.database);

// Static file access from /public
app.use(express.static(__dirname + '/public'));

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cookie reading
app.use(cookieParser());

//api routes
var characterRouter = express.Router();
require('./app/routes/characterRoutes.js')(characterRouter, app);
app.use('/', characterRouter);

// START THE SERVER
app.listen(port);
console.log('App running on port ' + port);
