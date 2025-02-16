import { buyerInfoApi } from "../../../services/grocifyApis/buyerInfoApi.js";

export const grocifyBuyerInformation = async () => {
    try {
        const response = await axios.get(buyerInfoApi);
        

        const buyers = response.data.data;

     

        document.getElementById("dataList").innerHTML = buyers.map(buyer => 
            `<li class="py-2 border-b">${buyer.buyerName} ordered <strong>${buyer.product}</strong> - Quantity: ${buyer.quantity}, Status: ${buyer.status}</li>`
        ).join("");
    } catch (error) {
        console.error("Error fetching buyers:", error);
        document.getElementById("dataList").innerHTML = `<li class="text-red-500">Failed to load buyer data.</li>`;
    }
};
