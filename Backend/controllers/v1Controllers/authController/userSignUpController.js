import bcrypt from "bcryptjs";
import { User } from "../../../models/UserModel.js";
import dotnev from "dotenv";
import { Token } from "../../../models/tokenModel.js";
import crypto from "crypto";
import { sendEmail } from "../../../utils/emailService.js";
dotnev.config();

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
		// sending email
		// saving the new token
		const token = await new Token({
			userId: savedUser._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		// making url
		// making url
		const url = `${process.env.NODE_BASE_URL}${process.env.API}${process.env.V1}/users/${savedUser._id}/verify/${token.token}`;
		// console.log(url);
		const message = `
			<h2>Hello ${savedUser.name},</h2>
			<p>Thank you for signing up at Grocify!</p>
			<p>Please verify your email by clicking the link below:</p>
			<a href="${url}" target="_blank">Verify Email</a>
			<p>If you didn't sign up, please ignore this email.</p>
			<p>Thanks,<br/>The Grocify Team</p>
		`;

		await sendEmail(savedUser.email, "Confirm Your Email for Grocify", message);

		return res.status(201).json({
			success: true,
			message:
				"User signed up successfully! An Email Sent to your account,please verify",
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
