import { Vendor } from "../../../models/vendorModel.js";

export const getVendorByIdController = async (req, res) => {
	try {
		const { vendorId } = req.params;

		if (!vendorId) {
			return res.status(400).json({ message: "Vendor ID is required." });
		}

		const vendor = await Vendor.findById(vendorId);
		if (!vendor) {
			return res.status(404).json({ message: "Vendor not found." });
		}

		return res.status(200).json(vendor);
	} catch (error) {
		console.error("Error fetching vendor by ID:", error);
		return res.status(500).json({
			message: "Server Error",
			error: error.message,
		});
	}
};
