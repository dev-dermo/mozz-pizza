const { Schema, model } = require('mongoose');

const subCategorySchema = new Schema({}, { timestamps: true });

const SubCategory = model('SubCategory', subCategorySchema);

module.exports = SubCategory;