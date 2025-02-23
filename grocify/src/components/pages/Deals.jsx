import React from "react";
import DiscountedDeals from "../views/dealsViews/DiscountedDealsViews";
import DiscountedDealData from "../../data/dealData/DiscountedDealData";
import ExclusiveDeals from "../views/dealsViews/ExclusiveDealView";
import ExclusiveDealData from "../../data/dealData/ExclusiveDealData";

const Deals = ({ addToCart }) => {
	return (
		<>
			<DiscountedDeals deals={DiscountedDealData} addToCart={addToCart} />
			<ExclusiveDeals deals={ExclusiveDealData} addToCart={addToCart} />
		</>
	);
};

export default Deals;
