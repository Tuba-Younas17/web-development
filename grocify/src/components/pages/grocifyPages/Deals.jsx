import React from "react";
import ExclusiveDeals from "../../views/dealsViews/ExclusiveDealView";
import DiscountedDeals from "../../views/dealsViews/DiscountedDealsViews";
import DiscountedDealData from "../../../data/dealData/DiscountedDealData";
import ExclusiveDealData from "../../../data/dealData/ExclusiveDealData";

const Deals = () => {
	return (
		<>
			<DiscountedDeals deals={DiscountedDealData}  />
			<ExclusiveDeals deals={ExclusiveDealData} />
		</>
	);
};

export default Deals;
