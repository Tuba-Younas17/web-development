import express from "express";

import { buyerOrderTracking } from "../../../controllers/v1Controllers/buyerController/buyerOrderTrackingContoller.js";

export const buyerRouter = express.Router();


// Define a route to get buyer orders
buyerRouter.get("/orders",  buyerOrderTracking);
