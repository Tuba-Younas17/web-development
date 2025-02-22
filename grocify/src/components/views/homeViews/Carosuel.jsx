import React from "react";

const Carosuel = ({ images }) => {
	return (
		<div
			id="default-carousel"
			className="relative w-full mt-4"
			data-carousel="slide"
		>
			{/* Carousel wrapper */}
			<div className="relative overflow-hidden rounded-lg h-48 sm:h-64 md:h-80 lg:h-96">
				{images.map((image, index) => (
					<div
						key={index}
						className="duration-700 ease-in-out"
						data-carousel-item=""
					>
						<img
							src={image.src}
							className="absolute block w-full h-full object-cover"
							alt={image.alt}
						/>
					</div>
				))}
			</div>

			{/* Slider indicators */}
			<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
				{images.map((image, index) => (
					<button
						key={index}
						type="button"
						className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
						aria-label={`Slide ${index + 1}`}
						data-carousel-slide-to={index}
					/>
				))}
			</div>

			{/* Slider controls */}
			<button
				type="button"
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-prev=""
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
					<svg
						className="w-4 h-4 text-white"
						viewBox="0 0 6 10"
						fill="none"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-next=""
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
					<svg
						className="w-4 h-4 text-white"
						viewBox="0 0 6 10"
						fill="none"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};

export default Carosuel;
