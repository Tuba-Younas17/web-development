import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSubmitforSingup } from "../../../utils/signUpAndLoginUtils/handleSubmitforSingup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone"; // Import useDropzone
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	// Dropzone hook for image upload
	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (acceptedFiles) => {
			if (acceptedFiles.length > 0) {
				const file = acceptedFiles[0];
				setSelectedImage(file);
				formik.setFieldValue("image", file); // Update Formik field
			}
		},
		accept: "image/*", // Only accept image files
		maxFiles: 1, // Only allow one file to be uploaded
	});

	// Formik hook for managing form state
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			bio: "",
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
			// bio: Yup.string()
			// 	.min(10, "Bio must be at least 10 characters")
			// 	.required("Bio is required"),
			// image: Yup.mixed()
			// 	.test("fileSize", "Image size is too large", (value) => {
			// 		return !value || value.size <= 2 * 1024 * 1024; // 2MB
			// 	})
			// 	.test("fileType", "Unsupported file format", (value) => {
			// 		return (
			// 			!value ||
			// 			["image/jpeg", "image/png", "image/jpg"].includes(
			// 				value.type
			// 			)
			// 		);
			// 	}),
		}),
		onSubmit: async (values, { setErrors }) => {
			const formData = new FormData();
			formData.append("name", values.name);
			formData.append("email", values.email);
			formData.append("password", values.password);
			

			if (selectedImage) {
				formData.append("profileImage", selectedImage); // Use state instead of formik
			}

			if (values.bio) {
				formData.append("bio", values.bio);
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

						<div className="mb-4">
							<label className="block text-gray-700 mb-1">
								Bio
							</label>
							{/* <CKEditor
								editor={ClassicEditor}
								data={formik.values.bio}
								onChange={(event, editor) => {
									const data = editor.getData();
									formik.setFieldValue("bio", data);
									formik.setTouched({ bio: true });
								}}
							/> */}
							<CKEditor
								editor={ClassicEditor}
								data={formik.values.bio}
								config={{
									simpleUpload: {
										uploadUrl:
											"http://localhost:5000/uploads/uploadImage/upload-image",
									},
								}}
								onChange={(event, editor) => {
									const data = editor.getData();
									formik.setFieldValue("bio", data);
									formik.setTouched({ bio: true });
								}}
							/>
							{formik.touched.bio && formik.errors.bio && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.bio}
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
							{formik.touched.image && formik.errors.image && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.image}
								</p>
							)}
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
