import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/groceryItems";

const connectToMongoDb = async () => {
	try {
        const response = await mongoose.connect(MONGO_URI);
		if (response.STATES[1]) {
			console.log(`connected to mongodb at url ${MONGO_URI} `);
		} else {
			console.log(`an error occurred while connecting to mongo db`);
		}
	} catch (error) {
		console.error(" MongoDB Connection Error:", error);
		// process.exit(1); // Stop server if connection fails
	}
};

export default connectToMongoDb;
