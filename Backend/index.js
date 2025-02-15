import express from "express";
import path from "path";
import cors from "cors"
import { homePage } from "./controllers/homeController.js";
import { aboutPage } from "./controllers/aboutController.js";

const app = express();
app.use(cors());
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

app.get("/",homeController); ;
app.get("/about", aboutController); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
