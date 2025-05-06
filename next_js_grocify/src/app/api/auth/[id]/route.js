import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET); // store secret in .env.local

// Utility: Verify the token
async function verifyToken(req) {
	const authHeader = req.headers.get("authorization");
	const token = authHeader?.split(" ")[1];

	if (!token) throw new Error("Unauthorized");

	const { payload } = await jwtVerify(token, JWT_SECRET);
	return payload;
}

export async function GET(req, context) {
	try {
		await verifyToken(req); // ✅ Verify JWT
		const { params } = context;
		await connectDB();

		const user = await User.findById(params.id).select("name age courses");

		if (!user) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		return Response.json(user, { status: 200 });
	} catch (error) {
		console.error("GET Error:", error);
		return Response.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}

export async function PUT(req, context) {
	try {
		await verifyToken(req); // ✅ Verify JWT
		const { params } = context;
		await connectDB();

		const updatedData = await req.json();
		const updatedUser = await User.findByIdAndUpdate(
			params.id,
			updatedData,
			{
				new: true,
			}
		);

		if (!updatedUser) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		return Response.json(
			{ message: "User updated successfully", user: updatedUser },
			{ status: 200 }
		);
	} catch (error) {
		console.error("PUT Error:", error);
		return Response.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}

export async function DELETE(req, context) {
	try {
		await verifyToken(req); // ✅ Verify JWT
		const { params } = context;
		await connectDB();

		const deletedUser = await User.findByIdAndDelete(params.id);

		if (!deletedUser) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		return Response.json(
			{ message: "User deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("DELETE Error:", error);
		return Response.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}
