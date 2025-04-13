import bcrypt from "bcryptjs";
import { User } from "../../../models/UserModel.js";
import dotenv from "dotenv";
import { Token } from "../../../models/tokenModel.js";
import { randomBytes } from "crypto"; // updated for ES modules
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
		// let { bio } = req.body;
		let bio = req.body.bio;

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

		const uploadPath = path.join(__dirname, "../../public");
		if (!fs.existsSync(uploadPath)) {
			fs.mkdirSync(uploadPath, { recursive: true });
		}

		// ✅ Handle file uploads
		const { profileImage,  bioImage } = req.files || {};

		
		let profileImageUrl = "";
		let bioImageUrl = "";

		// 🔹 Save profile image
		if (profileImage) {
			const imageFile = Array.isArray(profileImage)
				? profileImage[0]
				: profileImage;
			const uniqueFileName = `${Date.now()}_${
				imageFile.originalFilename
			}`;
			const savedFilePath = path.join(uploadPath, uniqueFileName);
			fs.renameSync(imageFile.path, savedFilePath);
			const baseUrl = `${req.protocol}://${req.get("host")}`;
			profileImageUrl = `${baseUrl}/${uniqueFileName}`;
		}

		// 🔹 Save bio image
		if (bioImage) {
			const imageFile = Array.isArray(bioImage) ? bioImage[0] : bioImage;
			const uniqueFileName = `${Date.now()}_${
				imageFile.originalFilename
			}`;
			const savedFilePath = path.join(uploadPath, uniqueFileName);
			fs.renameSync(imageFile.path, savedFilePath);
			const baseUrl = `${req.protocol}://${req.get("host")}`;
			bioImageUrl = `${baseUrl}/${uniqueFileName}`;

			// Optionally embed the image in bio
			bio = bio
				? `${bio}<br/><img src="${bioImageUrl}" alt="Bio Image" />`
				: `<img src="${bioImageUrl}" alt="Bio Image" />`;
		}

		// ✅ Encrypt password
		const saltRounds = process.env.SALT_ROUNDS;
		const salt = bcrypt.genSaltSync(+saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		// ✅ Save user to DB
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
			profileImage: profileImageUrl,
			bio, // bio with embedded image if exists
		});

		const savedUser = await newUser.save();

		// ✅ Email verification token
		const token = await new Token({
			userId: savedUser._id,
			token: randomBytes(32).toString("hex"),
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
