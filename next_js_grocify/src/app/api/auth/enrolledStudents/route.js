import connectDB from "@/libs/mongoDb";
import User from "@/models/User";

export async function GET(req) {
	try {
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
