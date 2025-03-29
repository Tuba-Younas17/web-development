import { toast } from "react-toastify";
import { loginServive } from "../../services/signUpAndLoginService/loginService.js";

export const handleSubmitForLogIn = async (
	navigate,
	formData
) => {
	try {
		const response = await loginServive(formData);
		console.log(response);
		const { success, message, toastNotification, token } = response;

		if (success && token) {
			localStorage.setItem("authToken", token); // Store token in localStorage
			localStorage.setItem("user", JSON.stringify(response));
			// console.log( token)
			toast.success(message || "Login successful!");

			if (toastNotification) {
				navigate("/dashboard");
			}
		} else {
			toast.error(message || "Login failed. Try again.");
		}
	} catch (err) {
		console.error("Login error:", err);
		toast.error("An error occurred. Please try again.");
	}
};
