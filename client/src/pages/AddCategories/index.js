import { useQuery, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { DELETE_CATEGORY } from '../../utils/mutations';

import Masthead from '../../components/Masthead';
import AddCategoryForm from '../../components/AddCategoryForm';

import Auth from '../../utils/auth';

function AddCategories() {
	const { loading, data } = useQuery(QUERY_CATEGORIES);
	const [deleteCategory] = useMutation(DELETE_CATEGORY);
	const categories = data?.categories || [];
	console.log(categories);

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	if (loading) {
		return <div>Loading...</div>
	}

	const handleDeleteCategory = async event => {
		const confirm = window.confirm('Deleting this category will delete all products associated with it. Are you sure you want to delete this category?');

		if (confirm) {
			const categoryId = event.target.dataset.id;
			console.log(categoryId);
	
			try {
				const { data } = await deleteCategory({
					variables: { categoryId }
				});
	
				console.log(data);
	
				if (data.deleteCategory.ok) {
					window.location.reload();
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<>
		<Masthead title="Categories" />

		<div className="row">
			<div className="col-12">
				<h2>Current Categories</h2>
			</div>
			{categories.map(category => {
				return (
					<div key={category._id} className="col-sm-4">
						<p
							className="alert alert-secondary"
							data-id={category._id}
							key={category._id}
						>
							{category.name}
							<button
								data-id={category._id}
								className="m-3 btn btn-danger"
								onClick={handleDeleteCategory}
							>
								Delete
							</button>
						</p>
					</div>
				);
			})}
		</div>

		<AddCategoryForm />
		</>
	);
}

export default AddCategories;