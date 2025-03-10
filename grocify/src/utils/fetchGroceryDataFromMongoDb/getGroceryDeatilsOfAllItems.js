import { fetchGroceries } from "../../services/fetchAllGroceryItems.js";

export const getGroceries = async (setLoading,setGroceries,setError) => {
	try {
		setLoading(true); 
		const data = await fetchGroceries(); 
		setGroceries(data);
	} catch (err) {
		setError("Failed to load grocery items"); 
	} finally {
		setLoading(false); 
	}
};
