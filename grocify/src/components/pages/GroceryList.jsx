import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../Layout/SkeletonLoader";
import { getGroceries } from "../../utils/fetchGroceryDataFromMongoDb/getGroceryDeatilsOfAllItems.js";

const GroceryList = () => {
	const [groceries, setGroceries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Modular function to fetch groceries


	// Fetch data on mount
	useEffect(() => {
		getGroceries(setLoading, setGroceries, setError);
	}, []);

	if (loading) return <SkeletonLoader />; // Show loader when loading
	if (error) return <p className="text-center text-red-500">{error}</p>; // Show error message

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-center mb-6">
					Grocery Items
				</h2>

				{/* Grid layout for items */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{groceries.length > 0 ? (
						groceries.map((item) => (
							<div
								key={item._id}
								className="bg-gray-50 p-4 shadow-md rounded-lg hover:bg-gray-300 hover:cursor-pointer transition"
							>
								<Link
									to={`/get-grocery-items-by-id/${item._id}`}
								>
									<h3 className="text-lg font-bold">
										{item.title}
									</h3>
									<h4 className="text-lg font-semibold">
										{item.description}
									</h4>
									<p className="text-gray-700">
										Price: Rs.{item.price}
									</p>
									<p className="text-gray-700">
										Quantity: {item.quantity}
									</p>
									<p className="text-gray-700">
										Discount: {item.discount}%
									</p>
								</Link>
							</div>
						))
					) : (
						<p className="text-gray-500 text-center col-span-full">
							No items found.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default GroceryList;
