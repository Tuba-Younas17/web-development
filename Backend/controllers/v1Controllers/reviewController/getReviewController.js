import { Review } from "../../../models/reviewModel.js";


export const getReviewController = async (req, res) => {
	try {
		// Fetch all reviews
		const reviews = await Review.find();

		// Send response with the list of reviews
		res.status(200).json(reviews);
	} catch (err) {
		// Handle errors
		res.status(500).json({ error: "Failed to fetch reviews" });
	}
};
