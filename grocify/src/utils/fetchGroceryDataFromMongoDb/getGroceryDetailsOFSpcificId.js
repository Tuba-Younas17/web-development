import { fetchGroceryDetails } from "../../services/grocifyCrudServices/FetchSpecificGroceryDetailsService.js";

export const getGroceryDetails = async (setLoading,id,setGrocery,setError) => {
	try {
		setLoading(true); 
		const data = await fetchGroceryDetails(id); 
		setGrocery(data); 
	} catch (err) {
		setError(err.message); 
	} finally {
		setLoading(false); 
	}
};
