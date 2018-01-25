var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

mongoose = require('mongoose'),
  Products = require('./src/models/productmodel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection

mongoose.connect('mongodb://localhost/Products'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);