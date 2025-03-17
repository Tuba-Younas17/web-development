import React from "react";
import ExclusiveDeals from "../../views/dealsViews/ExclusiveDealView";
import DiscountedDeals from "../../views/dealsViews/DiscountedDealsViews";
import DiscountedDealData from "../../../data/dealData/discountedDealData";
import ExclusiveDealData from "../../../data/dealData/exclusiveDealData";

const Deals = () => {
	return (
		<>
			<DiscountedDeals deals={DiscountedDealData}  />
			<ExclusiveDeals deals={ExclusiveDealData} />
		</>
	);
};

export default Deals;
