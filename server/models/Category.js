const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	priority: {
		type: Number,
		default: 0,
	}
}, { timestamps: true });

const Category = model('Category', categorySchema);

module.exports = Category;