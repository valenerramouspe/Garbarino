var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: String
  price: Number,
  list_price: Number,
  brand: String,
  category_id: Number
});

module.exports = mongoose.model('Products', ProductSchema)