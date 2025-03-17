import express from 'express';
import { userSignUpController } from '../../../controllers/v1Controllers/authController/userSignUpController.js';
import { userLoginController } from '../../../controllers/v1Controllers/authController/userLoginController.js';
export const authRouter = express.Router();
authRouter.post(`/signup`, userSignUpController);
authRouter.post(`/login`, userLoginController);