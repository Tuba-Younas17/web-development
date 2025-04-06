import axios from "axios";
import { END_POINTS } from "../../constants/urls.js";

export const UserDataService = async (formData) => {
	try {
		const response = await axios.post(END_POINTS.AUTH.SIGN_UP, formData);
		console.log("API Response:", response.data);
		return response.data;
	} catch (error) {
		// Just rethrow the error — don't show toast here
		throw error;
	}
};

