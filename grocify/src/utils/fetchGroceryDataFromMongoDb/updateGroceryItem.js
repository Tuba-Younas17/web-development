import { updateGroceryItemService } from "../../services/grocifyCrudServices/updateGroceryItemService.js";


export const updateGroceryItem = async (id, grocery,navigate) => {
	try {
		await updateGroceryItemService(id, grocery);
		alert("Item updated successfully!");
		navigate(-1); 
	} catch (error) {
		alert("Failed to update the item. Please try again.");
	}
};
