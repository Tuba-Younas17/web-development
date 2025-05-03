// app/(auth)/layout.jsx
import React from "react";

const AuthRouteLayout = ({ children }) => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				{children}
			</div>
		</div>
	);
};

export default AuthRouteLayout;
