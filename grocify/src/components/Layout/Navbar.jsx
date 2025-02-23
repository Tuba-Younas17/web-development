import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
	return (
		<>
			<nav className="flex items-center bg-gray-900 text-gray-200 py-4 px-6">
				<img
					src="./src/assets/navbarImages/logo.png"
					className="w-40 cursor-pointer"
					alt="Logo"
				/>
				<ul className="flex-1 text-center">
					<li className="list-none inline-block px-5">
						<Link
							to="/"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Home
						</Link>
					</li>
					<li className=" list-none inline-block px-5">
						<Link
							to="/about"
							className="no-underline hover:text-yellow-400 px-2"
						>
							About
						</Link>
					</li>
					<li className="list-none inline-block px-5">
						<Link
							to="/features"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Features
						</Link>
					</li>
					<li className="list-none inline-block px-5">
						<Link
							to="/deals"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Deals
						</Link>
					</li>
					<li className="list-none inline-block px-5">
						<Link
							to="/tracking"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Tracking
						</Link>
					</li>
					<li className="list-none inline-block px-5">
						<Link
							to="/dictionary"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Dictionary
						</Link>
					</li>
					<li className="list-none inline-block px-5">
						<Link
							to="/weather"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Weather Prediction
						</Link>
					</li>

					<li className="list-none inline-block px-5">
						<Link
							to="/game"
							className="no-underline hover:text-yellow-400 px-2"
						>
							Game
						</Link>
					</li>
					
				</ul>
				<div className="flex items-center space-x-2">
					<img
						src="./src/assets/navbarImages/cart.png"
						className="w-8 cursor-pointer"
						alt="Cart"
					/>
					<p id="count" className="text-yellow-400 font-bold">
					{cartCount}
					</p>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
