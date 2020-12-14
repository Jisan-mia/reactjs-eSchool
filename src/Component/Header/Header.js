import React from "react";
import cartImg from "../../images/cart.svg";
import logo from "../../images/logo2.png";
import Cart from "../Cart/Cart";
import "./Header.css";
const Header = (props) => {
	const cart = props.cart;
	return (
		<div>
			<div className="header-container">
				<div className="img-div">
					<img src={logo} alt="logo" />
				</div>
				<div className="nav">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Courses</a>
						</li>
						<li className="cart-text">
							<a className="cart" href="#">
								Cart
								<button>
									<img className="cart-img" src={cartImg} alt="cart-img" />
									<span className="cart-count"> {props.cartCount} </span>
								</button>
							</a>
							<div className="cart-container">
								<div className="cart-content">
									<Cart cart={cart}></Cart>
								</div>
							</div>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Login</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
