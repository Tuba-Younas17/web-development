
import React from "react";

const DashboardPage = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
			<h1 className="text-4xl font-bold text-indigo-600 mb-6">
				Dashboard
			</h1>
			<p className="text-lg text-gray-700 max-w-3xl text-center mb-8">
				Welcome back to your learning dashboard! 📚 Here you can track
				your course progress, manage your profile, and discover new
				opportunities to grow your skills.
			</p>

			{/* Dummy dashboard stats (can be dynamic later) */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
				<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center">
					<h2 className="text-2xl font-semibold text-indigo-500">
						5
					</h2>
					<p className="text-gray-600 mt-2">Courses Enrolled</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center">
					<h2 className="text-2xl font-semibold text-indigo-500">
						3
					</h2>
					<p className="text-gray-600 mt-2">Certificates Earned</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center">
					<h2 className="text-2xl font-semibold text-indigo-500">
						12h
					</h2>
					<p className="text-gray-600 mt-2">Hours Spent Learning</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
