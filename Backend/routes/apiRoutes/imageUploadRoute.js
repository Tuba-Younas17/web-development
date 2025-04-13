import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const imageUploadRoute = express.Router();

// Create upload directory if it doesn't exist
const uploadDir = path.join("public", "uploads");
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + ext);
	},
});
const upload = multer({ storage: storage });

imageUploadRoute.post("/upload-image", upload.single("bio"), (req, res) => {
	console.log(req.file);
	if (!req.file) {
		return res.status(400).json({ error: "No file uploaded" });
	}
	const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
		req.file.filename
	}`;
	res.status(200).json({ url: imageUrl });
});

export default imageUploadRoute;
