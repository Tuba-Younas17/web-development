import React from 'react'
import { Link } from 'react-router-dom';

const VerifySuccess = () => {
  
   	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
				<h2 className="text-2xl font-semibold text-green-600 mb-4">
					Email Verified Successfully!
				</h2>
				<p className="text-gray-700 mb-6">
					Your account has been successfully verified. You can now log in.
				</p>
				<Link
					to="/auth/login"
					className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition inline-block"
				>
					Login
				</Link>
			</div>
		</div>
	);

}

export default VerifySuccess