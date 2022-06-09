import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { EDIT_PRODUCT } from '../../utils/mutations';

import Auth from '../../utils/auth';

import { QUERY_CATEGORIES } from '../../utils/queries';

function EditProduct() {
	const { data, loading, error } = useQuery(QUERY_CATEGORIES);
	const [editProduct] = useMutation(EDIT_PRODUCT);
	const categories = data?.categories || [];

	const product = useLocation().product;
	if (!product) {
		window.location.replace('/admin/add-products');
	}

	const [formState, setFormState] = useState({
		"productId": product._id,
		"name": product.name,
		"description": product.description,
		"allergens": product.allergens,
		"price": product.price,
		"category": product.category._id,
	});

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await editProduct({
				variables: { ...formState }
			});
			console.log(data);
			window.location.assign('/admin/add-products');
		} catch (e) {
			console.error(e);
		}
	};

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

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className="row">
			<div className="col-12">
				<h2>Edit: {product.name}</h2>
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
							id="category"
							name="category"
							className="form-control"
							required
						>
							<option value={product.category._id}>Current ({product.category.name})</option>
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

					<button type="submit" className="btn btn-primary">Update Product</button>
				</form>

				{error && <div>Edit Product failed</div>}
			</div>
		</div>
	);
}

export default EditProduct;