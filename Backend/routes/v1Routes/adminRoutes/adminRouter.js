import express from "express";

import { getProductsController } from "../../../controllers/v1Controllers/adminController/getSalesController.js";
import { addGroceryItem} from "../../../controllers/v1Controllers/adminController/addGroceryItem.js";
import { getGroceryItemsController } from "../../../controllers/v1Controllers/adminController/getGroceryItemsController.js";

export const adminRouter = express.Router();

adminRouter.post("/add_grocery_item", addGroceryItem);
adminRouter.get("/products", getProductsController);
adminRouter.get("/get_grocery_items", getGroceryItemsController);


