import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productDeleteReducer,
	productDetailsReducer,
	productListReducer,
	productCreateReducer,
	productUpdateReducer,
	productReviewCreateReducer,
	productTopReducer
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderPayReducer,
	orderListMyReducer,
	orderListReducer,
	orderDeliverReducer
} from './reducers/orderReducers';

import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateReducer,
	userListReducer,
	userDeleteReducer,
	userAdminUpdateReducer
} from './reducers/userReducers';
const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productTopRated: productTopReducer,
	productCreate: productCreateReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	userList: userListReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderDeliver: orderDeliverReducer,
	orderListMy: orderListMyReducer,
	orderList: orderListReducer,
	userDelete: userDeleteReducer,
	userAdminUpdate: userAdminUpdateReducer,
	productDelete: productDeleteReducer,
	productUpdate: productUpdateReducer,
	productReviewCreate: productReviewCreateReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const initialState = {
	cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
	userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
