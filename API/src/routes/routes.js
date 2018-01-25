module.exports = function(app) {
  var productList = require('../controllers/controller.js');

  // todoList Routes
  app.route('/products')
    .get(productList.get_products)
    .post(productList.create_product);
};