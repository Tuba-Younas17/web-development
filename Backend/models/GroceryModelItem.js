import mongoose from "mongoose";
const { Schema } = mongoose;

const groceryItemSchema = new Schema({
	title: String, // String is shorthand for {type: String}
	quantity: String,
	price: Number,
	discount: String,
	
});
export const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);
