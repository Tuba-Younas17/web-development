import React from "react";
import FeaturesData from "../../data/FeaturesData";
import Feature from "../views/featureViews/Feature";

const Features = () => {
	return (
		<>
			<Feature featuredata={FeaturesData} />
		</>
	);
};

export default Features;
