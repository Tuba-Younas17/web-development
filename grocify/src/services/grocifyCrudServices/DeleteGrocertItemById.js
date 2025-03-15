import axios from "axios";
import { END_POINTS } from "../../constants/urls";
import { toast } from "react-toastify"; // Import toast

export const deleteGroceryItemById = async (id, navigate) => {
	try {
		const response = await axios.delete(
			END_POINTS.ADMIN.DELETE_PRODUCT(id)
		);

		// ✅ Show success toast
		toast.success("Grocery item deleted successfully!", {
			position: "top-right",
			autoClose: 3000, // Closes in 3 seconds
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		navigate(-1); // Navigate back after deletion
		return response.data;
	} catch (error) {
		console.error("Error deleting grocery item:", error);

		// ❌ Show error toast
		toast.error("Failed to delete item! Please try again.", {
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
