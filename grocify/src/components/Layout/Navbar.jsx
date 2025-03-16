import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const count = useSelector((state) => state.counter.value);

	return (
		<>
			<nav className="flex items-center justify-between bg-gray-900 text-gray-200 py-4 px-6">
				{/* Logo */}
				<img
					src="./src/assets/navbarImages/logo.png"
					className="w-40 cursor-pointer"
					alt="Logo"
				/>

				{/* Navigation Links */}
				<ul className="flex-1 text-center  ">
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Home
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/about"
							className="no-underline hover:text-yellow-400 px-2"
						>
							About
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/features"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Features
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/deals"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Deals
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/tracking"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Tracking
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/dictionary"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Dictionary
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/weather"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Weather Prediction
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/add-grocery"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Add Grocery
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/get-grocery"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Grocery List
						</Link>
					</li>
					<li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
						<Link
							to="/game"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Game
						</Link>
					</li>
				</ul>

				{/* Cart and Signup Section */}
				<div className="flex items-center space-x-4">

					<div className="flex items-center space-x-2">
						<img
							src="./src/assets/navbarImages/cart.png"
							className="w-8 cursor-pointer"
							alt="Cart"
						/>
						<p id="count" className="text-yellow-400 font-bold">
							{count}
						</p>
					</div>

					<Link
						to="/signup"
						className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
					>
						Sign Up
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
