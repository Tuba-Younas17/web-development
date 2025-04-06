import { body, validationResult } from "express-validator"

export const validGroceryRequest = [
	body("title", "title must be alteast of 3 characters").isLength({ min: 3 }),
	body("quantity", "Quantity must  alteast of 3 characters").isLength({ min: 3 }),
	body("price", "Price must be a number").isNumeric(),
	body("description","Description must be between 5 to 100 characters").isLength({ min: 5, max: 100 }),
	body("discount", "Discount must be a number").isNumeric(),
];
export const validateGroceryRequest = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ success: false, errors: errors.array() });
	}
	next();
};