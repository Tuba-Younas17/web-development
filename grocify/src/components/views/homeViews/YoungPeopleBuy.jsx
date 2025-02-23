import React from "react";

const YoungPeopleBuy = ({title, products,addToCart }) => {
	return (
		<div className="p-8 bg-indigo-100 rounded-md mt-7">
			<h2 className="text-3xl font-bold mb-6 text-red-600">
				{title}
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Map over products and generate product cards */}
				{products.map(
					(
						{ src, alt, title, quantity, salePrice, button },
						index
					) => (
						<div
							key={index}
							className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
						>
							<img
								src={src}
								alt={alt}
								className="h-40 w-full object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-bold mt-4">{title}</h3>
							<p className="text-sm text-gray-500">{quantity}</p>
							<div className="flex items-center justify-between mt-2">
								<span className="text-lg font-bold text-gray-800">
									{salePrice}
								</span>
							</div>
							<button 
							onClick={addToCart} 
							className="btn w-full mt-4 h-12 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 transition-colors">
								{button}
							</button>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default YoungPeopleBuy;
