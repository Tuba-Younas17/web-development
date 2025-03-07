import { GroceryItem } from "../../../models/GroceryModelItem.js";

 export const getGroceryItemsController = async (req, res) => {
			try {
				const groceries = await GroceryItem.find(); // Fetch all grocery items
				res.json(groceries);
			} catch (error) {
				console.error(" Error fetching grocery items:", error);
				res.json({
					error: "Failed to fetch grocery items",
				});
			}
		};
