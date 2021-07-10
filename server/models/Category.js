const { Schema, model } = require('mongoose');

const categorySchema = new Schema({}, { timestamps: true });

const Category = model('Category', categorySchema);

module.exports = Category;