import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toggleDarkMode } from "../../reduxToolkit/features/counter/darkModeSlice";
import { NAV_LINKS } from "../../constants/navLinks";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		setIsAuthenticated(!!token);
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("user");
		setIsAuthenticated(false);
		navigate("/auth/login");
	};

	const handleToggle = () => {
		dispatch(toggleDarkMode());
	};

	return (
		<nav className=" top-0 left-0 w-full z-50 bg-gray-900 text-gray-200 border-b border-gray-700 shadow">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/">
						<img
							src="./src/assets/navbarImages/logo.png"
							className="w-32 md:w-40 cursor-pointer"
							alt="Logo"
						/>
					</Link>

					{/* Toggle Button */}
					<div className="lg:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-white focus:outline-none"
						>
							{menuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

					{/* Desktop Nav Links */}
					<ul className="hidden lg:flex flex-1 justify-center items-center space-x-6">
						<button
							onClick={handleToggle}
							className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
						>
							{isDarkMode ? "🌙" : "☀️"}
						</button>

						{NAV_LINKS.map(({ to, label }) => {
							const isActive = location.pathname === to;
							return (
								<li
									key={to}
									className={`transition-transform duration-200 ${
										isActive
											? "scale-105"
											: "hover:scale-110 active:scale-125"
									}`}
								>
									<Link
										to={to}
										className={`px-2 font-semibold transition duration-200 ${
											isActive
												? "text-yellow-400 underline underline-offset-4"
												: "text-gray-200 hover:text-yellow-400"
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>

					{/* Desktop Cart & Auth */}
					<div className="hidden lg:flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<img
								src="./src/assets/navbarImages/cart.png"
								className="w-8 cursor-pointer"
								alt="Cart"
							/>
							<p className="text-yellow-400 font-bold">{count}</p>
						</div>

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
									className="bg-yellow-500 text-gray-900 font-bold py-1 px-1 rounded-lg hover:bg-yellow-600 transition duration-300"
								>
									SignUp
								</Link>
								<Link
									to="/auth/login"
									className="bg-yellow-500 text-gray-900 font-bold py-1 px-1 rounded-lg hover:bg-yellow-600 transition duration-300"
								>
									Login
								</Link>
							</>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="lg:hidden px-4 pb-4 space-y-4 bg-gray-900 border-t border-gray-700 text-center">
					<button
						onClick={handleToggle}
						className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
					>
						{isDarkMode ? "🌙" : "☀️"}
					</button>

					{NAV_LINKS.map(({ to, label }) => (
						<Link
							key={to}
							to={to}
							className={`block py-2 text-lg font-semibold ${
								location.pathname === to
									? "text-yellow-400 underline underline-offset-4"
									: "text-gray-200 hover:text-yellow-400"
							}`}
							onClick={() => setMenuOpen(false)}
						>
							{label}
						</Link>
					))}

					<div className="flex justify-center items-center space-x-2">
						<img
							src="./src/assets/navbarImages/cart.png"
							className="w-8"
							alt="Cart"
						/>
						<p className="text-yellow-400 font-bold">{count}</p>
					</div>

					{isAuthenticated ? (
						<button
							onClick={() => {
								handleLogout();
								setMenuOpen(false);
							}}
							className="bg-red-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
						>
							Logout
						</button>
					) : (
						<>
							<Link
								to="/auth/signup"
								className="block bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
								onClick={() => setMenuOpen(false)}
							>
								Sign Up
							</Link>
							<Link
								to="/auth/login"
								className="block bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
								onClick={() => setMenuOpen(false)}
							>
								Login
							</Link>
						</>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
