import { Review } from "../../../models/reviewModel.js";


export const addReviewController = async (req, res) => {
	try {
		const { userName, productName, rating, comment } = req.body;

		// Create the review directly without needing to find the product or user by ID
		const newReview = new Review({
			userName, // Store the username directly
			productName, // Store the product name directly
			rating,
			comment,
		});

		await newReview.save();
		return res
			.status(201)
			.json({ message: "Review added successfully", review: newReview });
	} catch (error) {
		console.error("Error adding review", error);
		res.status(500).json({ message: "Server error" });
	}
};
