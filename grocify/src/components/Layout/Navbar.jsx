import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleDarkMode } from "../../reduxToolkit/features/counter/darkModeSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	// Check authentication status on component mount
	useEffect(() => {
		const token = localStorage.getItem("authToken");
		setIsAuthenticated(!!token);
	}, [navigate]);

	// Handle user logout
	const handleLogout = () => {
		localStorage.removeItem("authToken");
		 localStorage.removeItem("user");
		setIsAuthenticated(false);
		navigate("/auth/login"); // Redirect to login page after logout
	};
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);

	const handleToggle = () => {
		dispatch(toggleDarkMode());
	};

	return (
		<nav className="flex items-center justify-between bg-gray-900 text-gray-200 py-4 px-6">
			{/* Logo */}
			<img
				src="./src/assets/navbarImages/logo.png"
				className="w-40 cursor-pointer"
				alt="Logo"
			/>

			{/* Navigation Links */}
			<ul className="flex-1 text-center">
				<button
					onClick={handleToggle}
					className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
				>
					{isDarkMode ? "🌙" : "☀️"}
				</button>
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
						to="/Dashboard"
						className="no-underline hover:text-yellow-400 px-2"
					>
						Dashboard
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
				{/* <li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
					<Link
						to="/dictionary"
						className="no-underline hover:text-yellow-400 px-2"
					>
						Dictionary
					</Link>
				</li> */}
				{/* <li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
					<Link
						to="/weather"
						className="no-underline hover:text-yellow-400 px-2"
					>
						Weather Prediction
					</Link>
				</li> */}
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
				{/* <li className="list-none inline-block px-5 hover:scale-110 active:scale-125 transition-transform duration-200">
					<Link
						to="/game"
						className="no-underline hover:text-yellow-400 px-2"
					>
						Game
					</Link>
				</li> */}
			</ul>

			{/* Cart and Authentication Section */}
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

				{/* Conditional Rendering Based on Authentication Status */}
				{isAuthenticated ? (
					<button
						onClick={handleLogout}
						className="bg-red-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
					>
						Logout
					</button>
				) : (
					<>
						<Link
							to="/auth/signup"
							className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
						>
							Sign Up
						</Link>
						<Link
							to="/auth/login"
							className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
						>
							Login
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
