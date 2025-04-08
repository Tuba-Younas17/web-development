import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
	{
		userName: {
			type: String,
			required: true, // now using userName instead of user ObjectId
		},
		productName: {
			type: String,
			required: true, // Assuming you want to store the product name
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true } // adds createdAt and updatedAt fields
);

export const Review = mongoose.model("Review", reviewSchema);
