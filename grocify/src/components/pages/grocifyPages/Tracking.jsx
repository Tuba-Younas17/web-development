import React, { useState } from "react";
import { fetchBuyers } from "../../../data/grocifyTrackingData/GrocifyFetchBuyerData";
import { fetchSellers } from "../../../data/grocifyTrackingData/GrocifyFetchSellerData";
import { fetchStock } from "../../../data/grocifyTrackingData/GrocifyFetchStockData";
import { fetchWindowBuyers } from "../../../data/grocifyTrackingData/GrocifyFetchWindowBuyerData";

const Tracking = () => {
	const [data, setData] = useState("Click a button to fetch data.");
	const [loading, setLoading] = useState(false);

	return (
		<div className=" bg-[url('/src/assets/Image.png')] flex justify-center items-center h-screen bg-gray-100">
			<div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
				<h1 className="text-xl font-bold mb-4">
					Product, Buyer, Seller &amp; Window Buyer Information
				</h1>

				{/* Buttons Grid */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					<button
						onClick={() => fetchBuyers(setData, setLoading)}
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
						disabled={loading}
					>
						{loading ? "Loading..." : "Show Buyer Info"}
					</button>

					<button
						onClick={() => fetchStock(setData, setLoading)}
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						disabled={loading}
					>
						{loading ? "Loading..." : "Show Stock"}
					</button>

					<button
						onClick={() => fetchSellers(setData, setLoading)}
						className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
						disabled={loading}
					>
						{loading ? "Loading..." : "Show Seller Info"}
					</button>

					<button
						onClick={() => fetchWindowBuyers(setData, setLoading)}
						className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
						disabled={loading}
					>
						{loading ? "Loading..." : "Show Window Buyer Info"}
					</button>
				</div>

				<ul className="bg-gray-50 p-4 rounded shadow-md">{data}</ul>
			</div>
		</div>
	);
};

export default Tracking;
