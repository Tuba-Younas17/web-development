import axios from "axios";
import { END_POINTS } from "../../constants/urls";
import { toast } from "react-toastify"; // Import toast

export const addGroceryItemService = async (formData) => {
	try {
		const response = await axios.post(
			END_POINTS.ADMIN.ADD_GROCERY_ITEM,
			formData
		);
		console.log("API Response:", response.data);

		// ✅ Show success toast
		toast.success("Grocery item added successfully!", {
			position: "top-right",
			autoClose: 3000, // Closes in 3 seconds
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		return response.data;
	} catch (error) {
		console.error("Error adding grocery item:", error);

		// ❌ Show error toast
		toast.error("Failed to add item! Please try again.", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		throw error;
	}
};
