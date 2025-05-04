// api/auth/register/route.js

import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email, password, age, courses } = body;

		if (!name || !email || !password || !age || !courses) {
			return Response.json({ error: "Missing fields" }, { status: 400 });
		}

		await connectDB();

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return Response.json(
				{
					error: "User already exists redirecting to Login Page",
					redirectTo: "/auth/login",
				},
				{ status: 409 }
			);
		}

		const saltRounds = parseInt(process.env.SALT);
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
			age,
			courses,
		});

		return Response.json(
			{
				message:
					"Registration successful. Please log in to access the home page.",
				user: newUser,
			},
			{ status: 201 }
		);
	} catch (err) {
		console.error("API Error:", err);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
