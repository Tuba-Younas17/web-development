import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/pages/grocifyPages/Home";
import FooterSection from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Dictionary from "./components/pages/Dictionary";
import PageNotFound from "./components/pages/PageNotFound";
import Game from "./components/pages/Game";
import Weather from "./components/pages/Weather";
import GroceryForm from "./components/pages/grocifyPages/GroceryForm";
import SpecificGroceryItem from "./components/pages/grocifydynamicPages/GetSpecificGroceryItem";
import About from "./components/pages/grocifyPages/About";
import Features from "./components/pages/grocifyPages/Features";
import Deals from "./components/pages/grocifyPages/Deals";
import GroceryList from "./components/pages/grocifyPages/GroceryList";
import Tracking from "./components/pages/grocifyPages/Tracking";
import UpdateItemById from "./components/pages/grocifydynamicPages/UpdateItemById";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faShoppingCart,
	faEdit,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import Dashboard from "./components/pages/grocifyPages/Dashboard";
import ProtectedRoute from "./components/pages/grocifyProtectedRouting/ProtectedRoutes";
import VerifySuccess from "./components/pages/auth/VerifySuccess";
import Window_BuyerComponent from "./components/pages/role/Window_BuyerComponent";
import BuyerComponent from "./components/pages/role/BuyerComponent";
import VendorComponent from "./components/pages/role/VendorComponent";
import AdminComponent from "./components/pages/role/AdminComponent";
import Review from "./components/pages/grocifyPages/Review";
import AddReview from "./components/pages/grocifyPages/AddReview";
import AddVendorForm from "./components/pages/role/addVendorForm";
import UpdateVendorForm from "./components/pages/role/UpdateVendorForm";
import { useSelector } from "react-redux";

library.add(faShoppingCart, faTrash, faEdit);

const App = () => {
	const authToken = localStorage.getItem("authToken");
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);
	return (
		<>
			<div
				className={
					isDarkMode
						? "bg-gray-900 text-white min-h-screen"
						: "bg-white text-black min-h-screen"
				}
			>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/review" element={<Review />} />
					<Route exact path="/add-review" element={<AddReview />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/features" element={<Features />} />
					<Route exact path="/deals" element={<Deals />} />
					<Route exact path="/dictionary" element={<Dictionary />} />
					<Route exact path="/tracking" element={<Tracking />} />
					<Route exact path="/game" element={<Game />} />
					<Route exact path="/weather" element={<Weather />} />
					<Route
						exact
						path="/add-grocery"
						element={<GroceryForm />}
					/>
					<Route
						exact
						path="/get-grocery"
						element={<GroceryList />}
					/>
					<Route
						exact
						path="/add-vendor"
						element={<AddVendorForm />}
					/>
					<Route
						path="/update-vendor/:vendorId"
						element={<UpdateVendorForm />}
					/>

					<Route
						exact
						path="/get-grocery-items-by-id/:id"
						element={<SpecificGroceryItem />}
					/>
					<Route
						exact
						path="/update-grocery-items-by-id/:id"
						element={<UpdateItemById />}
					/>
					<Route path="/admin" element={<AdminComponent />} />
					<Route path="/vendor" element={<VendorComponent />} />
					<Route path="/buyer" element={<BuyerComponent />} />
					<Route
						exact
						path="/window_buyer"
						element={<Window_BuyerComponent />}
					/>
					{/* Protected Routes */}
					<Route element={<ProtectedRoute />}>
						<Route
							exact
							path="/dashboard"
							element={<Dashboard />}
						/>
					</Route>

					<Route exact path="/auth/signup" element={<Signup />} />
					<Route exact path="/auth/login" element={<Login />} />
					<Route
						exact
						path="/auth/VerifySuccess"
						element={<VerifySuccess />}
					/>

					<Route exact path="*" element={<PageNotFound />} />
				</Routes>
				<FooterSection />

				{/* ✅ ToastContainer for toast notifications */}
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					closeOnClick
					pauseOnHover
					draggable
				/>
			</div>
		</>
	);
};

export default App;
