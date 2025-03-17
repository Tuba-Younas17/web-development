import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SkeletonLoader from "../../Layout/SkeletonLoader.jsx";
import { getGroceryDetails } from "../../../utils/fetchGroceryDataFromMongoDb/getGroceryDetailsOFSpcificId.js";
import { deleteGroceryItemById } from "../../../services/grocifyCrudServices/deleteGrocertItemById.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCartPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
				<p className="text-lg text-gray-700 text-center mb-2">
					<strong>Price:</strong> ${grocery.price}
				</p>
				<p className="text-lg text-gray-700 text-center mb-2">
					<strong>Quantity:</strong> {grocery.quantity}
				</p>
				<p className="text-lg text-gray-700 text-center mb-2">
					<strong>Discount:</strong> {grocery.discount}%
				</p>

				<button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition">
					<FontAwesomeIcon icon={faCartPlus} className="mr-2" />
					Add to Cart
				</button>

				{/* Edit Button */}
				<Link to={`/update-grocery-items-by-id/${id}`}>
					<button className="w-full bg-yellow-500 text-white py-2 mt-2 rounded-md hover:bg-yellow-600 transition">
						<FontAwesomeIcon icon={faEdit} className="mr-2" />
						Edit Item
					</button>
				</Link>

				{/* Delete Button */}
				<button
					onClick={() => deleteGroceryItemById(id, navigate)}
					className="w-full bg-red-500 text-white py-2 mt-2 rounded-md hover:bg-red-600 transition"
				>
					<FontAwesomeIcon icon={faTrash} />
					Delete Item
				</button>

				{/* Go Back Button */}
				<button
					onClick={() => navigate(-1)}
					className="w-full bg-gray-500 text-white py-2 mt-2 rounded-md hover:bg-gray-600 transition"
				>
					<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
					Go Back
				</button>
			</div>
		</div>
	);
};

export default SpecificGroceryItem;
