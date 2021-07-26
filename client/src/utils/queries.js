import { gql } from '@apollo/client';

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

export const QUERY_CATEGORIES = gql`
	query categories {
		categories {
			_id
			name
		}
	}
`;
