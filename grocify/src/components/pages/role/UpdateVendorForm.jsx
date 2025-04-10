import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const UpdateVendorForm = () => {
	const { vendorId } = useParams();
	const navigate = useNavigate();
	const [initialValues, setInitialValues] = useState({
		name: "",
		businessName: "",
		email: "",
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch existing vendor data
	useEffect(() => {
		const fetchVendor = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:5000/api/v1/vendor/get-vendor/${vendorId}`
				);
				setInitialValues({
					name: response.data.name,
					businessName: response.data.businessName,
					email: response.data.email,
				});
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch vendor data.");
				setLoading(false);
			}
		};

		fetchVendor();
	}, [vendorId]);

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		businessName: Yup.string().required("Business Name is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
	});

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			await axios.put(
				`http://127.0.0.1:5000/api/v1/vendor/update-vendor/${vendorId}`,
				values
            );
            toast.success("Vendor updated successfully!");

			// ⏳ Delay navigation until after toast
			setTimeout(() => {
				navigate("/vendor");
			}, 1500);
			
		} catch (err) {
			console.error("Error updating vendor:", err);
			setError("Failed to update vendor.");
		} finally {
			setSubmitting(false);
		}
	};

	if (loading) return <div className="text-center mt-8">Loading...</div>;
	if (error)
		return <div className="text-red-500 text-center mt-4">{error}</div>;

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Update Vendor
				</h2>
				<Formik
					enableReinitialize
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form>
						<div className="mb-4">
							<label className="block font-semibold mb-1">
								Name
							</label>
							<Field
								name="name"
								type="text"
								className="w-full border border-gray-300 p-2 rounded"
							/>
							<ErrorMessage
								name="name"
								component="div"
								className="text-red-500 text-sm"
							/>
						</div>

						<div className="mb-4">
							<label className="block font-semibold mb-1">
								Business Name
							</label>
							<Field
								name="businessName"
								type="text"
								className="w-full border border-gray-300 p-2 rounded"
							/>
							<ErrorMessage
								name="businessName"
								component="div"
								className="text-red-500 text-sm"
							/>
						</div>

						<div className="mb-4">
							<label className="block font-semibold mb-1">
								Email
							</label>
							<Field
								name="email"
								type="email"
								className="w-full border border-gray-300 p-2 rounded"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-sm"
							/>
						</div>

						<div className="flex justify-center gap-4">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
							>
								Update Vendor
							</button>
							<button
								type="button"
								className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
								onClick={() => navigate("/vendor")}
							>
								Cancel
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default UpdateVendorForm;
