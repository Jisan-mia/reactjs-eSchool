import React, { useState } from "react";
import allData from "../../courseData/allData";
import Course from "../Course/Course";
import Header from "../Header/Header";
import Home from "../Home/Home";
import "./Courses.css";
const Courses = (props) => {
	const [allDatas, setAllDatas] = useState(allData);
	const [cart, setCart] = useState([]);

	const handleEnrolButton = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};

	console.log("cart", cart);

	return (
		<div>
			<Header cart={cart} cartCount={cart.length}></Header>
			<div className="cart-section"></div>

			<Home></Home>
			<div className="courses-div">
				<h1 className="main-title">Our Courses</h1>

				<div className="course">
					<div className="js-course-main main">
						<h2>
							Top Courses in <span className="course-topic">JavaScript </span>
						</h2>
						<div className="course-main-div">
							{allData[0].map((jsCourse) => (
								<Course
									handleEnrolButton={handleEnrolButton}
									course={jsCourse}
								></Course>
							))}
						</div>
					</div>

					<div className="python-course-main main">
						<h2>
							Top Courses in <span className="course-topic">Python </span>
						</h2>
						<div className="course-main-div">
							{allDatas[1].map((pythonCourse) => (
								<Course
									handleEnrolButton={handleEnrolButton}
									course={pythonCourse}
								></Course>
							))}
						</div>
					</div>

					<div className="web-course-main main">
						<h2>
							Top Courses in{" "}
							<span className="course-topic">Web Development </span>
						</h2>
						<div className="course-main-div">
							{allDatas[2].map((webCourse) => (
								<Course
									handleEnrolButton={handleEnrolButton}
									course={webCourse}
								></Course>
							))}
						</div>
					</div>

					<div className="dataScience-course-main main">
						<h2>
							Top Courses in <span className="course-topic">Data Science </span>
						</h2>
						<div className="course-main-div">
							{allDatas[3].map((dataScience) => (
								<Course
									handleEnrolButton={handleEnrolButton}
									course={dataScience}
								></Course>
							))}
						</div>
					</div>

					<div className="aws-course-main main">
						<h2>
							Top Courses in{" "}
							<span className="course-topic">AWS Certification </span>
						</h2>
						<div className="course-main-div">
							{allDatas[4].map((awsCourse) => (
								<Course
									handleEnrolButton={handleEnrolButton}
									course={awsCourse}
								></Course>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
