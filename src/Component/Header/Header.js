import React from "react";
import cart from "../../images/cart.svg";
import logo from "../../images/logo2.png";
import "./Header.css";
const Header = () => {
	return (
		<div>
			<div className="header-container">
				<div className="img-div">
					<img src={logo} alt="logo" />
				</div>
				<div className="nav">
					<ul>
						<li>
							<a href="/home">Home</a>
						</li>
						<li>
							<a href="/courses">Courses</a>
						</li>
						<li>
							<a className="cart" href="/cart">
								Cart
								<button>
									<img className="cart-img" src={cart} alt="cart-img" />
									<span className="cart-count">5</span>
								</button>
							</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
