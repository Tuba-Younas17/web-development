import bcrypt from "bcryptjs";
import { User } from "../../../models/UserModel.js";

export const userSignUpController = async (req, res) => {
	try {
		// console.log("Incoming Request Data:", req.body);
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.json({
				success: false,
				message: "All fields are required",
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.json({
				success: false,
				message: "User already exists. Please log in.",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		const savedUser = await newUser.save();
		return res.status(201).json({
			success: true,
			message: "User signed up successfully!",
			user: savedUser,
		});
	} catch (error) {
		console.error("Signup Error:", error);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};
