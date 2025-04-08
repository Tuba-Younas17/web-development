import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../Layout/SkeletonLoader";
import { getGroceries } from "../../../utils/fetchGroceryDataFromMongoDb/getGroceryDeatilsOfAllItems";
import { handleDelete } from "../../../utils/fetchGroceryDataFromMongoDb/deleteGroceryItemById";

const AdminComponent = () => {
	const [groceries, setGroceries] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		getGroceries(setLoading, setGroceries, setError);
	}, []);

	const handleDeleteItem = async (id) => {
		await handleDelete(id, navigate);
		getGroceries(setLoading, setGroceries, setError); // re-fetch
	};

	const handleUpdateItem = (id) => {
		navigate(`/update-grocery-items-by-id/${id}`);
	};

	if (loading) return <SkeletonLoader />;
	if (error)
		return <div className="text-red-500 text-center mt-4">{error}</div>;

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<main className="flex-grow p-4">
				<h1 className="text-3xl font-semibold text-center mb-6">
					Admin Panel - Grocery Items
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{groceries.map((item) => (
						<div
							key={item._id}
							className="bg-white p-4 shadow rounded-xl"
						>
							<h2 className="text-xl font-bold mb-2">
								{item.title}
							</h2>
							<p>{item.description}</p>
							<p className="mt-1 text-gray-700">
								Price: ₹{item.price}
							</p>
							<p className="text-gray-700">
								Quantity: {item.quantity}
							</p>
							<p className="text-gray-700">
								Discount: {item.discount}%
							</p>

							<div className="flex gap-2 mt-4">
								<button
									onClick={() => handleUpdateItem(item._id)}
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
								>
									Update
								</button>
								<button
									onClick={() => handleDeleteItem(item._id)}
									className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default AdminComponent;
