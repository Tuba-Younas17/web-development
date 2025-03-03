import express from "express";

import { windowBuyerTracking } from "../../../controllers/windowBuyerTrackingController.js";


export const windowBuyerRouter = express.Router();


windowBuyerRouter.get("/browsing", windowBuyerTracking);

