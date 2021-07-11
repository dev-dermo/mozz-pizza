import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
	query products {
		products {
			_id
			name
			price
			description
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