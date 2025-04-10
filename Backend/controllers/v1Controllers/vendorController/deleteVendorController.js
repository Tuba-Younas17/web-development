// controllers/v1Controllers/vendorController/deleteVendorByIDController.js

import { Vendor } from "../../../models/vendorModel.js";

export const deleteVendorByIDController = async (req, res) => {
	try {
		const { id } = req.params;

		// Check if vendor exists
		const vendor = await Vendor.findById(id);
		if (!vendor) {
			return res.status(404).json({ message: "Vendor not found." });
		}

		// Delete vendor
		await Vendor.findByIdAndDelete(id);

		return res
			.status(200)
			.json({ message: "Vendor deleted successfully." });
	} catch (error) {
		console.error("Error deleting vendor:", error);
		return res
			.status(500)
			.json({ message: "Server Error", error: error.message });
	}
};
