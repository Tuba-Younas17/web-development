"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Password is required"),
		}),
		onSubmit: async (values) => {
			try {
				const { data } = await axios.post("/api/auth/login", values);

				// ✅ Save token to localStorage
				if (data.token) {
					localStorage.setItem("token", data.token);
				}

				toast.success(data.message);
				setTimeout(() => {
					router.push("/");
				}, 2000);
			} catch (err) {
				const errorData = err.response?.data;
				if (err.response?.status === 404 && errorData?.redirectTo) {
					toast.warning(errorData.error);
					setTimeout(() => {
						router.push(errorData.redirectTo);
					}, 2000);
				} else {
					toast.error(errorData?.error || "Something went wrong");
				}
			}
		},
	});

	return (
		<>
			<form className="space-y-6" onSubmit={formik.handleSubmit}>
				{/* Email Field */}
				<div>
					<label className="block text-gray-700 mb-2" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

				{/* Password Field */}
				<div>
					<label
						className="block text-gray-700 mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold transition-all"
				>
					Sign In
				</button>
			</form>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
			/>
		</>
	);
};

export default LoginForm;
