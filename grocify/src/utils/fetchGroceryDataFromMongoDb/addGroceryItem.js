import { addGroceryItemService } from "../../services/grocifyCrudServices/addGroceryItemService.js";


export const handleSubmit = async (e, formData) => {
	e.preventDefault();

	try {
		await addGroceryItemService(formData);
	} catch (error) {
		console.error("Submission error:", error);
	}
};
