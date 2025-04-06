import axios from "axios";
import { END_POINTS } from "../../constants/urls.js";

export const loginService = async (formData) => {
	try {
		const response = await axios.post(
			// "http://127.0.0.1:5000/api/v1/auth/login",
			END_POINTS.AUTH.LOG_IN,
			formData // Send form data in the request body
		);
		return response.data; // Return the response data
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw { message: "Failed to login" };
		}
	}
};
