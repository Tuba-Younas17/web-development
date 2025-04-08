import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewButton = () => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center mt-10 mb-8">
			<button
				onClick={() => navigate("/review")}
				className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:from-green-600 hover:to-blue-700 transition duration-300"
			>
				Read & Write Reviews
			</button>
		</div>
	);
};

export default ReviewButton;
