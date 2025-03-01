import React from "react";
import CarouselImages from "../../data/CarosuelImagesData";
import TopSellerData from "../../data/TopSellerProductsData";
import BreakFastProductsData from "../../data/BreakFastProductsData";
import YoungPeopleBuyData from "../../data/YoungPeopleProductsData";
import TopSeller from "../views/homeViews/TopSeller";
import BreakfastProducts from "../views/homeViews/BreakfastProducts";
import YoungPeopleBuy from "../views/homeViews/YoungPeopleBuy";
import Carosuel from "../views/homeViews/Carosuel";
import Description from "../views/homeViews/Description";

const Home = () => {
	return (
		<>
			<Carosuel images={CarouselImages} />
			<Description />
			<TopSeller
				title="Top Sellers"
				data={TopSellerData}
				// addToCart={addToCart}
			/>
			<BreakfastProducts
				title="Breakfast Products"
				products={BreakFastProductsData}
				// addToCart={addToCart}
			/>
			<YoungPeopleBuy
				title="Young People Buy"
				products={YoungPeopleBuyData}
				// addToCart={addToCart}
			/>
		</>
	);
};

export default Home;
