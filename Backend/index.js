import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/apiRoutes/apiRouter.js";
import connectToMongoDb from "./config/database.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
connectToMongoDb();
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
