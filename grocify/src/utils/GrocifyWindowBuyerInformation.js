import axios from "axios";
import { windowBuyerApi } from "../services/WindowBuyerApi";

export const grocifyWindowBuyerInformation = async () => {
	try {
		const response = await axios.get(windowBuyerApi);
		return response.data.data; // Return the buyer data instead of manipulating the DOM
	} catch (error) {
		console.error("Error fetching buyers:", error);
		return { error: "Failed to load buyer data." }; // Return an error message
	}
};
