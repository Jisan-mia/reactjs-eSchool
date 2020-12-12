import React from "react";
import homeImg from "../../images/home-img.png";
import "./Home.css";
const Home = () => {
	return (
		<div className="flex-box-cont">
			<div className="detail">
				<h1>Learn With Fun</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
					voluptates, quibusdam est!
				</p>
			</div>
			<div className="imgage-div">
				<img src={homeImg} alt="home img" />
			</div>
		</div>
	);
};

export default Home;
