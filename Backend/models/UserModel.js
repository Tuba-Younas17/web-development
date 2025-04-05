import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		password: String,
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true
	}
);

export const User = mongoose.model("User", UserSchema);
