import express from "express";
import { userVerifyTokenController } from "../../../controllers/v1Controllers/authController/verificationController/userVerificationContoller.js";

export const usersRouter = express.Router();

usersRouter.get(`/:userId/verify/:token`, userVerifyTokenController);
