import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
	try {
		// ✅ Extract token from Authorization header
		const authHeader = req.headers.get("authorization");
		const token = authHeader?.split(" ")[1];

		if (!token) {
			return Response.json({ error: "Unauthorized" }, { status: 401 });
		}

		// ✅ Verify token
		await jwtVerify(token, secret);

		await connectDB();
		const users = await User.find({}, "name age courses");

		return Response.json(users, { status: 200 });
	} catch (err) {
		console.error("GET Users API Error:", err);
		return Response.json(
			{ error: "Failed to fetch users" },
			{ status: 500 }
		);
	}
}
