import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSubmitforSingup } from "../../../utils/signUpAndLoginUtils/handleSubmitforSingup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone"; // Import useDropzone

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleImageDrop = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			setSelectedImage(acceptedFiles[0]); // Set the first file as selected image
		}
	};

	// Dropzone hook
	const { getRootProps, getInputProps } = useDropzone({
		onDrop: handleImageDrop,
		accept: "image/*", // Only accept image files
		maxFiles: 1, // Only allow one file to be uploaded
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(3, "Name must be at least 3 characters")
				.required("Name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Password is required"),
		}),
		onSubmit: async (values, { setErrors }) => {
			const formData = new FormData();
			formData.append("name", values.name);
			formData.append("email", values.email);
			formData.append("password", values.password);

			if (selectedImage) {
				formData.append("image", selectedImage); // Append the image file
			}

			const signupSuccess = await handleSubmitforSingup(
				formData,
				setErrors
			);

			if (signupSuccess) {
				setMessage(
					"Verification email is sent. Please check your inbox."
				);
			}
		},
	});

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Signup
				</h2>

				{message ? (
					<div className="text-center bg-green-100 text-green-700 p-4 rounded-lg mb-4">
						{message}
					</div>
				) : (
					<form onSubmit={formik.handleSubmit}>
						<div className="mb-4">
							<label className="block text-gray-700">Name</label>
							<input
								type="text"
								name="name"
								{...formik.getFieldProps("name")}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
							/>
							{formik.touched.name && formik.errors.name && (
								<p className="text-red-500 text-sm">
									{formik.errors.name}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block text-gray-700">Email</label>
							<input
								type="email"
								name="email"
								{...formik.getFieldProps("email")}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
							/>
							{formik.touched.email && formik.errors.email && (
								<p className="text-red-500 text-sm">
									{formik.errors.email}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block text-gray-700">
								Password
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									{...formik.getFieldProps("password")}
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-3 flex items-center text-gray-600"
									onClick={togglePasswordVisibility}
								>
									<FontAwesomeIcon
										icon={showPassword ? faEyeSlash : faEye}
									/>
								</button>
							</div>
							{formik.touched.password &&
								formik.errors.password && (
									<p className="text-red-500 text-sm">
										{formik.errors.password}
									</p>
								)}
						</div>

						{/* Image Upload with react-dropzone */}
						<div className="mb-4">
							<label className="block text-gray-700">
								Profile Image
							</label>
							<div
								{...getRootProps()}
								className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer"
							>
								<input {...getInputProps()} />
								{selectedImage ? (
									<p className="text-gray-500 text-sm mt-1">
										{selectedImage.name}
									</p>
								) : (
									<p className="text-gray-500 text-sm">
										Drag & drop an image or click to select
									</p>
								)}
							</div>
						</div>

						<button
							type="submit"
							className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition"
						>
							Sign Up
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Signup;
