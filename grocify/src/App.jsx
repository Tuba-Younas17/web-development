import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Deals from "./components/pages/Deals";
import FooterSection from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";


const App = () => {
	// const [cartCount,setCartCount]=useState(0);
	// const addToCart = () => {
	// 	setCartCount(cartCount + 1); 
	// };
	 //console.log(cartCount);
	return (
		<>
		    <Navbar  />
			<Routes>
			    <Route exact path="/" element={<Home />} />   
				<Route exact path="/about" element={<About />} />
				<Route exact path="/features" element={<Features />} />
				<Route exact path="/deals" element={<Deals />} />
			</Routes>
			<FooterSection/>
		</>
	);
};

export default App;
