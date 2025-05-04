import connectDB from "@/libs/mongoDb";
import User from "@/models/User";

export async function GET(req, context) {
	try {
		const { params } = context; // ✅ safely destructure
		await connectDB();

		const user = await User.findById(params.id).select("name age courses");

		if (!user) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		return Response.json(user, { status: 200 });
	} catch (error) {
		console.error("GET Error:", error);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}

export async function PUT(req, context) {
	try {
		const { params } = context; // ✅ safely destructure
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
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}


//  DELETE user
export async function DELETE(request, context) {
	try {
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
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}

