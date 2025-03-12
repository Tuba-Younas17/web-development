import React from "react";
import AboutUs from "../../views/aboutViews/AboutUs";
import Collaborations from "../../views/aboutViews/Collaborations";
import AboutData from "../../../data/grocifyAboutPageData/AboutData";
import { partners } from "../../../data/grocifyAboutPageData/Patners";


const About = () => {
	return (
		<>
			<AboutUs aboutData={AboutData} />
			<Collaborations partners={partners} />
		</>
	);
};

export default About;
