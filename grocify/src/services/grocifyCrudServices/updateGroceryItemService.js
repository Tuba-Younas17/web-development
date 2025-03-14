import axios from "axios";

export const updateGroceryItemService = async (id, grocery) => {
	try {
		const response = await axios.put(
			`http://127.0.0.1:3000/api/v1/admin/update-grocery-items-by-id/${id}`,
			grocery
		);
		return response.data.data; 
	} catch (error) {
		console.error("Update error:", error);
		throw error; 
	}
};
