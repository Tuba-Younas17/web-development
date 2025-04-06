import { GroceryItem } from "../../../models/GroceryModelItem.js";

export const addGroceryItemController = async (req, res) => {
	try {
		// Log incoming request data for debugging
		console.log("Incoming Request Data:", req.body);

		// Validation is already done in the middleware, so we just check errors here
		const { title, quantity, price, description, discount } = req.body;

		const groceryItem = new GroceryItem({
			title,
			quantity,
			price,
			description,
			discount,
		});

		const groceryAdded = await groceryItem.save();

		return res.json({
			success: true,
			data: groceryAdded,
		});
	} catch (error) {
		console.log(error);

		// Handle specific validation errors from express-validator
		if (error.name === "ValidationError") {
			
			return res.status(400).json({
				success: false,
				errors: error.errors, // return validation error details
			});
		}

		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};
