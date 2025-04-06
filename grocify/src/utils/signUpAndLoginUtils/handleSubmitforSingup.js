import { UserDataService } from "../../services/signUpAndLoginService/userDataService.js";
import { toast } from "react-toastify";

export const handleSubmitforSingup = async (e, formData) => {
	e.preventDefault();

	try {
		const response = await UserDataService(formData);

		// ✅ Handle if toastNotification is explicitly false (like for "user already exists")
		if (response.toastNotification === false) {
			toast.error(response.message || "Something went wrong.", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return false;
		}

		// ✅ Handle validation errors from backend if returned in `response.errors`
		if (response.success === false && response.errors) {
			response.errors.forEach((error) => {
				toast.error(error.msg, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			});
			return false;
		}

		// ✅ If everything went fine and toastNotification is true, show success
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

		// ✅ Backend validation or other errors
		if (error.response?.data?.errors) {
			error.response.data.errors.forEach((err) => {
				toast.error(err.msg, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			});
		} else {
			toast.error("Signup failed! Please try again.", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
		return false;
	}
};
