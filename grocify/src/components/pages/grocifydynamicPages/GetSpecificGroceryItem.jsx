import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SkeletonLoader from "../../Layout/SkeletonLoader.jsx";
import { getGroceryDetails } from "../../../utils/fetchGroceryDataFromMongoDb/getGroceryDetailsOFSpcificId.js";
import { handleDelete } from "../../../utils/fetchGroceryDataFromMongoDb/deleteGroceryItemById.js";

const SpecificGroceryItem = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [grocery, setGrocery] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getGroceryDetails(setLoading, id, setGrocery, setError);
	}, [id]);

	if (loading) return <SkeletonLoader />;
	if (error) return <p className="text-center text-red-500">{error}</p>;

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-center mb-4">
					{grocery.title}
				</h2>
				<p className="text-lg text-gray-700 text-center mb-2">
					{grocery.description}
				</p>
				<p className="text-gray-700 text-center">
					<strong>Price:</strong> Rs.{grocery.price}
				</p>
				<p className="text-gray-700 text-center">
					<strong>Quantity:</strong> {grocery.quantity}
				</p>
				<p className="text-gray-700 text-center">
					<strong>Discount:</strong> {grocery.discount}%
				</p>

				<button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition">
					Add to Cart
				</button>

				{/* Delete Button */}
				<button
					onClick={() => handleDelete(id, navigate)}
					className="w-full bg-red-500 text-white py-2 mt-2 rounded-md hover:bg-red-600 transition"
				>
					Delete Item
				</button>

				<button
					onClick={() => navigate(-1)}
					className="w-full bg-gray-500 text-white py-2 mt-2 rounded-md hover:bg-gray-600 transition"
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default SpecificGroceryItem;
