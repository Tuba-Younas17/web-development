import { addGroceryItemService } from "../../services/grocifyCrudServices/AddGroceryItemService.js";


export const handleSubmit = async (e, formData) => {
	e.preventDefault();
	console.log("Submitting Form Data:", formData);

	try {
		await addGroceryItemService(formData);
	} catch (error) {
		console.error("Submission error:", error);
	}
};
