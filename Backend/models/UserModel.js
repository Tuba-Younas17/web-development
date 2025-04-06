import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true, // ensures it's stored in lowercase
			trim: true,
		},
		password: String,
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", UserSchema);
