import { adminApi } from "../../../services/grocifyApis/adminApi.js";


export const grocifyInventoryList= async () => {
    console.log(adminApi);
    try {
        const response = await axios.get(adminApi);
        const products = response.data;
        
        document.getElementById("dataList").innerHTML = products.map(product => 
            `<li class="py-2 border-b">${product.name} - <strong>${product.stock}</strong> in stock</li>`
        ).join("");
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById("dataList").innerHTML = `<li class="text-red-500">Failed to load product data.</li>`;
    }
}