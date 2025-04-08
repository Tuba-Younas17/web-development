// utils/reviewUtils/submitReview.js
import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const submitReview = async (formData, setMessage, navigate) => {
	try {
		await axios.post(
			// "http://127.0.0.1:5000/api/v1/reviews/add-review",
			END_POINTS.REVIEWS.ADD_REVIEW,

			formData
		);
		setMessage("Review submitted successfully!");
		setTimeout(() => {
			navigate("/review");
		}, 1500);
	} catch (error) {
		console.error("Error submitting review:", error);
		setMessage("Failed to submit review. Try again.");
	}
};
