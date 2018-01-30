const crossOrigin = require('../config/crossorigin')

module.exports = function(app) {
  var productList = require('../controllers/controller.js');
  const crossOrigin = require('../config/crossorigin');
  // todoList Routes
  app.route('/products')
    .get(productList.get_products)
    .post(productList.create_product);
};

