import express from "express";
import { addVendorController } from "../../../controllers/v1Controllers/vendorController/addVendorController.js";
import { updateVendorController } from "../../../controllers/v1Controllers/vendorController/updateVendorController.js";
import { getAllVendorsController } from "../../../controllers/v1Controllers/vendorController/getAllVendorContoller.js";
import { getVendorByIdController } from "../../../controllers/v1Controllers/vendorController/getVendorByIdController.js";
import { deleteVendorByIDController } from "../../../controllers/v1Controllers/vendorController/deleteVendorController.js";
export const vendorRouter = express.Router();

vendorRouter.post(`/add-vendor`, addVendorController);
vendorRouter.put("/update-vendor/:vendorId", updateVendorController);
vendorRouter.get("/get-vendors", getAllVendorsController);
vendorRouter.get("/get-vendor/:vendorId", getVendorByIdController);
vendorRouter.delete("/delete-vendor/:id", deleteVendorByIDController);

