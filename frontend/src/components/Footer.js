import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; Shop</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
