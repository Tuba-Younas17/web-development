import React from "react";
import FeaturesData from "../../data/FeaturesData";
import Navbar from "../Layout/Navbar";
import FooterSection from "../Layout/Footer";
import Feature from "../views/featureViews/Feature";

const Features = () => {
	return (
		<>
			<Feature featuredata={FeaturesData} />
		</>
	);
};

export default Features;
