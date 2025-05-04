"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Invalid email")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "At least 6 characters")
				.required("Password is required"),
		}),

		onSubmit: async (values, { resetForm }) => {
			try {
				const { data } = await axios.post("/api/register", values); // ✅ axios auto sets headers
				alert(data.message);
				resetForm();
			} catch (err) {
				alert(err.response?.data?.error || "Something went wrong");
			}
		},
	});

	return (
		<form className="space-y-6" onSubmit={formik.handleSubmit}>
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

			<div>
				<label htmlFor="password" className="block text-gray-700 mb-2">
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

			<button
				type="submit"
				className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold"
			>
				Register
			</button>
		</form>
	);
};

export default RegisterForm;
