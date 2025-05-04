import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import bcrypt from "bcryptjs"; // Make sure to install bcryptjs

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

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		return Response.json(
			{ message: "Registered successfully", user: newUser },
			{ status: 201 }
		);
	} catch (err) {
		console.error("API Error:", err);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
