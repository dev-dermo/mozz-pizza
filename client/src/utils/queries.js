import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
	query product($productId: ID!) {
		product(productId: $productId) {
			_id
			name
			description
			allergens
			price
			isActive
			priority
			category {
				_id
				name
			}
		}
	}
`;

export const QUERY_PRODUCTS = gql`
	query products {
		products {
			_id
			name
			price
			description
			allergens
			isActive
			imageUrl
			priority
			category {
				_id
				name
				priority
			}
			subCategories {
				_id
				name
			}
		}
	}
`;

export const QUERY_ACTIVE_PRODUCTS = gql`
	query activeProducts {
		activeProducts {
			_id
			name
			price
			description
			allergens
			isActive
			imageUrl
			priority
			category {
				_id
				name
				priority
			}
			subCategories {
				_id
				name
			}
		}
	}
`;

export const QUERY_CATEGORIES = gql`
	query categories {
		categories {
			_id
			name
			priority
		}
	}
`;
