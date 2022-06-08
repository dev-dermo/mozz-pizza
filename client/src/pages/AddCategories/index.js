import { useQuery, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { DELETE_CATEGORY, UPDATE_CATEGORY } from '../../utils/mutations';

import Masthead from '../../components/Masthead';
import AddCategoryForm from '../../components/AddCategoryForm';

import Auth from '../../utils/auth';

function AddCategories() {
	const { loading, data } = useQuery(QUERY_CATEGORIES);
	const [deleteCategory] = useMutation(DELETE_CATEGORY);
	const [updateCategory] = useMutation(UPDATE_CATEGORY);
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

	const handleUpdateCategory = async event => {
		try {
			const categoryId = event.target.dataset.id;
			let name, priority;

			if (event.target.id === 'category') {
				console.log('changing category');
				name = event.target.value || 'Other';
				priority = parseInt(event.target.dataset.priority) || 0;
			} else if (event.target.id === 'priority') {
				console.log('changing priority');
				name = event.target.dataset.name || 'Other';
				priority = parseInt(event.target.value) || 0;
			}

			console.table(categoryId, name, priority);

			const newCategory = await updateCategory({
				variables: { categoryId, name, priority }
			});

			console.log(newCategory);
		} catch (error) {
			console.error(error);
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
							<div
								className="alert alert-secondary"
								data-id={category._id}
								key={category._id}
							>
								<h3>{category.name}</h3>
								<div className="input-group">
									<input
										id="category"
										placeholder="New category name"
										className="form-control"
										data-id={category._id}
										data-priority={category.priority}
										type="text"
										// value=""
										onChange={handleUpdateCategory}
									/>
								</div>

								<p><strong>Current Order:</strong> {category.priority}</p>

								<div className="input-group">
									<input
										placeholder="New order eg. 1"
										id="priority"
										// name="priority"
										className="form-control"
										data-id={category._id}
										data-name={category.name}
										type="number"
										// value=""
										onChange={handleUpdateCategory}
									/>
								</div>
								
								<button
									data-id={category._id}
									className="btn btn-danger mt-2"
									onClick={handleDeleteCategory}
								>
									Delete
								</button>
							</div>

						</div>
					);
				})}
			</div>

			<AddCategoryForm />
		</>
	);
}

export default AddCategories;