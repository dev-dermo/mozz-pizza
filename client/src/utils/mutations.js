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
	mutation addCategory($name: String!, $priority: Int) {
		addCategory(name: $name, priority: $priority) {
			_id
			name
			priority
		}
	}
`;

export const UPDATE_CATEGORY = gql`
	mutation updateCategory($categoryId: ID!, $name: String, $priority: Int) {
		updateCategory(categoryId: $categoryId, name: $name, priority: $priority) {
			_id
			name
			priority
		}
	}
`;

export const DELETE_CATEGORY = gql`
	mutation deleteCategory($categoryId: ID!) {
		deleteCategory(categoryId: $categoryId) {
			ok
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

export const TOGGLE_PRODUCT = gql`
	mutation toggleProduct($productId: ID!, $status: Boolean) {
		toggleProduct(productId: $productId, status: $status) {
			_id
			isActive
		}
	}
`;

export const EDIT_PRODUCT = gql`
	mutation editProduct($productId: ID!, $name: String, $description: String, $allergens: String, $price: Int, $category: ID) {
		editProduct(productId: $productId, name: $name, price: $price, allergens: $allergens, description: $description, category: $category) {
			_id
			name
			description
			allergens
			price
			category {
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
