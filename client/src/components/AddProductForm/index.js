import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_CATEGORIES } from '../../utils/queries';

function AddProductForm() {
	const [formState, setFormState] = useState({
		"name": "",
		"description": "",
		"allergens": "",
		"price": "",
		"categoryId": ""
	});
	const { loading, data } = useQuery(QUERY_CATEGORIES);
	const [addProduct, { error }] = useMutation(ADD_PRODUCT);

	const categories = data?.categories || [];
	console.log('categories', categories);

	const handleChange = event => {
		let { name, value } = event.target;

		if (name === 'price') {
			value = parseInt(value);
		}

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addProduct({
				variables: { ...formState }
			});
			console.log(data);
			window.location.assign('/admin/add-products');
		} catch (e) {
			console.error(e);
		}

		// setFormState({
		// 	"name": "",
		// 	"description": "",
		// 	"allergens": "",
		// 	"price": "",
		// 	"categoryId": ""
		// });
	};

	if (loading) {
		return (<p>Loading...</p>);
	}

	return (
		<div className="row">
			<div className="col-12">
				<h2>Add a new product</h2>
			</div>

			<div className="col">
				<form onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="email">Name</label>
						<input
							onChange={handleChange}
							id="name"
							name="name"
							value={formState.name}
							className="form-control"
							type="text"
							placeholder="Product Title"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Description</label>
						<input
							onChange={handleChange}
							id="description"
							name="description"
							value={formState.description}
							className="form-control"
							type="text"
							placeholder="Description"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Allergens</label>
						<input
							onChange={handleChange}
							id="allergens"
							name="allergens"
							value={formState.allergens}
							className="form-control"
							type="text"
							placeholder="Allergens, eg. 1, 3, 4"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Price (in cents ¢)</label>
						<input
							onChange={handleChange}
							id="price"
							name="price"
							value={formState.price}
							className="form-control"
							type="number"
							placeholder="1350"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select
							onChange={handleChange}
							id="categoryId"
							name="categoryId"
							className="form-control"
							required
						>
							<option>Select One</option>
							{categories.map(category => {
								return (
									<option
										key={category._id}
										value={category._id}
									>
										{category.name}
									</option>
								);
							})}
						</select>
					</div>

					<button type="submit" className="btn btn-primary">Add Product</button>
				</form>

				{error && <div>Add Category failed</div>}
			</div>
		</div>
	);
}

export default AddProductForm;