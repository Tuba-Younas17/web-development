import axios from "axios";
import { buyerInfoApi } from "../services/BuyerInfoApi";

export const grocifyBuyerInformation = async () => {
	try {
		const response = await axios.get(buyerInfoApi);
		return response.data.data; // Return the buyer data instead of manipulating the DOM
	} catch (error) {
		console.error("Error fetching buyers:", error);
		return { error: "Failed to load buyer data." }; // Return an error message
	}
};
