import { UserDataService } from "../../services/signUpAndLoginService/userDataService";

export const handleSubmitforSingup = async (formData, setErrors) => {
	try {
		const response = await UserDataService(formData);

		// If backend validation errors
		if (response.success === false && response.errors) {
			const errorMap = {};
			response.errors.forEach((error) => {
				errorMap[error.path] = error.msg;
			});
			setErrors(errorMap);
			return false;
		}

		// If everything went fine
		return true;
	} catch (error) {
		console.error("Submission error:", error);

		if (error.response?.data?.errors) {
			const errorMap = {};
			error.response.data.errors.forEach((err) => {
				errorMap[err.path] = err.msg;
			});
			setErrors(errorMap);
		}
		return false;
	}
};
