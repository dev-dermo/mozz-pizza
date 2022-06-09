const { Schema, model } = require('mongoose');
// const Category = require('./Category');
// const SubCategory = require('./SubCategory');

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	allergens: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	priority: {
		type: Number,
		default: 0,
	},
	subCategories: [{
		type: Schema.Types.ObjectId, // TODO make this an array, with sub document
		ref: 'SubCategory',
		required: true,
	}],
	imageUrl: {
		type: String,
		required: false,
	},
	isActive: {
		type: Boolean,
		default: true,
	},
}, { timestamps: true });

const Product = model('Product', productSchema);

module.exports = Product;