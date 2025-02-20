import React from "react";
const Description = () => {
	return (
		<>
			<div className="bg-gray-900 text-white mt-4 max-w-xlg p-10 rounded-lg">
				<h1 className="text-6xl font-semibold leading-normal">
					Groceries <br />
					Deliver in
					<span className="font-light"> 15 minutes </span>
				</h1>
				<p>
					Grocify offers a wide range of products, including fresh
					products, meat,
					<br />
					dairy, baked goods, and non-perishable items.
				</p>
				<div className="mt-10">
					<a
						href="#"
						className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"
					>
						Order Now
					</a>
					<a
						href="#"
						className="ml-4 text-yellow-300 hover:underline"
					>
						Download App <span className="text-lg">↓</span>
					</a>
				</div>
			</div>
			<div className="relative ">
				<img
					src="./src/assets/grocery-image.png"
					className="w-1/4 xl:w-1/3 h-96 xl:absolute bottom-0 right-0 object-contain hidden sm:block "
					alt="Grocery Image"
				/>
			</div>
		</>
	);
};

export default Description;
