import connectDB from "@/libs/mongoDb";
import User from "@/models/User";

export async function DELETE(request, context) {
	try {
		await connectDB();

		const { id } = await context.params;

		const deletedUser = await User.findByIdAndDelete(id);

		if (!deletedUser) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		return Response.json(
			{ message: "User deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("DELETE User API Error:", error);
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
