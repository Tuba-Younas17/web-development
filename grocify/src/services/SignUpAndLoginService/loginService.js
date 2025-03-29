import axios from "axios";
import { END_POINTS } from "../../constants/urls.js";

export const loginServive = async (formData) => {
	try {
		const response = await axios.post(
			// "http://127.0.0.1:5000/api/v1/auth/login",
			END_POINTS.AUTH.LOG_IN,
			formData // Send form data in the request body
		);
		return response.data; // Return the response data
	} catch (e) {
		console.log(e);
		throw new Error("Failed to login");
	}
};