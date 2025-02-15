import express from "express";
import path from "path";
import cors from "cors"
// import { homeController } from "./controllers/homeController.js";
// import { aboutController,  } from "./controllers/aboutController.js";
import {router} from "./routes/apiRoutes/apiRouter.js";

const app = express();
app.use(cors());
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));
app.use("/api", router);

// app.get("/api",homeController);
// app.get("/api/about",aboutController);
// app.get("/",homeController); ;
// app.get("/about", aboutController); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
