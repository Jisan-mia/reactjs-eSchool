import React from "react";
import "./Course.css";
const JSCourse = (props) => {
	const {
		title,
		price,
		image_240x135,
		visible_instructors,
		rating,
		num_reviews,
		content_info,
		num_published_lectures,
	} = props.course;

	const randomGenerator = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const discountPrice = (price + 100 * 0.99).toFixed(2);

	return (
		<div className="course-box">
			<div className="course-img">
				<img src={image_240x135} alt="" />
			</div>
			<div className="course-info">
				<h3 className="course-title"> {title} </h3>
				<p className="istructor-name">
					By {visible_instructors[0].display_name}{" "}
				</p>
				<p className="rating">
					Rating: {rating.toFixed(1)} <small> ( {num_reviews} ) </small>
				</p>
				<p className="content-info">
					{" "}
					{content_info} | {num_published_lectures} lectures{" "}
				</p>
				<div className="course-main-footer">
					<p className="course-footer">
						<small>
							{" "}
							${price} <del> ${discountPrice} </del>{" "}
						</small>
						<button
							className="enroll-btn"
							onClick={() => {
								props.handleEnrolButton(props.course);
							}}
						>
							Enroll
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default JSCourse;
