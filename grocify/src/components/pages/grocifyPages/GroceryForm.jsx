import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSubmit } from "../../../utils/fetchGroceryDataFromMongoDb/addGroceryItem";

const GroceryForm = () => {
	const [file, setFile] = useState(null);

	const onDrop = useCallback((acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			setFile(acceptedFiles[0]);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		multiple: false,
	});

	const formik = useFormik({
		initialValues: {
			title: "",
			price: "",
			quantity: "",
			description: "",
			discount: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is required"),
			price: Yup.number().required("Price is required"),
			quantity: Yup.string().required("Quantity is required"),
			description: Yup.string().required("Description is required"),
			discount: Yup.number().min(0, "Discount must be >= 0"),
		}),
	
		onSubmit: async (values, { resetForm }) => {
			if (!file) {
				alert("Please upload an image.");
				return;
			}
			await handleSubmit({ preventDefault: () => {} }, values, file);

			// Reset form fields and file input
			resetForm();
			setFile(null);
		},
	});

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-80">
				<h2 className="text-xl font-semibold text-center mb-4">
					Add Grocery Item
				</h2>
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col gap-3"
				>
					<input
						type="text"
						name="title"
						placeholder="Item Name"
						onChange={formik.handleChange}
						value={formik.values.title}
						className="p-2 border rounded"
					/>
					{formik.touched.title && formik.errors.title && (
						<p className="text-red-500 text-sm">
							{formik.errors.title}
						</p>
					)}

					<input
						type="number"
						name="price"
						placeholder="Price"
						onChange={formik.handleChange}
						value={formik.values.price}
						className="p-2 border rounded"
					/>
					{formik.touched.price && formik.errors.price && (
						<p className="text-red-500 text-sm">
							{formik.errors.price}
						</p>
					)}

					<input
						type="text"
						name="quantity"
						placeholder="Quantity"
						onChange={formik.handleChange}
						value={formik.values.quantity}
						className="p-2 border rounded"
					/>
					{formik.touched.quantity && formik.errors.quantity && (
						<p className="text-red-500 text-sm">
							{formik.errors.quantity}
						</p>
					)}

					<input
						type="text"
						name="description"
						placeholder="Description"
						onChange={formik.handleChange}
						value={formik.values.description}
						className="p-2 border rounded"
					/>
					{formik.touched.description &&
						formik.errors.description && (
							<p className="text-red-500 text-sm">
								{formik.errors.description}
							</p>
						)}

					<input
						type="number"
						name="discount"
						placeholder="Discount"
						onChange={formik.handleChange}
						value={formik.values.discount}
						className="p-2 border rounded"
					/>
					{formik.touched.discount && formik.errors.discount && (
						<p className="text-red-500 text-sm">
							{formik.errors.discount}
						</p>
					)}

					{/* Dropzone for image */}
					<div
						{...getRootProps()}
						className="p-4 border-2 border-dashed rounded text-center cursor-pointer hover:bg-gray-100 text-gray-500"
					>
						<input {...getInputProps()} />
						{isDragActive ? (
							<p>Drop the image here...</p>
						) : file ? (
							<p>{file.name}</p>
						) : (
							<p>Drag & drop image here, or click to select</p>
						)}
					</div>

					<button
						type="submit"
						className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
					>
						Add Item
					</button>
				</form>
			</div>
		</div>
	);
};

export default GroceryForm;
