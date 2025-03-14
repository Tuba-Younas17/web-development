import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getGroceryDetails } from "../../../utils/fetchGroceryDataFromMongoDb/getGroceryDetailsOFSpcificId.js";
import { updateGroceryItem } from "../../../utils/fetchGroceryDataFromMongoDb/updateGroceryItem.js";


const UpdateItemById = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [grocery, setGrocery] = useState({
		title: "",
		description: "",
		price: "",
		quantity: "",
		discount: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Use getGroceryDetails function to fetch grocery item
	useEffect(() => {
		getGroceryDetails(setLoading, id, setGrocery, setError);
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setGrocery((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		updateGroceryItem(id, grocery, navigate);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Edit Grocery Item
				</h2>

				{loading && (
					<p className="text-center text-gray-500">Loading...</p>
				)}
				{error && <p className="text-center text-red-500">{error}</p>}

				{!loading && !error && (
					<form onSubmit={handleSubmit}>
						<label className="block mb-2">Title:</label>
						<input
							type="text"
							name="title"
							value={grocery.title}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						/>

						<label className="block mt-2">Description:</label>
						<textarea
							name="description"
							value={grocery.description}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						/>

						<label className="block mt-2">Price:</label>
						<input
							type="number"
							name="price"
							value={grocery.price}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						/>

						<label className="block mt-2">Quantity:</label>
						<input
							type="number"
							name="quantity"
							value={grocery.quantity}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						/>

						<label className="block mt-2">Discount:</label>
						<input
							type="number"
							name="discount"
							value={grocery.discount}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						/>

						<button
							type="submit"
							className="w-full bg-green-500 text-white py-2 mt-4 rounded-md hover:bg-green-600 transition flex items-center justify-center"
						>
							<FontAwesomeIcon icon={faSave} className="mr-2" />
							Update Item
						</button>

						{/* Back Button */}
						<button
							onClick={() => navigate(-1)}
							className="w-full bg-gray-500 text-white py-2 mt-2 rounded-md hover:bg-gray-600 transition flex items-center justify-center"
						>
							<FontAwesomeIcon
								icon={faArrowLeft}
								className="mr-2"
							/>
							Go Back
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default UpdateItemById;
