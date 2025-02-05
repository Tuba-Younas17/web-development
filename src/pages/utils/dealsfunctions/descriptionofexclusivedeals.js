export const descriptionOfExclusiveDeals=(item,div,isExpanded)=>{
    if(isExpanded){
        div.innerHTML=`<h1>${item.name}</h1>`;
        div.style.maxHeight="50px";
    }else{
        div.innerHTML=`<h1>${item.name}</h1><p>Total Price: Rs. ${item.totalprice}<p>`;
        item.items.forEach(item => {
            const itemElement=document.createElement("p");
            itemElement.textContent=`${item.name} - ${item.model} - ${item.price}`;
            
            div.appendChild(itemElement);
        });
        const addtocartButton = document.createElement("button");
        addtocartButton.textContent = "Add to Cart";
        addtocartButton.classList="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-800 transition-colors";
        div.appendChild(addtocartButton);
        div.style.maxHeight="500px";
    }
    return !isExpanded;
}
