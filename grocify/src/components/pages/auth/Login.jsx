import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSubmitForLogIn } from "../../../utils/signUpAndLoginUtils/handleSubmitForLogIn.js";
import { roleOptions } from "../../../constants/roleOptions.js";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const togglePassword = () => setShowPassword(!showPassword);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			role: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email format")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be at least 6 characters")
				.required("Password is required"),
			role: Yup.string().required("Role is required"),
		}),
		onSubmit: async (values) => {
			handleSubmitForLogIn(navigate, values);
		},
	});

	const handleRoleChange = (selectedOption) => {
		formik.setFieldValue("role", selectedOption?.value || "");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Login
				</h2>

				<form onSubmit={formik.handleSubmit}>
					{/* Email Input */}
					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
						/>
						{formik.touched.email && formik.errors.email && (
							<p className="text-red-500 text-sm">
								{formik.errors.email}
							</p>
						)}
					</div>

					{/* Password Input */}
					<div className="mb-4 relative">
						<label className="block text-gray-700">Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
						/>
						<span
							className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
							onClick={togglePassword}
						>
							<FontAwesomeIcon
								icon={showPassword ? faEyeSlash : faEye}
							/>
						</span>
						{formik.touched.password && formik.errors.password && (
							<p className="text-red-500 text-sm">
								{formik.errors.password}
							</p>
						)}
					</div>

					{/* Role Dropdown */}
					<div className="mb-4">
						<label className="block text-gray-700 mb-1">
							Select Role
						</label>
						<Select
							options={roleOptions}
							onChange={handleRoleChange}
							onBlur={() => formik.setFieldTouched("role", true)}
							placeholder="Choose a role"
							className="text-left"
						/>
						{formik.touched.role && formik.errors.role && (
							<p className="text-red-500 text-sm">
								{formik.errors.role}
							</p>
						)}
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
