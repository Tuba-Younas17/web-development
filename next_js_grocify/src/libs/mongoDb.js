import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/skillForge"; // Local Mongo URI

const connectDB = async () => {
	if (mongoose.connections[0].readyState) {
		// Already connected
		return;
	}
	try {
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "skillForge",
		});
		console.log("✅ MongoDB connected");
	} catch (error) {
		console.error("❌ MongoDB connection error:", error);
		throw new Error("MongoDB connection failed");
	}
};

export default connectDB;
