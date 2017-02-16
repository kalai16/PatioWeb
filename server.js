var express = require('express');
var app = express();
var mongodb = require('mongodb');

// work with "MongoClient" interface to connect to mongodb server
var MongoClient = mongodb.MongoClient;

// connection url, where our mongodb server is running
// var url = 'mongodb://Zirai Studio:ZiraI1337@ds153669.mlab.com:53669/patio';
// FUCK THIS SHIT IM LEAVING THIS OUT

// set the port of our application
// process.env.PORT lets the port be set by Heroku

var port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

