
import React from "react";

const LoginPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
					Login
				</h2>

				<form className="space-y-6">
					<div>
						<label
							className="block text-gray-700 mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
							placeholder="you@example.com"
							required
						/>
					</div>

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
							className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
							placeholder="********"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold transition-all"
					>
						Sign In
					</button>
				</form>

				<p className="mt-6 text-gray-600 text-sm text-center">
					Don't have an account?{" "}
					<a
						href="/register"
						className="text-indigo-600 hover:underline"
					>
						Sign Up
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
