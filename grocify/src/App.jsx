import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Deals from "./components/pages/Deals";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About/>} />
				<Route path="/features" element={<Features/>} />
				<Route path="/deals" element={<Deals/>} />


			</Routes>
		</>
	);
};

export default App;
