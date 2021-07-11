import { filterCategories } from '../../utils/filters';

import { useQuery } from '@apollo/client';

import ProductList from '../../components/ProductList';

import { QUERY_PRODUCTS } from '../../utils/queries';

function Menu() {
	const { loading, data } = useQuery(QUERY_PRODUCTS);

	const products = data?.products || [];

	console.log(products);

	const classic = filterCategories(products, 'Classic Pizzas');
	const gourmet = filterCategories(products, 'Gourmet Pizzas');

	return (
		<>
			{classic.length > 0 && (
				<>
					<h2>Classic Pizzas</h2>
					<ProductList products={classic} />
				</>
			)}

			{gourmet.length > 0 && (
				<>
					<h3>Gourmet Pizzas</h3>
					<ProductList products={gourmet} />
				</>
			)}

			{/* <ProductList category="Gourmet Pizzas" products={products} />

			<ProductList category="Sides" products={products} />

			<ProductList category="Drinks" products={products} /> */}
		</>
	);
}

export default Menu;