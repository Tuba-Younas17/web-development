import express from "express";
import { addReviewController } from "../../../controllers/v1Controllers/reviewController/addReviewController.js";
import { getReviewController } from "../../../controllers/v1Controllers/reviewController/getReviewController.js";
export const reviewRouter = express.Router();

reviewRouter.post(`/add-review`, addReviewController);
reviewRouter.get(`/get-review`, getReviewController);