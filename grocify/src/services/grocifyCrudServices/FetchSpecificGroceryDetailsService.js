import axios from "axios";

export const fetchGroceryDetails = async (id) => {
	try {
		const response = await axios.get(
			`http://127.0.0.1:3000/api/v1/admin/get-grocery-items-by-id/${id}`
		);
		return response.data; 
	} catch (err) {
		throw new Error("Failed to fetch grocery item"); 
	}
};
