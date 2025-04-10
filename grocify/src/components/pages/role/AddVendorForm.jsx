import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddVendorForm = () => {
	const navigate = useNavigate();

	const initialValues = {
		name: "",
		businessName: "",
		email: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		businessName: Yup.string().required("Business Name is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
	});

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await axios.post(
				"http://127.0.0.1:5000/api/v1/vendor/add-vendor",
				values
			);
			resetForm();
			navigate("/vendor"); // Redirect back to Vendor list page
		} catch (error) {
			console.error("Error adding vendor:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Add New Vendor
				</h2>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form className="space-y-4">
						<div>
							<label className="block font-semibold mb-1">
								Name
							</label>
							<Field
								type="text"
								name="name"
								className="w-full p-2 border border-gray-300 rounded"
							/>
							<ErrorMessage
								name="name"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-1">
								Business Name
							</label>
							<Field
								type="text"
								name="businessName"
								className="w-full p-2 border border-gray-300 rounded"
							/>
							<ErrorMessage
								name="businessName"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-1">
								Email
							</label>
							<Field
								type="email"
								name="email"
								className="w-full p-2 border border-gray-300 rounded"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
						>
							Add Vendor
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default AddVendorForm;
