import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitReview } from "../../../utils/reviewUtils/submitReview";

const AddReview = () => {
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			userName: "",
			productName: "",
			rating: 1,
			comment: "",
		},
		validationSchema: Yup.object({
			userName: Yup.string().required("Name is required"),
			productName: Yup.string().required("Product name is required"),
			rating: Yup.number()
				.min(1, "Minimum rating is 1")
				.max(5, "Maximum rating is 5")
				.required("Rating is required"),
			comment: Yup.string().required("Comment is required"),
		}),
		onSubmit: (values) => {
			submitReview(values, setMessage, navigate);
		},
	});

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Write a Review
				</h2>
				<form onSubmit={formik.handleSubmit} className="space-y-4">
					<input
						type="text"
						name="userName"
						placeholder="Your Name"
						value={formik.values.userName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="w-full p-3 border rounded-md"
					/>
					{formik.touched.userName && formik.errors.userName && (
						<p className="text-sm text-red-500">
							{formik.errors.userName}
						</p>
					)}

					<input
						type="text"
						name="productName"
						placeholder="Product Name"
						value={formik.values.productName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="w-full p-3 border rounded-md"
					/>
					{formik.touched.productName &&
						formik.errors.productName && (
							<p className="text-sm text-red-500">
								{formik.errors.productName}
							</p>
						)}

					<select
						name="rating"
						value={formik.values.rating}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="w-full p-3 border rounded-md"
					>
						{[1, 2, 3, 4, 5].map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
					{formik.touched.rating && formik.errors.rating && (
						<p className="text-sm text-red-500">
							{formik.errors.rating}
						</p>
					)}

					<textarea
						name="comment"
						placeholder="Your Comment"
						value={formik.values.comment}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="w-full p-3 border rounded-md"
					/>
					{formik.touched.comment && formik.errors.comment && (
						<p className="text-sm text-red-500">
							{formik.errors.comment}
						</p>
					)}

					<button
						type="submit"
						className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
					>
						Submit
					</button>
				</form>
				{message && (
					<p className="text-center mt-4 text-sm text-green-600">
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default AddReview;
