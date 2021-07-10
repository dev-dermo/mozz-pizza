const { Product, Category, SubCategory, User } = require('../models');
const { signToken } = require('../utils/auth');

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
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			
			return { token, user };
		},

		// TODO: keep behind auth
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

		// TODO: keep behind auth
		addCategory: async(parent, { name }) => {
			const category = await Category.create({ name });

			return category;
		},

		// TODO: keep behind auth
		addSubCategory: async(parent, { name }) => {
			const subCategory = await SubCategory.create({ name });

			return subCategory;
		},
	}
};

module.exports = resolvers;