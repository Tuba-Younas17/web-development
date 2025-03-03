import express from "express";
import { sellerSalesTracking } from "../../../controllers/v1Controllers/sellerContoller/sellerSalesTrackingController.js";

export const sellerRouter = express.Router();

sellerRouter.get("/sales",  sellerSalesTracking);
