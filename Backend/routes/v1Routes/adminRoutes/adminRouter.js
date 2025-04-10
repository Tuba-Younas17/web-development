import express from "express";

import { getProductsController } from "../../../controllers/v1Controllers/adminController/getSalesController.js";
import { getGroceryItemsController } from "../../../controllers/v1Controllers/adminController/getGroceryItemsController.js";
import { getGroceryItemsByIdController } from "../../../controllers/v1Controllers/adminController/getGroceryItemsByIdController.js";
import { deleteGroceryItemByIdController } from "../../../controllers/v1Controllers/adminController/deleteGroceryItemByIdController.js";
import { updateGroceryItemByIdController } from "../../../controllers/v1Controllers/adminController/updateGroceryItemByIdController.js";
import { addGroceryItemController } from "../../../controllers/v1Controllers/adminController/addGroceryItemController.js";
import { validGroceryRequest } from "../../../middlewares/reqMiddleware/groceryRefMiddleware.js";
import { validateGroceryRequest } from "../../../middlewares/reqMiddleware/groceryRefMiddleware.js";
import { multipartyMiddleware } from "../../../middlewares/fileUploadMiddlewares/fileUploadMiddlewareforGrocery.js";

export const adminRouter = express.Router();

adminRouter.post("/add-grocery-items",
    // validGroceryRequest,
    // validateGroceryRequest,
    multipartyMiddleware,
    addGroceryItemController);
adminRouter.get("/products", getProductsController);
adminRouter.get("/get-grocery-items", getGroceryItemsController);
adminRouter.get("/get-grocery-items-by-id/:id", getGroceryItemsByIdController);
adminRouter.delete("/delete-grocery-items-by-id/:id", deleteGroceryItemByIdController)
adminRouter.put("/update-grocery-items-by-id/:id",updateGroceryItemByIdController);