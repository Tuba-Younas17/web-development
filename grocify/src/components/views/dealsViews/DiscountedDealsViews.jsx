import React from "react";

const DiscountedDeals = ({ deals ,addToCart}) => {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-4xl mt-4 font-bold mb-4 text-center">
				Discounted Deals
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{deals.map((deal) => (
					<div
						key={deal.id}
						className="border p-6 rounded shadow-lg flex flex-col justify-between min-h-[280px]"
					>
						<div>
							<h3 className="text-xl font-semibold">
								{deal.name}
							</h3>
							<p className="text-gray-600">{deal.description}</p>
							<p className="text-green-500 font-bold">
								Total Price: Rs. {deal.totalprice}
							</p>
							<ul className="mt-2 space-y-1">
								{deal.items.map((item, index) => (
									<li key={index} className="text-gray-700">
										{item.name} - {item.quantity}
									</li>
								))}
							</ul>
						</div>
						<button 
						onClick={addToCart}
						className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition self-center w-full md:w-auto">
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default DiscountedDeals;
