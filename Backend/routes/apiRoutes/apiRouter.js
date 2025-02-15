import express from "express";
import { homeController } from "../../controllers/homeController.js";
import { aboutController } from "../../controllers/aboutController.js";
import { v1Router } from "../v1Routes/v1Router.js";




export const router = express.Router();

router.use(`/v1`,v1Router);
// router.get("/", homeController);
// router.get("/about", aboutController);



