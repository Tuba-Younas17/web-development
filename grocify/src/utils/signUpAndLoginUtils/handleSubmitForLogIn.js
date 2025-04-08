import { toast } from "react-toastify";
import { loginService } from "../../services/signUpAndLoginService/loginService.js";

export const handleSubmitForLogIn = async (navigate, formData) => {
	try {
		const response = await loginService(formData);
		const { success, message, toastNotification, token } = response;

		if (success && token) {
			localStorage.setItem("authToken", token);
			localStorage.setItem("user", JSON.stringify(response));

			if (toastNotification) {
				toast.success(message || "Login successful!");

				const role = formData.role?.toLowerCase();

				switch (role) {
					case "admin":
						navigate("/admin");
						break;
					case "vendor":
						navigate("/vendor");
						break;
					case "buyer":
						navigate("/");
						break;
					case "window buyer":
						navigate("/window_buyer"); 
						break;
					default:
						navigate("/auth/login");
				}
			}
		} else {
			toast.error(message || "Login failed. Try again.");
		}
	} catch (err) {
		console.error("Login error:", err);
		toast.error(err.message || "An error occurred. Please try again.");
	}
};
