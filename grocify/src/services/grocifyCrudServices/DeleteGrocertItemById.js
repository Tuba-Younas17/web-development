import axios from "axios";
import { END_POINTS } from "../../constants/urls";
import { toast } from "react-toastify";

export const deleteGroceryItemById = async (id) => {
	try {
		const response = await axios.delete(
			END_POINTS.ADMIN.DELETE_PRODUCT(id)
		);

		toast.success("Grocery item deleted successfully!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});

		return response.data;
	} catch (error) {
		console.error("Error deleting grocery item:", error);

		toast.error("Failed to delete item! Please try again.", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});

		throw error;
	}
};
