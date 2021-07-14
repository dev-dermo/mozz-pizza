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
		subCategories: [SubCategory]
		imageUrl: String
		isActive: Boolean
	}

	type Query {
		categories: [Category]
		products: [Product]
	}

	type Mutation {
		addUser(name: String!, email: String!, password: String!, companyName: String, isAdmin: Boolean, isPartner: Boolean): Auth
		addProduct(name: String!, description: String, allergens: String, price: Int!, imageUrl: String, categoryId: ID!, subCategories: [ID]): Product
		addCategory(name: String!): Category
		addSubCategory(name: String!): SubCategory
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;