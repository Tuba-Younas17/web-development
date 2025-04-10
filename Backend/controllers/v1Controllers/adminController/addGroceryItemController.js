import { GroceryItem } from "../../../models/GroceryModelItem.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// For __dirname compatibility in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addGroceryItemController = async (req, res) => {
	try {
		console.log("Incoming Request Data:", req.body);

		const { title, quantity, price, description, discount } = req.body;

		// Access uploaded file(s)
		const { images } = req.files;

		if (!images) {
			return res.status(400).json({
				success: false,
				message: "Product image is required",
			});
		}

		// Handle both array or single file
		const imageFile = Array.isArray(images) ? images[0] : images;

		// Ensure upload directory exists
		const uploadPath = path.join(__dirname, "../../public");
		if (!fs.existsSync(uploadPath)) {
			fs.mkdirSync(uploadPath, { recursive: true });
		}

		// Build unique file name
		const currentDate = new Date()
			.toISOString()
			.replace(/[-:]/g, "")
			.split(".")[0];
		const uniqueFileName = `${currentDate}_${imageFile.originalFilename}`;
		const savedFilePath = path.join(uploadPath, uniqueFileName);
		// console.log(savedFilePath);

		// Move file to permanent location
		fs.renameSync(imageFile.path, savedFilePath);

		// Build image URL for saving in DB
		const baseUrl = `${req.protocol}://${req.get("host")}`;
		const imageUrl = `${baseUrl}/${uniqueFileName}`;

		// Save grocery item to DB
		const groceryItem = new GroceryItem({
			title,
			quantity,
			price,
			description,
			discount,
			image: imageUrl,
		});

		const groceryAdded = await groceryItem.save();

		return res.json({
			success: true,
			data: groceryAdded,
		});
	} catch (error) {
		console.log(error);

		if (error.name === "ValidationError") {
			return res.status(400).json({
				success: false,
				errors: error.errors,
			});
		}

		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};
