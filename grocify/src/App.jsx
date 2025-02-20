import React from "react";
import TopSeller from "./components/views/homeViews/TopSeller";
import BreakfastProducts from "./components/views/homeViews/BreakfastProducts";
import YoungPeopleBuy from "./components/views/homeViews/YoungPeopleBuy";
import FooterSection from "./components/Layout/Footer";
import Description from "./components/views/homeViews/Description";
import Carosuel from "./components/views/homeViews/Carosuel";
import BreakfastProductsData from "./data/BreakFastProductsData";
import TopSellerData from "./data/TopSellerProductsData";
import CarouselImages from "./data/CarosuelImagesData";
import YoungPeopleBuyData from "./data/YoungPeopleProductsData";

const App = () => {
	return (
		<>
			<Carosuel images={CarouselImages} />
			<Description />
			<TopSeller title="Top Sellers" data={TopSellerData} />
			<BreakfastProducts title="Breakfast Products" products={BreakfastProductsData}  />
			<YoungPeopleBuy  title="Young People Buy"  products={YoungPeopleBuyData}/>
			<FooterSection />
		</>
	);
};

export default App;
