import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();
		const { email, password } = body;

		if (!email || !password) {
			return NextResponse.json(
				{ error: "Missing fields" },
				{ status: 400 }
			);
		}

		await connectDB();

		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{
					error: "User not found. Redirecting to Register Page",
					redirectTo: "/auth/register",
				},
				{ status: 404 }
			);
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return NextResponse.json(
				{ error: "Invalid credentials" },
				{ status: 401 }
			);
		}

		// ✅ Generate JWT token
		const token = jwt.sign(
			{ userId: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		);

		// ✅ Create response and set cookie
		const response = NextResponse.json({
			message: "Login successful",
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});

		// ✅ Set token in secure, HTTP-only cookie
		response.cookies.set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			path: "/",
			maxAge: 60 * 60 * 24, // 1 day
		});

		return response;
	} catch (err) {
		console.error("Login API Error:", err);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
