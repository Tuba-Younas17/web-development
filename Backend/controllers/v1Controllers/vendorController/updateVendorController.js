import { Vendor } from "../../../models/vendorModel.js";


export const updateVendorController = async (req, res) => {
	try {
		const { vendorId } = req.params;
		const { name, businessName, email } = req.body;

		// Check if vendor exists
		const vendor = await Vendor.findById(vendorId);
		if (!vendor) {
			return res.status(404).json({ message: "Vendor not found." });
		}

		// Update fields if provided
		if (name) vendor.name = name;
		if (businessName) vendor.businessName = businessName;
		if (email) vendor.email = email;

		const updatedVendor = await vendor.save();

		return res.status(200).json({
			message: "Vendor updated successfully.",
			vendor: updatedVendor,
		});
	} catch (error) {
		console.error("Error updating vendor:", error);
		return res.status(500).json({
			message: "Server Error",
			error: error.message,
		});
	}
};
