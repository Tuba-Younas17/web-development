
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { handleSubmitForLogIn } from "../../utils/signUpAndLoginUtils/handleSubmitForLogIn.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
	const navigate = useNavigate();

	// Handle input change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Toggle password visibility
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		handleSubmitForLogIn(navigate, formData);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-4">
					Login
				</h2>

				<form onSubmit={handleSubmit}>
					{/* Email Input */}
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

					{/* Password Input with Eye Icon */}
					<div className="mb-4 relative">
						<label className="block text-gray-700">Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
							required
						/>
						<span
							className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
							onClick={togglePassword}
						>
							<FontAwesomeIcon
								icon={showPassword ? faEyeSlash : faEye}
							/>
						</span>
					</div>

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
