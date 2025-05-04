"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const courseOptions = [
	{ value: "Web Development", label: "Web Development" },
	{ value: "Database", label: "Database" },
	{ value: "Web Mobile", label: "Web Mobile" },
];

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			age: "",
			courses: [],
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Invalid email")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "At least 6 characters")
				.required("Password is required"),
			age: Yup.number()
				.typeError("Age must be a number")
				.min(10, "Minimum age is 10")
				.required("Age is required"),
			courses: Yup.array()
				.min(1, "Select at least one course")
				.required("Courses are required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				const { data } = await axios.post("/api/auth/register", values);
				toast.success(data.message);
				resetForm();
			} catch (err) {
				const errorData = err.response?.data;
				if (err.response?.status === 409 && errorData?.redirectTo) {
					toast.warning(errorData.error);
					setTimeout(() => {
						window.location.href = errorData.redirectTo;
					}, 2000);
				} else {
					toast.error(errorData?.error || "Something went wrong");
				}
			}
		},
	});
	

	const handleCoursesChange = (event) => {
		const selectedOptions = Array.from(event.target.selectedOptions).map(
			(option) => option.value
		);
		formik.setFieldValue("courses", selectedOptions);
	};

	return (
		<>
			<form className="space-y-6" onSubmit={formik.handleSubmit}>
				{/* Name */}
				<div>
					<label htmlFor="name" className="block text-gray-700 mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full border border-gray-300 p-3 rounded-lg"
						placeholder="Your Name"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name && (
						<p className="text-sm text-red-600 mt-1">
							{formik.errors.name}
						</p>
					)}
				</div>

				{/* Email */}
				<div>
					<label htmlFor="email" className="block text-gray-700 mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full border border-gray-300 p-3 rounded-lg"
						placeholder="you@example.com"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email && (
						<p className="text-sm text-red-600 mt-1">
							{formik.errors.email}
						</p>
					)}
				</div>

				{/* Password */}
				<div>
					<label
						htmlFor="password"
						className="block text-gray-700 mb-2"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="w-full border border-gray-300 p-3 rounded-lg"
						placeholder="********"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password && (
						<p className="text-sm text-red-600 mt-1">
							{formik.errors.password}
						</p>
					)}
				</div>

				{/* Age */}
				<div>
					<label htmlFor="age" className="block text-gray-700 mb-2">
						Age
					</label>
					<input
						type="number"
						id="age"
						name="age"
						className="w-full border border-gray-300 p-3 rounded-lg"
						placeholder="Your Age"
						value={formik.values.age}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.age && formik.errors.age && (
						<p className="text-sm text-red-600 mt-1">
							{formik.errors.age}
						</p>
					)}
				</div>

				{/* Courses */}
				<div>
					<label
						htmlFor="courses"
						className="block text-gray-700 mb-2"
					>
						Select Courses
					</label>
					<select
						id="courses"
						name="courses"
						multiple
						className="w-full border border-gray-300 p-3 rounded-lg"
						value={formik.values.courses}
						onChange={handleCoursesChange}
						onBlur={formik.handleBlur}
					>
						{courseOptions.map((course) => (
							<option key={course.value} value={course.value}>
								{course.label}
							</option>
						))}
					</select>

					{formik.touched.courses && formik.errors.courses && (
						<p className="text-sm text-red-600 mt-1">
							{formik.errors.courses}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold"
				>
					Register
				</button>
			</form>

			{/* Toast Container */}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
			/>
		</>
	);
};

export default RegisterForm;
