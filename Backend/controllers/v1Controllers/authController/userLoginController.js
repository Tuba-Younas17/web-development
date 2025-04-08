import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../../../models/UserModel.js";

dotenv.config();

export const userLoginController = async (req, res) => {
	try {
		const { email, password, role } = req.body;

		// Step 1: Check if user exists
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.json({
				success: true,
				toastNotification: false,
				message: "Invalid email or password",
			});
		}

		// Step 2: Match password
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

		// Step 3: Check if user has the requested role
		if (!existingUser.roles.includes(role)) {
			return res.json({
				success: true,
				toastNotification: false,
				message: `You do not have access as a ${role}`,
			});
		}

		// Step 4: Generate token with role info
		const token = jwt.sign(
			{ userId: existingUser._id, roles: existingUser.roles },
			process.env.JWT_SECRET
		);

		return res.json({
			success: true,
			toastNotification: true,
			message: `Login successful as ${role}`,
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
