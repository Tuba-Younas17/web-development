import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function DELETE(req) {
	try {
		// 1. Extract token from cookies
		const token = req.cookies.get("token")?.value;
		if (!token) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		// 2. Verify the token
		const { payload } = await jwtVerify(token, secret);
		const userId = payload?.userId;
		if (!userId) {
			return NextResponse.json(
				{ error: "Invalid token payload" },
				{ status: 401 }
			);
		}

		// 3. Delete user from DB
		// await connectDB();
		// const deletedUser = await User.findByIdAndDelete(userId);
		// if (!deletedUser) {
		// 	return NextResponse.json(
		// 		{ error: "User not found" },
		// 		{ status: 404 }
		// 	);
		// }

		// 4. Clear token cookie
		const response = NextResponse.json(
			{ message: "Logout successful, user deleted" },
			{ status: 200 }
		);
		response.cookies.set("token", "", { maxAge: 0 });

		return response;
	} catch (error) {
		console.error("DELETE /api/auth/logout error:", error);
		return NextResponse.json({ error: "Logout failed" }, { status: 500 });
	}
}
