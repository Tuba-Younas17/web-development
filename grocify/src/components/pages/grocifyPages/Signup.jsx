import React, { useState } from "react";
import { handleSubmitforSingup } from "../../../utils/SignUpAndLogin/handleSubmitforSingup.js";

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [isSignedUp, setIsSignedUp] = useState(false); 

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const signupSuccess = await handleSubmitforSingup(
			e,
			formData,
			setIsSignedUp
		);
		if (signupSuccess) {
			setIsSignedUp(true); 
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
					<div className="mb-4">
						<label className="block text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<button
						type="submit"
						className={`w-full text-white py-2 rounded-lg transition ${
							isSignedUp
								? "bg-gray-400 cursor-not-allowed"
								: "bg-blue-500 hover:bg-blue-600"
						}`}
						disabled={isSignedUp} 
					>
						{isSignedUp ? "Signup Successful" : "Sign Up"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
