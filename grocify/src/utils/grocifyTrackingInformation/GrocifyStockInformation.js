import axios from "axios";
import { stockInfoApi } from "../../services/grocifyTrackingServices/StockInfoApi";

export const grocifyStockInformation = async () => {
	try {
		const response = await axios.get(stockInfoApi);
		return response.data.data; // Return the buyer data instead of manipulating the DOM
	} catch (error) {
		console.error("Error fetching buyers:", error);
		return { error: "Failed to load buyer data." }; // Return an error message
	}
};
