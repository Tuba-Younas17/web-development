import React, { useState } from "react";
import { handleSubmitforSingup } from "../../../utils/signUpAndLoginUtils/handleSubmitforSingup.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false); // Password visibility state

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const signupSuccess = await handleSubmitforSingup(
			e,
			formData,
		);
		if (signupSuccess) {
			navigate("/auth/login");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Signup
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div className="mb-4 relative">
						<label className="block text-gray-700">Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
								required
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
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
