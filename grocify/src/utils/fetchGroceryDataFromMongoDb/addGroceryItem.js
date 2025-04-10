import { addGroceryItemService } from "../../services/grocifyCrudServices/addGroceryItemService.js";

export const handleSubmit = async (e, formData, file) => {
	e.preventDefault();

	try {
		const data = new FormData();

		// Append fields
		Object.entries(formData).forEach(([key, value]) => {
			data.append(key, value);
		});

		// Append image file
		data.append("images", file);

		await addGroceryItemService(data);
	} catch (error) {
		console.error("Submission error:", error);
	}
};
