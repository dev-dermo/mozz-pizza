function ProductList({ products }) {
	return (
		<div>
			{products.map(product => {
				return (
					<div key={product._id}>
						<img src={product.imageUrl} alt={product.name} />
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>€{(product.price / 100).toFixed(2)}</p>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;