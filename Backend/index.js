import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// About route - Send about.html
app.get("/about", (req, res) => {
    res.sendFile(path.resolve("public/about.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
