import { useQuery, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { DELETE_PRODUCT, TOGGLE_PRODUCT } from '../../utils/mutations';

import Masthead from '../../components/Masthead';
import AddProductForm from '../../components/AddProductForm';

import Auth from '../../utils/auth';

function AddProducts() {
	const { loading, data } = useQuery(QUERY_PRODUCTS);
	const [deleteProduct] = useMutation(DELETE_PRODUCT);
	const [toggleProduct] = useMutation(TOGGLE_PRODUCT);

	const handleToggleActive = async event => {
		const { id, action } = event.target.dataset;
		let status;

		if (action === 'activate') {
			status = true;
		} else {
			status = false;
		}

		try {
			const response = await toggleProduct({
				variables: {
					productId: id,
					status,
				},
			});

			console.log(response);

			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteProduct = async event => {
		const productId = event.target.id;
		console.log(productId);

		try {
			const { data } = await deleteProduct({
				variables: { productId }
			});

			console.log(data);

			if (data.deleteProduct.ok) {
				window.location.reload();
			}
		} catch (error) {
			console.error(error);
		}
	};

	const products = data?.products || [];
	console.log(products);

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Masthead title="Products" />

			<div className="row">
				<div className="col-12">
					<h2>Current Products</h2>
				</div>

				{products.map(product => {
					return (
						<div key={product._id} className="col-md-3">
							<div className="card mb-4">
								<div className="card-body">
									<h3 className="card-title">{product.name}</h3>

									<p className="card-text">
										<strong>Price:</strong> €{(product.price / 100).toFixed(2)}<br />
										<strong>Description:</strong> {product.description}<br />
										<strong>Allergens:</strong> {product.allergens}<br />
										<strong>Active:</strong> {(product.isActive).toString()}<br />
										<strong>Category:</strong> {product.category.name}<br />
										{product.subCategories.length > 0 ? (
											<ul>
												{product.subCategories.map(subCategory => {
													return <li>{subCategory}</li>
												})}
											</ul>
										) : ''}

										{product.isActive ? (
											<button
												data-id={product._id}
												data-action="deactivate"
												className='btn btn-warning mr-2 mt-2'
												onClick={handleToggleActive}
											>
												Deactivate
											</button>
										) : (
											<button
												data-id={product._id}
												data-action="activate"
												className='btn btn-success mr-2 mt-2'
												onClick={handleToggleActive}
											>
												Activate
											</button>
										)}
										
										<button
											id={product._id}
											className='btn btn-danger mr-2 mt-2'
											onClick={handleDeleteProduct}
										>
											Delete
										</button>
										
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<AddProductForm />
		</>
	);
}

export default AddProducts;