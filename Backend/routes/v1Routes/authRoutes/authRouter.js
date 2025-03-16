import express from 'express';
import { userSignUpController } from '../../../controllers/v1Controllers/authController/userSignUpController.js';
export const authRouter = express.Router();
authRouter.post(`/signup`, userSignUpController);