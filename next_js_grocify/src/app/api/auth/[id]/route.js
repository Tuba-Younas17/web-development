import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import { verifyToken } from "@/utils/authUtils/verifyToken";
import { NextResponse } from "next/server";

// ✅ GET single user
export async function GET(req, context) {
	try {
		await verifyToken(req);
		await connectDB();

		const { params } = await context;
		const user = await User.findById(params.id).select("name age courses");

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.error("GET Error:", error);
		return NextResponse.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}

// ✅ PUT update user
export async function PUT(req, context) {
	try {
		await verifyToken(req);
		await connectDB();

		const { params } = await context;
		const updatedData = await req.json();

		const updatedUser = await User.findByIdAndUpdate(
			params.id,
			updatedData,
			{ new: true }
		);

		if (!updatedUser) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: "User updated successfully", user: updatedUser },
			{ status: 200 }
		);
	} catch (error) {
		console.error("PUT Error:", error);
		return NextResponse.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}

// ✅ DELETE user (clears token too)
export async function DELETE(req, context) {
	try {
		await verifyToken(req);
		await connectDB();

		const { params } = await context;
		const deletedUser = await User.findByIdAndDelete(params.id);

		if (!deletedUser) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		const response = NextResponse.json(
			{ message: "User deleted successfully" },
			{ status: 200 }
		);
		response.cookies.set("token", "", { maxAge: 0, path: "/" });
		return response;
	} catch (error) {
		console.error("DELETE Error:", error);
		return NextResponse.json(
			{ error: "Unauthorized or server error" },
			{ status: 401 }
		);
	}
}
