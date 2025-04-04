import { mongoose } from "mongoose";

const { Schema } = mongoose;

const TokenSchema = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
			unique: true,
		},
		token: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now(),
			expires: 3600, // 1 hour
		},
	},
	{
		timestamps: true, // adds createdAt & updatedAt automatically
	}
);
export const Token = mongoose.model("tokens", TokenSchema);
