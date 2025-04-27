import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
				<section className="text-center">
					<h1 className="text-5xl font-bold text-indigo-600 mb-6">
						Unlock Your Potential with SkillForge
					</h1>
					<p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
						Master new skills, achieve your goals, and learn from
						the best instructors online. Start your journey today
						with SkillForge!
					</p>

					<div className="flex flex-wrap justify-center gap-6">
						<Link href="/courses">
							<p className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full">
								Browse Courses
							</p>
						</Link>
						<Link href="/login">
							<p className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full">
								Get Started
							</p>
						</Link>
					</div>
				</section>

				{/* Featured Courses Section (Optional) */}
				<section className="mt-16 w-full max-w-6xl">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
						Featured Courses
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Course Card */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
							<h3 className="text-xl font-semibold mb-4">
								Web Development
							</h3>
							<p className="text-gray-600 mb-4">
								Learn to build modern websites with HTML, CSS,
								JavaScript, and React.
							</p>
							<Link href="/courses">
								<p className="text-indigo-600 hover:underline">
									Explore
								</p>
							</Link>
						</div>

						<div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
							<h3 className="text-xl font-semibold mb-4">
								Data Science
							</h3>
							<p className="text-gray-600 mb-4">
								Master Python, Machine Learning, and AI with
								real-world projects.
							</p>
							<Link href="/courses">
								<p className="text-indigo-600 hover:underline">
									Explore
								</p>
							</Link>
						</div>

						<div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
							<h3 className="text-xl font-semibold mb-4">
								UI/UX Design
							</h3>
							<p className="text-gray-600 mb-4">
								Design beautiful and user-friendly applications
								and websites.
							</p>
							<Link href="/courses">
								<p className="text-indigo-600 hover:underline">
									Explore
								</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Page;
