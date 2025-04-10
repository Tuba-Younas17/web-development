import { Vendor } from "../../../models/vendorModel.js";

export const addVendorController = async (req, res) => {
	try {
		const { name, businessName, email, products } = req.body;

		// Basic validation
		if (!name || !businessName || !email) {
			return res
				.status(400)
				.json({ message: "All required fields must be filled." });
		}

		// Check if vendor with email already exists
		const existingVendor = await Vendor.findOne({ email });
		if (existingVendor) {
			return res
				.status(409)
				.json({ message: "Vendor with this email already exists." });
		}

		// Create a new vendor
		const newVendor = new Vendor({
			name,
			businessName,
			email,
			products: products || [],
		});

		const savedVendor = await newVendor.save();

		return res.status(201).json({
			message: "Vendor added successfully.",
			vendor: savedVendor,
		});
	} catch (error) {
		console.error("Error adding vendor:", error);
		return res
			.status(500)
			.json({ message: "Server Error", error: error.message });
	}
};
