export const filterCategories = (products, category) => {
	return products.filter(product => product.category.name === category);
};