import mongoose from "mongoose";
const { Schema } = mongoose;

const groceryItemSchema = new Schema({
	title: String, // String is shorthand for {type: String}
	quantity: String, // Number is shorthand for {type: Number}
	price: Number,
	description: String, 
	discount: Number,
	
});
export const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);
