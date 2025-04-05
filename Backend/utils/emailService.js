import { response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (email, subject, message) => {
	try {
		// configuring the nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		// sending email with nodemailer
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			html: message,
		});
		console.log("Email sent successfully");
	} catch (error) {
		console.log("Email not sent");
		console.log(error);
		return response.json({
			error: error.message,
		});
	}
};
