import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const updateGroceryItemService = async (id, grocery) => {
	try {
		const response = await axios.put(
			END_POINTS.ADMIN.UPDATE_PRODUCT(id),
			grocery
		);
		return response.data; 
	} catch (error) {
		console.error("Update error:", error.message);
		throw new Error(
			error.response?.data?.message || "Failed to update grocery item."
		);
	}
};
