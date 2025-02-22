import React from "react";
import CarouselImages from "../../data/CarosuelImagesData";
import TopSellerData from "../../data/TopSellerProductsData";
import BreakFastProductsData from "../../data/BreakFastProductsData";
import YoungPeopleBuyData from "../../data/YoungPeopleProductsData";
import TopSeller from "../views/homeViews/TopSeller";
import BreakfastProducts from "../views/homeViews/BreakfastProducts";
import YoungPeopleBuy from "../views/homeViews/YoungPeopleBuy";
import FooterSection from "../Layout/Footer";
import Carosuel from "../views/homeViews/Carosuel";
import Description from "../views/homeViews/Description";
import Navbar from "../Layout/Navbar";

const Home = () => {
	return (
		<>
		     <Navbar/>
			<Carosuel images={CarouselImages} />
			<Description />
			<TopSeller title="Top Sellers" data={TopSellerData} />
			<BreakfastProducts
				title="Breakfast Products"
				products={BreakFastProductsData}
			/>
			<YoungPeopleBuy
				title="Young People Buy"
				products={YoungPeopleBuyData}
			/>
			<FooterSection />
		</>
	);
};

export default Home;
