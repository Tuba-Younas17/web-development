import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../../../models/UserModel.js";

dotenv.config();

export const userLoginController = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if user exists
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
            return res.json({
				toastNotification: false,
				success: true,
				message: "Invalid email or password",
			});
		}

		// Verify password
		const passwordMatch = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!passwordMatch) {
            return res.json({
				toastNotification: false,
				success: true,
				message: "Invalid email or password",
			});
		}

		// Generate JWT token
		const token = jwt.sign(
			{ userId: existingUser._id },
			process.env.JWT_SECRET,
			// {
			// 	expiresIn: "1h", // Token expires in 1 hour
			// }
		);

        return res.json({
            toastNotification:true,
			success: true,
			message: "Login successful",
			token:token
		});
	} catch (error) {
		console.error(error);
		return res.json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
};
