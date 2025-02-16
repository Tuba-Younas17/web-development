import { grocifyBuyerInformation } from "../utils/grocifyFunctions/grocifyBuyerInformation.js";
import { grocifyInventoryList } from "../utils/grocifyFunctions/grocifyInventoryList.js";
import { grocifySellerInformation } from "../utils/grocifyFunctions/grocifySellerInformation.js";
import { grocifyWindowBuyersInformation } from "../utils/grocifyFunctions/grocifyWindowBuyerInfo.js";

const fetchProductsBtn=document.getElementById("fetchProductsBtn");
fetchProductsBtn.addEventListener("click", grocifyInventoryList);

const fetchBuyersBtn=document.getElementById("fetchBuyersBtn");
fetchBuyersBtn.addEventListener("click", grocifyBuyerInformation)

const fetchSellersBtn=document.getElementById("fetchSellersBtn");
fetchSellersBtn.addEventListener("click",grocifySellerInformation);

const fetchWindowBuyersBtn=document.getElementById("fetchWindowBuyersBtn");
fetchWindowBuyersBtn.addEventListener("click",grocifyWindowBuyersInformation);