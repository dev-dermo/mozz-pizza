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
