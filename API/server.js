var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

mongoose = require('mongoose'),
  Products = require('./src/models/productmodel'), //created model loading here
  bodyParser = require('body-parser');
  const productData = require('./data.json');
  const crossOrigin = require('./src/config/crossorigin')
  app.use(crossOrigin)


mongoose.connect('mongodb://localhost/Products'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/routes'); //importing route
routes(app);

for( var i = 0; i < productData.length; i++ ) {
		new Products( productData[ i ] ).save();
}

app.listen(port);