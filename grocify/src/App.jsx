import React from "react";
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
import {faShoppingCart,faEdit,faTrash,} from "@fortawesome/free-solid-svg-icons";
import Signup from "./components/pages/grocifyPages/Signup";
library.add(faShoppingCart, faTrash, faEdit);

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/features" element={<Features />} />
				<Route exact path="/deals" element={<Deals />} />
				<Route exact path="/dictionary" element={<Dictionary />} />
				<Route exact path="/tracking" element={<Tracking />} />
				<Route exact path="/game" element={<Game />} />
				<Route exact path="/weather" element={<Weather />} />
				<Route exact path="/add-grocery" element={<GroceryForm />} />
				<Route exact path="/get-grocery" element={<GroceryList />} />
				<Route exact path="/get-grocery-items-by-id/:id"element={<SpecificGroceryItem />}/>
				<Route exact path="/update-grocery-items-by-id/:id" element={<UpdateItemById />} />
				<Route exact path="/signup" element={ <Signup/>} />
				<Route exact path="*" element={<PageNotFound />} />
			</Routes>
			<FooterSection />

			{/* ✅ ToastContainer for toast notifications */}
			<ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable
			/>
		</>
	);
};

export default App;
