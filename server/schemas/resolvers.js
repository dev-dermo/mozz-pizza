const { Product, Category, SubCategory } = require('../models');

const resolvers = {
	Query: {
		products: async () => {
			const products = await Product.find({})
				.populate('category')
				.populate('subCategories');

			return products;
		},
	},

	Mutation: {
		addProduct: async(parent, { name, description, price, imageUrl, categoryId, subCategories }) => {
			const product = await Product.create({
				name,
				description,
				price,
				imageUrl,
				category: categoryId,
				subCategories: subCategories,
			});

			return product;
		},

		addCategory: async(parent, { name }) => {
			const category = await Category.create({ name });

			return category;
		},

		addSubCategory: async(parent, { name }) => {
			const subCategory = await SubCategory.create({ name });

			return subCategory;
		},
	}
};

module.exports = resolvers;