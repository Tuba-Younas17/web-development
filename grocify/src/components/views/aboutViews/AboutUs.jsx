import React from "react";

const AboutUs = ({ aboutData }) => {
	return (
		<section className="py-12 bg-gray-500  bg-[url('/src/assets/Image.png')] text-gray-200">
			<div className="container mx-auto px-4 ">
				<div className="text-center">
					<h2 className="text-4xl font-extrabold text-white mb-4">
						About Us
					</h2>
					<p className="text-lg text-white-300">
						Discover who we are and what drives us to serve you
						better.
					</p>
				</div>

				{/* Vision, Mission, and Values */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
					{aboutData.map((section, index) => (
						<div
							key={index}
							className="bg-green-50 p-6 rounded-lg shadow-sm hover:scale-110"
						>
							<h3 className="text-2xl font-semibold text-green-700 mb-4">
								{section.heading}
							</h3>
							{section.isList ? (
								<ul className="list-disc list-inside text-gray-600 space-y-2">
									{section.content.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							) : (
								<p className="text-gray-600">
									{section.content}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
