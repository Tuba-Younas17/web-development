import express from "express";
import { trackingWindowBuyers } from "./trackingWindowBuyers.js";


export const windowBuyerRouter = express.Router();

// Dummy Data for Window Buyers
const windowBuyers = [
    { id: 301, name: "John Doe", browsedProducts: ["Oranges", "Eggs", "Butter"], lastVisited: "2025-02-14" },
    { id: 302, name: "Jane Smith", browsedProducts: ["Tomatoes", "Milk", "Yogurt"], lastVisited: "2025-02-13" },
    { id: 303, name: "Mike Johnson", browsedProducts: ["Rice", "Pasta", "Flour"], lastVisited: "2025-02-12" }
];

// Route for window buyers' browsing activity
windowBuyerRouter.get("/browsing", trackingWindowBuyers(windowBuyers));

