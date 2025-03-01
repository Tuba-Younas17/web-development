import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../../reduxToolkit/features/counter/counterSlice";


const ExclusiveDeals = ({ deals }) => {
	const dispatch = useDispatch();
	return (
		<div className="  bg-[url('/src/assets/Image.png')] mx-auto p-4">
			<h2 className="text-4xl mt-4 font-bold text-white mb-8 text-center">
				Exclusive Deals
			</h2>
			<div className="flex flex-wrap justify-around gap-8">
				{deals.map((deal) => (
					<div
						key={deal.id}
						className="border p-6 rounded-lg shadow-lg bg-white w-5/12 min-h-[250px] flex flex-col justify-between"
					>
						<div>
							<h3 className="text-xl font-semibold">
								{deal.name}
							</h3>
							<p className="text-green-500 font-bold">
								Total Price: Rs. {deal.totalprice}
							</p>
							<ul className="mt-2 space-y-1">
								{deal.items.map((item, index) => (
									<li key={index} className="text-gray-700">
										<span className="font-semibold">
											{item.name}
										</span>{" "}
										- {item.model} ({item.price})
									</li>
								))}
							</ul>
						</div>
						<button
							// onClick={addToCart}
							onClick={() => dispatch(increment())}
							className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition self-center"
						>
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExclusiveDeals;
