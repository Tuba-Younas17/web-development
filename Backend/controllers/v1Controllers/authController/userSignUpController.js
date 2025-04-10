import bcrypt from "bcryptjs";
import { User } from "../../../models/UserModel.js";
import dotenv from "dotenv";
import { Token } from "../../../models/tokenModel.js";
import crypto from "crypto";
import { sendEmail } from "../../../utils/emailService.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

// For __dirname compatibility in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const userSignUpController = async (req, res) => {
	try {
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

		// ✅ Handle profile image upload
		const { profileImage } = req.files || {};
		let imageUrl = "";

		if (profileImage) {
			const imageFile = Array.isArray(profileImage)
				? profileImage[0]
				: profileImage;

			// Ensure upload directory exists
			const uploadPath = path.join(__dirname, "../../public");
			if (!fs.existsSync(uploadPath)) {
				fs.mkdirSync(uploadPath, { recursive: true });
			}

			// Unique file name
			const currentDate = new Date()
				.toISOString()
				.replace(/[-:]/g, "")
				.split(".")[0];
			const uniqueFileName = `${currentDate}_${imageFile.originalFilename}`;
			const savedFilePath = path.join(uploadPath, uniqueFileName);

			// Move the file
			fs.renameSync(imageFile.path, savedFilePath);

			// Create public URL for the image
			const baseUrl = `${req.protocol}://${req.get("host")}`;
			imageUrl = `${baseUrl}/${uniqueFileName}`;
		}

		// ✅ Encrypt password
		const saltRounds = process.env.SALT_ROUNDS;
		const salt = bcrypt.genSaltSync(+saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		// ✅ Create and save user
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
			profileImage: imageUrl, // store image URL
		});

		const savedUser = await newUser.save();

		// ✅ Token creation for email verification
		const token = await new Token({
			userId: savedUser._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();

		const url = `${process.env.NODE_BASE_URL}${process.env.API}${process.env.V1}/users/${savedUser._id}/verify/${token.token}`;

		const message = `
			<h2>Hello ${savedUser.name},</h2>
			<p>Thank you for signing up at Grocify!</p>
			<p>Please verify your email by clicking the link below:</p>
			<a href="${url}" target="_blank">Verify Email</a>
			<p>If you didn't sign up, please ignore this email.</p>
			<p>Thanks,<br/>The Grocify Team</p>
		`;

		await sendEmail(
			savedUser.email,
			"Confirm Your Email for Grocify",
			message
		);

		return res.status(201).json({
			success: true,
			message:
				"User signed up successfully! An Email Sent to your account, please verify",
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
