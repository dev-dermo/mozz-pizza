const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		name: String
		email: String
		isAdmin: Boolean
		isPartner: Boolean
		companyName: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Category {
		_id: ID
		name: String
		priority: Int
	}

	type SubCategory {
		_id: ID
		name: String
	}

	type Product {
		_id: ID
		name: String
		description: String
		allergens: String
		price: Int
		category: Category
		priority: Int
		subCategories: [SubCategory]
		imageUrl: String
		isActive: Boolean
	}

	type Deleted {
		n: Int
		ok: Int
		deletedCount: Int
	}

	type Query {
		categories: [Category]
		product(productId: ID!): Product
		products: [Product]
		activeProducts: [Product]
	}

	type Mutation {
		addUser(name: String!, email: String!, password: String!, companyName: String, isAdmin: Boolean, isPartner: Boolean): Auth
		addProduct(name: String!, description: String, allergens: String, price: Int!, imageUrl: String, categoryId: ID!, subCategories: [ID], priority: Int): Product
		toggleProduct(productId: ID!, status: Boolean) : Product
		editProduct(productId: ID!, name: String, description: String, allergens: String, price: Int, category: ID, priority: Int): Product
		deleteProduct(productId: ID!) : Deleted
		addCategory(name: String!, priority: Int): Category
		updateCategory(categoryId: ID!, name: String, priority: Int): Category
		deleteCategory(categoryId: ID!): Deleted
		addSubCategory(name: String!): SubCategory
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;