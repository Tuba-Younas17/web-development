import axios from "axios";
import { grocifySellerApi } from "../../services/grocifyTrackingServices/sellerInfoApi";

export const grocifySellerInformation = async () => {
	try {
		const response = await axios.get(grocifySellerApi);
		return response.data.data; // Return the buyer data instead of manipulating the DOM
	} catch (error) {
		console.error("Error fetching buyers:", error);
		return { error: "Failed to load buyer data." }; // Return an error message
	}
};
