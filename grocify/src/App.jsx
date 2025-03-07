import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Deals from "./components/pages/Deals";
import FooterSection from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Dictionary from "./components/pages/Dictionary";
import Tracking from "./components/pages/Tracking";
import PageNotFound from "./components/pages/PageNotFound";
import Game from "./components/pages/Game";
import Weather from "./components/pages/Weather";
import GroceryForm from "./components/pages/GroceryForm";
import GroceryList from "./components/pages/GroceryList";

const App = () => {
	// const [cartCount,setCartCount]=useState(0);
	// const addToCart = () => {
	// 	setCartCount(cartCount + 1);
	// };
	//console.log(cartCount);
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
				<Route exact path="*" element={<PageNotFound />} />
			</Routes>
			<FooterSection />
		</>
	);
};

export default App;
