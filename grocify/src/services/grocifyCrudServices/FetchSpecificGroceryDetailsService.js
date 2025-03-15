import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const fetchGroceryDetails = async (id) => {
	try {
		const response = await axios.get(END_POINTS.ADMIN.GET_PRODUCT_BY_ID(id))
		return response.data; 
	} catch (err) {
		throw new Error("Failed to fetch grocery item"); 
	}
};
