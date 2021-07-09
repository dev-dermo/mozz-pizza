const { Schema, model } = require('mongoose');

const productSchema = new Schema({
	name: {},
	description: {},
	price: {},
	category: {},
	image: {},
	active: {},
});

const Product = model('Product', productSchema);

module.exports = Product;