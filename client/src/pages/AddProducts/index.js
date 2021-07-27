import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { QUERY_PRODUCTS } from '../../utils/queries';

import Masthead from '../../components/Masthead';
import AddProductForm from '../../components/AddProductForm';

import Auth from '../../utils/auth';

function AddProducts() {
	const { loading, data } = useQuery(QUERY_PRODUCTS);
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
		<Masthead title="Add Products" />

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