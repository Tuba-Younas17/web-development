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

		// Show success toast
		toast.success("Grocery item added successfully!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		return response.data;
	} catch (error) {
		console.error("Error adding grocery item:", error);

		// If validation error exists, display it
		if (
			error.response &&
			error.response.data &&
			error.response.data.errors
		) {
			const validationErrors = error.response.data.errors;
			validationErrors.forEach((err) => {
				toast.error(err.msg, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
		} else {
			// Default error message if no validation errors
			toast.error("Failed to add item! Please try again.", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		throw error;
	}
};
