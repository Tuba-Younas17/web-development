import { Vendor } from "../../../models/vendorModel.js";

export const getAllVendorsController = async (req, res) => {
	try {
		const vendors = await Vendor.find();
		return res.status(200).json(vendors);
	} catch (error) {
		console.error("Error fetching all vendors:", error);
		return res.status(500).json({
			message: "Server Error",
			error: error.message,
		});
	}
};
