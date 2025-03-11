import axios from "axios";

export const deleteGroceryItemById = async (id) => {
	try {
		const response = await axios.delete(
			`http://127.0.0.1:3000/api/v1/admin/delete-grocery-items-by-id/${id}`
		);
		return response.data; 
	} catch (error) {
		console.error("Error deleting grocery item:", error);
		throw error; 
	}
};
