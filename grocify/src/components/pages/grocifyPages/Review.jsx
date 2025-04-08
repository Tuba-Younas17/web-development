import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllReviews } from "../../../utils/reviewUtils/showReviews";

const Review = () => {
	const [reviews, setReviews] = useState([]);
	const [isShowReviewsVisible, setIsShowReviewsVisible] = useState(false);
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const showReviews = async () => {
		try {
			const data = await fetchAllReviews();
			setReviews(data);
			setIsShowReviewsVisible(true);
		} catch (error) {
			setMessage("Error fetching reviews.");
		}
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50 p-6">
			<div className="flex justify-center gap-4 mb-6">
				<button
					onClick={showReviews}
					className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 shadow"
				>
					Show All Reviews
				</button>

				<button
					onClick={() => navigate("/add-review")}
					className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 shadow"
				>
					Write a Review
				</button>
			</div>

			{isShowReviewsVisible && reviews?.length > 0 && (
				<div className="w-full max-w-2xl mx-auto space-y-4">
					<h2 className="text-2xl font-bold text-center">
						All Reviews
					</h2>
					{reviews.map((review) => (
						<div
							key={review._id}
							className="border p-4 rounded-md shadow-md bg-white"
						>
							<p>
								<strong>User:</strong> {review.userName}
							</p>
							<p>
								<strong>Product:</strong> {review.productName}
							</p>
							<p>
								<strong>Rating:</strong> {review.rating}
							</p>
							<p>
								<strong>Comment:</strong> {review.comment}
							</p>
						</div>
					))}
				</div>
			)}

			{message && (
				<p className="text-red-500 text-center mt-4">{message}</p>
			)}
		</div>
	);
};

export default Review;
