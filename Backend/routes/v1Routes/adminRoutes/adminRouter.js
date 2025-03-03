import express from "express";

import { getProductsController } from "../../../controllers/v1Controllers/adminController/getSalesController.js";
import { addGroceryItem} from "../../../controllers/v1Controllers/adminController/addGroceryItem.js";

export const adminRouter = express.Router();

adminRouter.post("/add_grocery_item", addGroceryItem);
adminRouter.get("/products",  getProductsController);

