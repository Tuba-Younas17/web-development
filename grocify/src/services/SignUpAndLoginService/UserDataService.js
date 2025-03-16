import axios from "axios";
import { toast } from "react-toastify";
import { END_POINTS } from "../../constants/urls.js";

export const UserDataService = async (formData) => {
	try {
		
		const response = await axios.post(
            // "http://127.0.0.1:5000/api/v1/auth/signup",
            END_POINTS.AUTH.SIGN_UP,
			formData
		);
		console.log("API Response:", response.data);

		return response.data;
	} catch (error) {
		console.error("Signup Error:", error);

		// Show error toast if there is a server-side issue
		toast.error("Signup Failed! Please try again.", {
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
