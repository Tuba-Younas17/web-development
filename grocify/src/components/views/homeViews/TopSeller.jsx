import { useDispatch } from "react-redux";
import { increment } from "../../../features/counter/counterSlice";


const TopSeller = ({ title, data}) => {
	const dispatch = useDispatch()
	return (
		<div className="p-8 bg-indigo-100 rounded-md mt-7">
			<h2 className="text-3xl font-bold mb-6 text-red-600">{title}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{data.map(
					(
						{
							src,
							alt,
							title,
							quantity,
							salePrice,
							originalPrice,
							discountOff,
							button,
						},
						index
					) => (
						<div
							key={index}
							className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105"
						>
							<img
								src={src}
								alt={alt}
								className="h-40 w-full object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-bold">{title}</h3>
							<p className="text-sm text-gray-500">{quantity}</p>
							<div className="flex items-center justify-between mt-2">
								<span className="text-lg font-bold text-gray-800">
									{salePrice}
								</span>
								<span className="text-sm line-through text-gray-400">
									{originalPrice}
								</span>
							</div>
							<span className="text-sm font-semibold text-white bg-red-500 rounded-full px-2 py-1 mt-2 inline-block">
								{discountOff}
							</span>
							<button
								// onClick={addToCart}
								onClick={() => dispatch(increment())}
								className="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-800 transition-colors"
							>
								{button}
							</button>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default TopSeller;
