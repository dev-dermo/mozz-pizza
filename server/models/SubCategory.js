const { Schema, model } = require('mongoose');

const subCategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	}
}, { timestamps: true });

const SubCategory = model('SubCategory', subCategorySchema);

module.exports = SubCategory;