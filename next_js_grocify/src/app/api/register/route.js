import connectDB from "@/libs/mongoDb";
import User from "@/models/User";


export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email, password } = body;

		if (!name || !email || !password) {
			return Response.json({ error: "Missing fields" }, { status: 400 });
		}

		await connectDB();

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return Response.json(
				{ error: "User already exists" },
				{ status: 409 }
			);
		}

		const newUser = await User.create({ name, email, password });

		return Response.json(
			{ message: "Registered successfully", user: newUser },
			{ status: 201 }
		);
	} catch (err) {
		console.error("API Error:", err);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
