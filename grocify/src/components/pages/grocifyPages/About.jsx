import React from "react";
import AboutUs from "../../views/aboutViews/AboutUs";
import Collaborations from "../../views/aboutViews/Collaborations";
import AboutData from "../../../data/grocifyAboutPageData/aboutData";
import { partners } from "../../../data/grocifyAboutPageData/patners";


const About = () => {
	return (
		<>
			<AboutUs aboutData={AboutData} />
			<Collaborations partners={partners} />
		</>
	);
};

export default About;
