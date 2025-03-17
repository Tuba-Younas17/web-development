import bcrypt from "bcryptjs";
import { User } from "../../../models/UserModel.js";
import dotnev from "dotenv";
dotnev.config()

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
				success: true,
				message: "User already exists. Please log in.",
				toastNotification: false,
			});
		}
		const saltRounds = process.env.SALT_ROUNDS;
		const salt = bcrypt.genSaltSync(+saltRounds);
		// console.log(salt);

		const hashedPassword = await bcrypt.hash(password, salt);
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
			toastNotification: true,
		});
	} catch (error) {
		console.error("Signup Error:", error);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};
