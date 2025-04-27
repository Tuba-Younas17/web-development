
import React from "react";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
			<h1 className="text-4xl font-bold text-indigo-600 mb-6">
				About SkillForge
			</h1>
			<p className="text-lg text-gray-700 max-w-3xl text-center mb-8">
				Welcome to{" "}
				<span className="font-semibold text-indigo-500">
					SkillForge
				</span>
				! 🚀 We are a modern online learning platform dedicated to
				empowering individuals with the skills they need to thrive in
				today's fast-paced world. Whether you're looking to become a web
				developer, dive into data science, or explore UI/UX design,
				we’ve got you covered with high-quality courses taught by
				industry experts.
			</p>
			<p className="text-md text-gray-600 max-w-2xl text-center">
				Our mission is to make education accessible, engaging, and
				effective for everyone, everywhere. 🌍 Join thousands of
				learners who have transformed their careers with SkillForge!
			</p>
		</div>
	);
};

export default AboutPage;
