import React from "react";
import "./Cart.css";
const Cart = (props) => {
	console.log("cartjs", props.cart);
	const cart = props.cart;
	const subtotal = cart.reduce((subtotal, cart) => subtotal + cart.price, 0);
	let extra = 0;
	for (let i = 0; i < cart.length; i++) {
		extra = extra + 2;
	}

	const total = (subtotal + extra).toFixed(2);
	return (
		<div>
			<div className="cart-title">
				<h3>Course Enrolled: {cart.length} </h3>
			</div>
			<div className="course-pricing">
				<p>Subtotal: </p>
				<p>$ {subtotal.toFixed(2)} </p>
				<p>Extra: </p>
				<p>$ {extra} </p>
				<p>Total: </p>
				<p>${total} </p>
			</div>
			<div className="btn-div">
				<button className="go-to-cart">Got to Cart</button>
			</div>
		</div>
	);
};

export default Cart;
