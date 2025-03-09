import { GroceryItem } from "../../../models/GroceryModelItem.js";

export const getGroceryItemsByIdController = async (req, res) => {
	try {
		//  console.log("Request Params:", req.params);
		const groceryId = req.params.id;
		// console.log(groceryId);
		const grocery = await GroceryItem.findById(groceryId);
		if (!grocery) {
			return res.json({ error: "Grocery item not found" });
		}
		res.json(grocery);
	} catch (error) {
		console.error("Error fetching grocery item:", error);
		res.status(500).json({ error: "Failed to fetch grocery item" });
	}
};
