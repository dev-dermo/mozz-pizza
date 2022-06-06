import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				name
			}
		}
	}
`;

export const ADD_CATEGORY = gql`
	mutation addCategory($name: String!) {
		addCategory(name: $name) {
			_id
			name
		}
	}
`;

export const ADD_PRODUCT = gql`
	mutation addProduct($name: String!, $allergens: String, $description: String, $price: Int!, $imageUrl: String, $categoryId: ID!, $subCategories: [ID]){
		addProduct(name: $name, allergens: $allergens, description: $description, price: $price, imageUrl: $imageUrl, categoryId: $categoryId, subCategories: $subCategories) {
			_id
			name
			description
			price
			category {
				_id
				name
			}
			subCategories {
				_id
				name
			}
		}
	}
`;

export const DELETE_PRODUCT = gql`
	mutation deleteProduct($productId: ID!) {
		deleteProduct(productId: $productId) {
			ok
		}
	}
`;
