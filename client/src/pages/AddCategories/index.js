import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_CATEGORIES } from '../../utils/queries';

import Masthead from '../../components/Masthead';

import Auth from '../../utils/auth';

function AddCategories() {
	const { loading, data } = useQuery(QUERY_CATEGORIES);
	const categories = data?.categories || [];
	console.log(categories);

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
		<Masthead title="Add Categories" />

		<div>
			<h2>Current Categories</h2>
			{categories.map(category => {
				return (
					<p data-id={category._id} key={category._id}>{category.name}</p>
				);
			})}
		</div>
		</>
	);
}

export default AddCategories;