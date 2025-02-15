import express from "express";
import { trackingProducts } from "./trackingProducts.js";

export const adminRouter = express.Router();

// Dummy Product Database
let products = [
    { id: 1, name: "Apple", category: "Fruits", stock: 100 },
    { id: 2, name: "Milk", category: "Dairy", stock: 50 },
    { id: 3, name: "Bread", category: "Bakery", stock: 30 },
    { id: 4, name: "Rice", category: "Grocery", stock: 75 }
];

// adminRouter.get("/products", trackingProducts(req, res, products));
adminRouter.get("/products",  trackingProducts( products));

