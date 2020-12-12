import React, { useState } from "react";
import allData from "../../courseData/allData";
import Course from "../Course/Course";
import "./Courses.css";
const Courses = () => {
	const [allDatas, setAllDatas] = useState(allData);
	// for (let i = 0; i < allDatas.length; i++) {
	// 	// console.log(data[i]);
	// }
	return (
		<div className="courses-div">
			<h1 className="main-title">Our Courses</h1>

			<div className="course">
				<div className="js-course-main main">
					<h2>
						Top Courses in <span className="course-topic">JavaScript </span>
					</h2>
					<div className="course-main-div">
						{allData[0].map((jsCourse) => (
							<Course course={jsCourse}></Course>
						))}
					</div>
				</div>

				<div className="python-course-main main">
					<h2>
						Top Courses in <span className="course-topic">Python </span>
					</h2>
					<div className="course-main-div">
						{allDatas[1].map((pythonCourse) => (
							<Course course={pythonCourse}></Course>
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
							<Course course={webCourse}></Course>
						))}
					</div>
				</div>

				<div className="dataScience-course-main main">
					<h2>
						Top Courses in <span className="course-topic">Data Science </span>
					</h2>
					<div className="course-main-div">
						{allDatas[2].map((dataScience) => (
							<Course course={dataScience}></Course>
						))}
					</div>
				</div>

				<div className="aws-course-main main">
					<h2>
						Top Courses in <span className="course-topic">Data Science </span>
					</h2>
					<div className="course-main-div">
						{allDatas[3].map((awsCourse) => (
							<Course course={awsCourse}></Course>
						))}
					</div>
				</div>

				<div className="aws-course-main main">
					<h2>
						Top Courses in <span className="course-topic">Data Science </span>
					</h2>
					<div className="course-main-div">
						{allDatas[4].map((awsCourse) => (
							<Course course={awsCourse}></Course>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
