import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 py-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image}></Card.Img>
			</Link>
			<Card.Body as='div'>
				<Link to={`/product/${product._id}`}>
					<strong>{product.name}</strong>
				</Link>
				<Card.Text as='div'>
					<div className='my-3'>
						<Rating value={product.rating} text={`${product.numReviews} reviews`} />
					</div>
				</Card.Text>
				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
