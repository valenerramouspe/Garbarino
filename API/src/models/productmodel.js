var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
	id: {type: String, unique: true},
	name: String,
  	price: Number,
  	list_price: Number,
  	brand: String,
  	category_id: Number,
  	image: String,
  	virtual: Boolean
});

module.exports = mongoose.model('Products', ProductSchema)