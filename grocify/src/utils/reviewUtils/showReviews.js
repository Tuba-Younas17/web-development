import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const fetchAllReviews = async () => {
	try {
		const response = await axios.get(
			// "http://127.0.0.1:5000/api/v1/reviews/get-review"
			END_POINTS.REVIEWS.GET_ALL_REVIEWS
		);
		return response.data || [];
	} catch (error) {
		console.error("Error fetching reviews:", error);
		throw error;
	}
};
