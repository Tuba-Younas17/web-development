import mongoose from "mongoose";
const { Schema } = mongoose;

const vendorSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		businessName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		// products: [
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: "GroceryItem",
		// 	},
		// ],
		
	},
	{ timestamps: true }
);

export const Vendor = mongoose.model("Vendor", vendorSchema);
