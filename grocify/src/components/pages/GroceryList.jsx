import React, { useEffect, useState } from "react";
import axios from "axios";

const GroceryList = () => {
	const [groceries, setGroceries] = useState([]);

	useEffect(() => {
		const fetchGroceries = async () => {
			try {
				const response = await axios.get(
					"http://127.0.0.1:3000/api/v1/admin/get_grocery_items"
				);
				setGroceries(response.data);
			} catch (error) {
				console.error("Error fetching groceries:", error);
			}
		};

		fetchGroceries();
	}, []);

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
