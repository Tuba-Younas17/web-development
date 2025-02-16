export const descriptionOfDiscountedDeals = (deal, dealDiv, isExpanded) => {
    if (isExpanded) {
        dealDiv.innerHTML = `<h1>${deal.name}</h1>`;
        dealDiv.style.maxHeight = "50px";
    } else {
        dealDiv.innerHTML = `<h1>${deal.name}</h1><p>${deal.description}</p> <p>Total Price: Rs. ${deal.totalprice}</p>`;

        // Using map to create item elements and append them as a single operation
        const itemsHTML = deal.items.map(item => `<p>${item.name} - ${item.quantity}</p>`).join("");
        dealDiv.innerHTML += itemsHTML;

        const addtocartButton = document.createElement("button");
        addtocartButton.textContent = "Add to Cart";
        addtocartButton.className = "w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-800 transition-colors";
        dealDiv.appendChild(addtocartButton);
        dealDiv.style.maxHeight = "500px";
    }
    return !isExpanded;
};
