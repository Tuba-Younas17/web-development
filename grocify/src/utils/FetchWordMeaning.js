import axios from "axios";
import { dictionaryApi } from "../services/dictionayApi";

export const FetchWordMeaning = (
	word,
	setData,
	setError,
	setLoading,

) => {

		setTimeout(async () => {
		if (!word.trim()) {
			setData(null);
			setError("");
			return;
		}

		setLoading(true);
		setError("");

		try {
			console.log(`Fetching: ${dictionaryApi}${word}`); // Debugging
            const response = await axios.get(`${dictionaryApi}${word}`);

            console.log(response.data);

			if (response.data && response.data.length > 0) {
				setData(response.data[0]);
			} else {
				throw new Error("No definition found");
			}
		} catch (error) {
			setError("Word not found");
			setData(null);
		} finally {
			setLoading(false);
		}
	}, 500);
};
