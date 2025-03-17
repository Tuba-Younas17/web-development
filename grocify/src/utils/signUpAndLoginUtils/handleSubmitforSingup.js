
import { UserDataService } from "../../services/signUpAndLoginService/userDataService.js";
import { toast } from "react-toastify";

export const handleSubmitforSingup = async (e, formData) => {
	e.preventDefault();

	try {
		const response = await UserDataService(formData);

		// If the request was unsuccessful or toastNotification is false, show an error toast
		if ( response.toastNotification === false) {
			toast.error(response.message , {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return true;
		}

		// Show success toast only if toastNotification is true
		if (response.toastNotification) {
			toast.success(response.message || "Signup successful!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return true;
		}
	} catch (error) {
		console.error("Submission error:", error);
		toast.error("Signup failed! Please try again.", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		return false;
	}
};
