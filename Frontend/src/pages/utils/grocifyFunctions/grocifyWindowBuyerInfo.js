import { windowBuyerApi } from "../../../services/grocifyApis/windowBuyerApi.js";

export const grocifyWindowBuyersInformation=async()=>{
    try {
            const response = await axios.get(windowBuyerApi);
            const windowbuyers = response.data.data;
            document.getElementById("dataList").innerHTML = windowbuyers.map(windowbuyer => 
                `<li class="py-2 border-b">
                    <strong>${windowbuyer.name}</strong> browsed:
                    <span class="text-blue-500">${windowbuyer.browsedProducts.join(", ")}</span>
                    <br><span class="text-gray-500 text-sm">Last visited: ${windowbuyer.lastVisited}</span>
                </li>`
            ).join("");
            

}catch (error) {
    console.error("Error fetching WindowBuyer data:", error);
    document.getElementById("sellerList").innerHTML = `<li class="text-red-500">Failed to load WindowBuyer data.</li>`;
}
}

