import express from 'express';
import { userSignUpController } from '../../../controllers/v1Controllers/authController/userSignUpController.js';
import { userLoginController } from '../../../controllers/v1Controllers/authController/userLoginController.js';
import { validationSignUpReq, validSignUpReq } from '../../../middlewares/reqMiddleware/signUpReqMiddleware.js';
export const authRouter = express.Router();

authRouter.post(`/signup`,validSignUpReq,validationSignUpReq, userSignUpController);
authRouter.post(`/login`, userLoginController);

