export const fun1 = (deal,dealDiv,isExpanded) => {
    if (isExpanded) {
        dealDiv.innerHTML = `<h1>${deal.name}</h1>`;
        dealDiv.style.maxHeight = "50px";
    } else {
        dealDiv.innerHTML = `<h1>${deal.name}</h1><p>${deal.description} </p> <p>Total Price: Rs. ${deal.totalprice}</p>  `;
        deal.items.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = `${item.name} - ${item.quantity}`;
            dealDiv.appendChild(itemElement);
        });
        const addtocartButton = document.createElement("button");
        addtocartButton.textContent = "Add to Cart";
        addtocartButton.classList="w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-800 transition-colors";
        dealDiv.appendChild(addtocartButton);
        dealDiv.style.maxHeight = "500px";
    }
    return !isExpanded;
}
export const fun2=(item,div,isExpanded)=>{
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



