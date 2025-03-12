import React from "react";
import { Routes, Route } from "react-router-dom";
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
				<Route
					exact
					path="/get-grocery-items-by-id/:id"
					element={<SpecificGroceryItem />}
				/>
				<Route exact path="*" element={<PageNotFound />} />
			</Routes>
			<FooterSection />
		</>
	);
};

export default App;
