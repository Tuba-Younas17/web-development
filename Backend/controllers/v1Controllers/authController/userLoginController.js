import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../../../models/UserModel.js";

dotenv.config();

export const userLoginController = async (req, res) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.json({
				success: true,
				toastNotification: false,
                message: "Invalid email or password",
			});
		}
		//Ensure  only verified user can login
		if (!existingUser.isVerified) {
			return res.status(401).json({
				success: true,
				toastNotification: false,
				message: "Email not verified. Please check your inbox.",
			});
		}

		const passwordMatch = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!passwordMatch) {
			return res.json({
				success: true,
				toastNotification: false,
				message: "Invalid email or password",
			});
		}

		const token = jwt.sign(
			{ userId: existingUser._id },
			process.env.JWT_SECRET
			// {
			// 	expiresIn: "1h", // Token expires in 1 hour
			// }
		);

		return res.json({
			success: true,
			toastNotification: true,
			message: "Login successful",
			token: token,
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
