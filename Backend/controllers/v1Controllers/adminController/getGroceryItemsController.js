import { GroceryItem } from "../../../models/GroceryModelItem.js";

export const getGroceryItemsController = async (req, res) => {
	try {
		// const groceries = await GroceryItem.find().populate("createdBy", "name email"); // fetch specific user fields
		const groceries = await GroceryItem.find().populate("createdBy", "-password");
		res.json(groceries);
	} catch (error) {
		console.error("Error fetching grocery items:", error);
		res.status(500).json({
			error: "Failed to fetch grocery items",
		});
	}
};
