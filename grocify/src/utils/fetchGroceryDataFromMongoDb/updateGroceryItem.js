import { updateGroceryItemService } from "../../services/grocifyCrudServices/updateGroceryItemService.js";
import { toast } from "react-toastify"; // Import toast

export const updateGroceryItem = async (id, grocery, navigate) => {
	try {
		await updateGroceryItemService(id, grocery);

		// ✅ Show success toast
		toast.success("Item updated successfully!", {
			position: "top-right",
			autoClose: 3000, // Closes after 3 seconds
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		navigate(-1); // Navigate back after updating
	} catch (error) {
		// ❌ Show error toast
		toast.error("Failed to update the item. Please try again.", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
};
