import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SkeletonLoader from "../../Layout/SkeletonLoader";

const VendorComponent = () => {
	const [vendors, setVendors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchVendors = async () => {
			try {
				setLoading(true);
				const response = await axios.get(
					"http://127.0.0.1:5000/api/v1/vendor/get-vendors"
				);
				setVendors(response.data);
			} catch (err) {
				setError("Failed to fetch vendors");
			} finally {
				setLoading(false);
			}
		};

		fetchVendors();
	}, []);

	const handleDeleteVendor = async (id) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this vendor?"
		);
		if (!confirmDelete) return;

		try {
			await axios.delete(
				`http://127.0.0.1:5000/api/v1/vendor/delete-vendor/${id}`
			);
			setVendors(vendors.filter((vendor) => vendor._id !== id));
		} catch (err) {
			setError("Failed to delete vendor");
		}
	};

	const handleUpdateVendor = (id) => {
		navigate(`/update-vendor/${id}`);
	};

	if (loading) return <SkeletonLoader />;
	if (error)
		return <div className="text-red-500 text-center mt-4">{error}</div>;

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<main className="flex-grow p-4">
				<h1 className="text-3xl font-semibold text-center mb-6">
					Vendor List
				</h1>

				<div className="flex justify-center mb-6">
					<button
						onClick={() => navigate("/add-vendor")}
						className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
					>
						Add Vendor
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{vendors.map((vendor) => (
						<div
							key={vendor._id}
							className="bg-white p-4 shadow rounded-xl"
						>
							<h2 className="text-xl font-bold mb-2">
								{vendor.name}
							</h2>
							<p className="text-gray-700">
								Business Name: {vendor.businessName}
							</p>
							<p className="text-gray-700">
								Email: {vendor.email}
							</p>

							<div className="flex gap-2 mt-4">
								<button
									onClick={() =>
										handleUpdateVendor(vendor._id)
									}
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
								>
									Update
								</button>
								<button
									onClick={() =>
										handleDeleteVendor(vendor._id)
									}
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

export default VendorComponent;
