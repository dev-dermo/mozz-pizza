import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_CATEGORIES } from '../../utils/queries';

import Masthead from '../../components/Masthead';
import AddCategoryForm from '../../components/AddCategoryForm';

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

		<div className="row">
			<div className="col-12">
				<h2>Current Categories</h2>
			</div>
			{categories.map(category => {
				return (
					<div key={category._id} className="col-sm-4">
						<p className="alert alert-secondary" data-id={category._id} key={category._id}>{category.name}</p>
					</div>
				);
			})}
		</div>

		<AddCategoryForm />
		</>
	);
}

export default AddCategories;