var mongoose = require('mongoose'),
  Products = mongoose.model('Products');

exports.get_products = function(req, res) {
  Products.find({}, function(err, products) {
    if (err)
      res.send(err);
    res.json(products);
  });
};




exports.create_product = function(req, res) {
  var newProduct = new Products(req.body);
  newProduct.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};