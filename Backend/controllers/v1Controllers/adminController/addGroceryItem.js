// export const getGroceryItem = (req, res) => {
//     console.log(req.body);
// 	return res.json({
// 		suceess: true,
// 		data: `dummy-grocery-item`,
// 	});

import { GroceryItem } from "../../../models/GroceryModelItem.js";


export const addGroceryItem = async (req, res) => {
	try {
		console.log("Incoming Request Data:", req.body);
		const { title, quantity, price,description, discount } = req.body;
		console.log(title, quantity, price, description,discount);

		const groceryItem = new GroceryItem({
			title,
			quantity,
			price,
			description,
			discount,
		});
		const groceryAdded = await groceryItem.save();

		return res.json({
			suceess: true,
			data: groceryAdded,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			success: false,
			error: error,
		});
	}
};
