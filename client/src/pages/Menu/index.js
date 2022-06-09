import { filterCategories } from '../../utils/filters';

import { useQuery } from '@apollo/client';

import ProductList from '../../components/ProductList';
import Masthead from '../../components/Masthead';
import CallToAction from '../../components/CallToAction';

import { QUERY_ACTIVE_PRODUCTS, QUERY_CATEGORIES } from '../../utils/queries';

function Menu() {
	document.title = 'Mozz Pizza Menu | Neopolitan Pizza Kitchen, Glengarriff, West Cork';

	const { loading, data } = useQuery(QUERY_ACTIVE_PRODUCTS);
	const { loading: loadingCategories, data: dataCategories } = useQuery(QUERY_CATEGORIES);

	const products = data?.activeProducts || [];
	const categories = dataCategories?.categories || [];
	// const categories = [];

	console.log(products);

	// products.forEach(product => {
	// 	if (!categories.includes(product.category.name)) categories.push(product.category.name);
	// });

	return (
		<>
			<Masthead title="Menu" />

			{loading && loadingCategories ? <p>Loading...</p> : categories.map(category => {
				return (
					<ProductList key={category._id} category={category.name} products={filterCategories(products, category.name)} />
				);
			})}

			<small>
				<em><strong>Allergens:</strong> 1 Gluten, 2 Dairy, 3 Egg, 4 Nuts</em>
			</small>

			<CallToAction />
		</>
		
	);
}

export default Menu;