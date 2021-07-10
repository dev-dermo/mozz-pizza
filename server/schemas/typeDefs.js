const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
		price: Int
		category: Category
		subCategories: [SubCategory]
		imageUrl: String
		isActive: Boolean
	}

	type Query {
		products: [Product]
	}

	type Mutation {
		addProduct(name: String!, description: String!, price: Int!, imageUrl: String, categoryId: ID!, subCategories: [ID]): Product
		addCategory(name: String!): Category
		addSubCategory(name: String!): SubCategory
	}
`;

module.exports = typeDefs;