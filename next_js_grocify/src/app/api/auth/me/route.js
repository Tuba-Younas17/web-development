import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
	try {
		const token = req.cookies.get("token")?.value;

		if (!token) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const { payload } = await jwtVerify(token, secret);
		const userId = payload?.userId;

		if (!userId) {
			return NextResponse.json(
				{ error: "Invalid token payload" },
				{ status: 401 }
			);
		}

		await connectDB();
		const user = await User.findById(userId).select("email");

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ userId: user._id, email: user.email });
	} catch (err) {
		console.error("GET /api/auth/me error:", err);
		return NextResponse.json(
			{ error: "Token invalid or expired" },
			{ status: 401 }
		);
	}
}
