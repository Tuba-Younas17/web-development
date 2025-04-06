import { toast } from "react-toastify";
import { loginService } from "../../services/signUpAndLoginService/loginService.js";

export const handleSubmitForLogIn = async (navigate, formData) => {
	try {
		const response = await loginService(formData);
		// console.log(response);

		const { success, message, toastNotification, token } = response;

		if (success && token) {
			localStorage.setItem("authToken", token);
			localStorage.setItem("user", JSON.stringify(response));

			if (toastNotification) {
				toast.success(message || "Login successful!");
				navigate("/dashboard");
			}
		} else {
			// if toastNotification is false or any other issue
			toast.error(message || "Login failed. Try again.");
		}
	} catch (err) {
		console.error("Login error:", err);
		// Show backend error message (e.g., "Email not verified")
		toast.error(err.message || "An error occurred. Please try again.");
	}
};
