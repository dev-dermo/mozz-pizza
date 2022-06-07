function ProductList({ products, category }) {
	return (
		<div className="row my-5">
			<h2 className="w-100">{category}</h2>
			{products.map(product => {
				return (
					<div className="col-md-6 px-5 pt-5" key={product._id}>
						{/* // FIXME: add images back */}
						{/* <img src={product.imageUrl} alt={product.name} /> */}
						<p className="text-right float-right">
							<em>€{(product.price / 100).toFixed(2)}</em>
						</p>
						<h3>
							{product.name}

							{product.allergens ? (
								<sub>
									<small>
										({product.allergens})
									</small>
								</sub>
							) : ''}
							
						</h3>
						<p className="lead"><em>{product.description}</em></p>
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;