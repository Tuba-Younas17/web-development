import React, { useState } from "react";
import axios from "axios";
import CarouselImages from "../../../data/grocifyHomePageData/carosuelImagesData";
import TopSellerData from "../../../data/grocifyHomePageData/topSellerProductsData";
import BreakFastProductsData from "../../../data/grocifyHomePageData/breakFastProductsData";
import YoungPeopleBuyData from "../../../data/grocifyHomePageData/youngPeopleProductsData";
import TopSeller from "../../views/homeViews/TopSeller";
import BreakfastProducts from "../../views/homeViews/BreakfastProducts";
import YoungPeopleBuy from "../../views/homeViews/YoungPeopleBuy";
import Carosuel from "../../views/homeViews/Carosuel";
import Description from "../../views/homeViews/Description";
import { useNavigate } from "react-router-dom";
import ReviewButton from "../../views/homeViews/ReviewButton";



const Home = () => {
	// const [userName, setUserName] = useState("");
	// const [productName, setProductName] = useState("");
	// const [rating, setRating] = useState(1);
	// const [comment, setComment] = useState("");
	// const [message, setMessage] = useState("");
	// const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
	// const [reviews, setReviews] = useState([]);
	// const [isShowReviewsVisible, setIsShowReviewsVisible] = useState(false);
	const navigate = useNavigate();


	// Handle adding a review
	// const addReview = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await axios.post(
	// 			"http://127.0.0.1:5000/api/v1/reviews/add-review",
	// 			{
	// 				userName: userName,
	// 				productName: productName,
	// 				rating: rating,
	// 				comment: comment,
	// 			}
	// 		);
	// 		console.log(response.data);
	// 		setMessage("Review added successfully!");

	// 		// Hide the message after 5 seconds
	// 		setTimeout(() => {
	// 			setMessage("");
	// 		}, 5000);

	// 		// Hide the review form after submission
	// 		setIsReviewFormVisible(false);

	// 		// Optionally, reset the form fields
	// 		setUserName("");
	// 		setProductName("");
	// 		setRating(1);
	// 		setComment("");
	// 	} catch (error) {
	// 		setMessage("Error adding review.");
	// 		console.error("Error adding review", error);
	// 	}
	// };

	// Handle fetching reviews
	// const showReviews = async () => {
	// 	console.log("all reviews");
	// 	try {
	// 		const response = await axios.get(
	// 			"http://127.0.0.1:5000/api/v1/reviews/get-review"
	// 		);
	// 		console.log(response);
	// 		setReviews(response.data); // Assuming the response contains an array of reviews
	// 		setIsShowReviewsVisible(true);
	// 	} catch (error) {
	// 		setMessage("Error fetching reviews.");
	// 		console.error("Error fetching reviews", error);
	// 	}
	// };

	return (
		<div>
			<Carosuel images={CarouselImages} />
			<Description />
			<TopSeller title="Top Sellers" data={TopSellerData} />
			<BreakfastProducts
				title="Breakfast Products"
				products={BreakFastProductsData}
			/>
			<YoungPeopleBuy
				title="Young People Buy"
				products={YoungPeopleBuyData}
			/>
			<ReviewButton/>

		</div>
	);
};

export default Home;
