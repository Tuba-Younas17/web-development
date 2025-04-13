import express from 'express';
import { homeController } from '../../controllers/homeController.js';
import { aboutController } from '../../controllers/aboutController.js';
import { adminRouter } from './adminRoutes/adminRouter.js';
import { buyerRouter } from './buyerRoutes/buyerRouter.js';
import { sellerRouter } from './sellerRoutes/sellerRouter.js';
import { windowBuyerRouter } from './windowBuyerRoutes/windowBuyerRouter.js';
import { authRouter } from './authRoutes/authRouter.js';
import { usersRouter } from './userRoutes/userRouter.js';
import { reviewRouter } from './reviewRoutes/reviewRouter.js';
import { vendorRouter } from './vendorRoutes/vendorRouter.js';
import imageUploadRoute from '../apiRoutes/imageUploadRoute.js';



export const v1Router =express.Router();

v1Router.get(`/`,homeController);
v1Router.get(`/about`,aboutController);
v1Router.use(`/admin`, adminRouter);
v1Router.use(`/auth`, authRouter);
v1Router.use(`/users`, usersRouter);
v1Router.use (`/buyer`,buyerRouter);
v1Router.use(`/seller`,sellerRouter);
v1Router.use(`/windowbuyer`, windowBuyerRouter);
v1Router.use(`/reviews`, reviewRouter);
v1Router.use(`/vendor`, vendorRouter);
v1Router.use("/uploadImage", imageUploadRoute);


