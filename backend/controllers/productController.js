import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@description: Fetch All Products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	// res.status(401);
	// throw new Error('Not Authorized');
	res.json(products);
});

//@description: Fetch Single Products
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product Not Found');
	}
});

export { getProducts, getProductById };
