import { GroceryItem } from "../../../models/GroceryModelItem.js";

export const deleteGroceryItemByIdController = async (req, res) => {
	try {
		const groceryId = req.params.id;

		// Find and delete the grocery item
		const deletedGrocery = await GroceryItem.findByIdAndDelete(groceryId);

		if (!deletedGrocery) {
			return res.status(404).json({ error: "Grocery item not found" });
		}

		res.json({ message: "Grocery item deleted successfully!" });
	} catch (error) {
		console.error("Error deleting grocery item:", error);
		res.status(500).json({ error: "Failed to delete grocery item" });
	}
};
