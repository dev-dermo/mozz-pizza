const { AuthenticationError } = require('apollo-server-express');
const { Product, Category, SubCategory, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		categories: async () => {
			const categories = Category.find({});

			return categories;
		},

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
		addProduct: async(parent, { name, description, allergens, price, imageUrl, categoryId, subCategories }) => {
			const product = await Product.create({
				name,
				description,
				allergens,
				price,
				imageUrl,
				category: categoryId,
				subCategories: subCategories,
			});

			return product;
		},

		deleteProduct: async (parent, { productId }) => {
			const deleted = await Product.deleteOne({ _id: productId });

			console.log(deleted);

			return deleted;
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

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Authentication failed.');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Authentication failed.');
			}

			const token = signToken(user);

			return { token, user };
		},
	}
};

module.exports = resolvers;