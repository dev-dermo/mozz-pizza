const { Schema, model } = require('mongoose');
const Category = require('./Category');
const SubCategory = require('./SubCategory');

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: Category,
		required: true,
	},
	subCategories: {
		type: [SubCategory], // TODO make this an array, with sub document
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
}, { timestamps: true });

const Product = model('Product', productSchema);

module.exports = Product;