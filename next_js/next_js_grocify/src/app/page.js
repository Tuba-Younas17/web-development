import React from "react";

const Page = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="text-4xl font-bold mb-4">Welcome to Grocify!</h1>
				<p className="text-lg text-gray-700">
					Your one-stop shop for all your grocery needs.
				</p>
				<button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
					Shop Now
				</button>
			</div>
		</>
	);
};

export default Page;
