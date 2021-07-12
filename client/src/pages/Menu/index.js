import { filterCategories } from '../../utils/filters';

import { useQuery } from '@apollo/client';

import ProductList from '../../components/ProductList';

import { QUERY_PRODUCTS } from '../../utils/queries';

function Menu() {
	const { loading, data } = useQuery(QUERY_PRODUCTS);

	const products = data?.products || [];
	const categories = [];

	products.forEach(product => {
		if (!categories.includes(product.category.name)) categories.push(product.category.name);
	});

	return (
		<>
			<div className="row">
				<div className="col">
					<h1 className="text-center mt-4">
						Menu<br />
						* * *
					</h1>
				</div>
			</div>

			{loading ? <p>Loading...</p> : categories.map(category => {
				return (
					<ProductList category={category} products={filterCategories(products, category)} />
				);
			})}

			<small>
				<em><strong>Allergens:</strong> 1 Gluten, 2 Dairy, 3 Egg, 4 Nuts</em>
			</small>
		</>
		
	);
}

export default Menu;