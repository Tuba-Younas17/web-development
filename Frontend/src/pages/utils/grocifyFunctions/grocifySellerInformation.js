import { grocifySellerApi } from "../../../services/grocifyApis/sellerInfoApi.js";

export const grocifySellerInformation = async () => {
    try {
        const response = await axios.get(grocifySellerApi);
        const sellers = response.data.data; // Access 'data' property

        document.getElementById("dataList").innerHTML = sellers.map(seller => 
            `<li class="py-2 border-b">
                <strong>${seller.sellerName}</strong> sold 
                <span class="text-blue-500">${seller.id}</span> units of 
                <span class="text-green-500">${seller.product}</span>, generating 
                <span class="font-bold text-red-500">$${seller.quantitySold}</span> in revenue.
            </li>`
        ).join("");

    } catch (error) {
        console.error("Error fetching sellers:", error);
        document.getElementById("sellerList").innerHTML = `<li class="text-red-500">Failed to load seller data.</li>`;
    }
};