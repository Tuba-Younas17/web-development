import axios from "axios";

export const addGroceryItemService = async (formData) => {
	try {
		const response = await axios.post(
			`http://127.0.0.1:3000/api/v1/admin/add-grocery-items`,
			formData
		);
		console.log("API Response:", response.data);
		alert("Grocery item added successfully!");
		return response.data;
	} catch (error) {
		console.error("Error adding grocery item:", error);
		alert("Failed to add item! Check console for errors.");
		throw error;
	}
};
