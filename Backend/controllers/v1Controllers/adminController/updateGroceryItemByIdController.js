import { GroceryItem } from "../../../models/GroceryModelItem.js";

export const updateGroceryItemByIdController = async (req, res) => {
	try {
		console.log("Incoming Request Data:", req.body);
		const { id } = req.params;
		const { title, quantity, price, description, discount } = req.body;
		// console.log(title, quantity, price, description, discount);

		const updatedGroceryItem = await GroceryItem.findByIdAndUpdate(
			id,
			{ title, quantity, price, description, discount },
			{ new: true }
		);

		if (!updatedGroceryItem) {
			return res.json({
				success: false,
				message: "Grocery item not found",
			});
		}

		return res.json({
			success: true,
			data: updatedGroceryItem,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			success: false,
			error: error.message,
		});
	}
};
