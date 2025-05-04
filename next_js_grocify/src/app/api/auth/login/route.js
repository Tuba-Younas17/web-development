import connectDB from "@/libs/mongoDb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
	try {
		const body = await req.json();
		const { email, password } = body;

		if (!email || !password) {
			return Response.json({ error: "Missing fields" }, { status: 400 });
		}

		await connectDB();

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return Response.json(
				{
					error: "User not found. Redirecting to Register Page",
					redirectTo: "/auth/register",
				},
				{ status: 404 }
			);
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordCorrect) {
			return Response.json(
				{ error: "Invalid credentials" },
				{ status: 401 }
			);
		}

		return Response.json(
			{
				message: "Login successful",
				user: { name: existingUser.name, email: existingUser.email },
			},
			{ status: 200 }
		);
	} catch (err) {
		console.error("API Error:", err);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
