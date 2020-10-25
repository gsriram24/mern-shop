import React from 'react';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/registerScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

const App = () => (
	<Router>
		<Header />
		<main className='py-3'>
			<Container>
				<Route path='/placeorder' component={PlaceOrderScreen} />

				<Route path='/shipping' component={ShippingScreen} />
				<Route path='/payment' component={PaymentScreen} />
				<Route path='/profile' component={ProfileScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />
				<Route path='/order/:id' component={OrderScreen} />
				<Route path='/product/:id' component={ProductScreen} />
				<Route path='/cart/:id?' component={CartScreen} />
				<Route path='/' component={HomeScreen} exact />
			</Container>
		</main>
		<Footer />
	</Router>
);

export default App;
