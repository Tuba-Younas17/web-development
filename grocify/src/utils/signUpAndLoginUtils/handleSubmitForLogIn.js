
import { toast } from "react-toastify";
import { loginServive } from "../../services/signUpAndLoginService/loginService.js";


export const handleSubmitForLogIn = async (navigate, formData) => {
	try {
		// const response = await axios.post(
		// 	"http://127.0.0.1:5000/api/v1/auth/login",
		// 	formData // Send form data in the request body
        // );
        const response=await loginServive(formData);

		// Extract response data
		const { success, message, toastNotification } = response;

		if (toastNotification) {
			navigate("/"); // Navigate to home if toastNotification is true
		} else {
			toast.error(message || "Login failed. Try again.");
		}
	} catch (err) {
		toast.error("An error occurred. Please try again.");
	}
};
