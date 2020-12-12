import React from "react";
import Courses from "./Component/Courses/Courses";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
	return (
		<div>
			<Header></Header>
			<Home></Home>
			<Courses></Courses>
			<Footer></Footer>
		</div>
	);
}

export default App;
