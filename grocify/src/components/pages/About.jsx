import React from "react";

import Navbar from "../Layout/Navbar";
import FooterSection from "../Layout/Footer";
import AboutData from "../../data/AboutData";
import AboutUs from "../views/aboutViews/AboutUs";
import Collaborations from "../views/aboutViews/Collaborations";
import { partners } from "../../data/Patners";

const About = () => {
	return (
		<>
			<AboutUs aboutData={AboutData} />
			<Collaborations partners={partners} />
		</>
	);
};

export default About;
