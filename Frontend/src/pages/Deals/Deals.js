
import { descriptionOfDiscountedDeals } from '../utils/dealsFunctions/descriptionofDiscountedDeals.js';
import {descriptionOfExclusiveDeals } from '../utils/dealsFunctions/descriptionOfExclusiveDeals.js';



//DOM manipulation
const container = document.querySelector("#deals-container");

const dealsData = {
    deal1: {
        name: "Deal 1",
        description: "Get fresh fruits and vegetables at a discounted price.",
        totalprice: 3351.32,
        items: [
            { name: "Apples", quantity: "1kg" },
            { name: "Tomatoes", quantity: "2kg" },
            { name: "Carrots", quantity: "1.5kg" }
        ]
    },
    deal2: {
        name: "Deal 2",
        description: "Special dairy combo with great savings.",
        totalprice: 2792.76,
        items: [
            { name: "Milk", quantity: "2 Liters" },
            { name: "Cheese", quantity: "500g" },
            { name: "Butter", quantity: "250g" }
        ]
    },
    deal3: {
        name: "Deal 3",
        description: "Bakery special combo with fresh breads and cookies.",
        totalprice: 4189.15,
        items: [
            { name: "Bread", quantity: "2 Loaves" },
            { name: "Cookies", quantity: "1 Box" },
            { name: "Muffins", quantity: "6 Pieces" }
        ]
    },
    
};

for (let key in dealsData) {
    const deal = dealsData[key];

    const dealDiv = document.createElement("div");
    dealDiv.className = "deal p-4 border bg-white shadow-md rounded-md mt-4 cursor-pointer overflow-hidden ";
    dealDiv.style.maxHeight = "50px";
    
    const dealTitle = document.createElement("h1");
    dealTitle.textContent = deal.name;
    
   

    dealDiv.appendChild(dealTitle);
    container.appendChild(dealDiv);

    let isExpanded = false;
    dealDiv.addEventListener("click", function () {
        isExpanded= descriptionOfDiscountedDeals(deal, dealDiv, isExpanded); 
    });
}
const showroomContainer = document.querySelector("#showroom-container");

const showroomData = {
    deal1: {
    name: "Luxury Grocery Deals",
    totalprice: 6818.02,
    items: [
        { name: "Luxury Olive Oil", model: "Extra Virgin - 1 litre", price: "Rs. 4650.74" },
        { name: "Imported Fruit Collection", model: "one basket", price: " Rs. 2167.28" }
    ]
},
    deal2: {
    name: "Exclusive Dairy Bundle",
    
    totalprice: 5230.50,
    items: [
        { name: "Organic Milk", model: "2 Liters", price: "Rs. 1520.25" },
        { name: "Aged Cheese", model: "500g", price: "Rs. 2310.00" },
        { name: "Farm Butter", model: "250g", price: "Rs. 1400.25" }
    ]
},

};
for(let items in showroomData){
    const item = showroomData[items];
    const div=document.createElement("div");
    div.className="deal p-4 border bg-white shadow-md rounded-md mt-4 cursor-pointer overflow-hidden ";
    div.style.maxHeight="50px";
    showroomContainer.appendChild(div);
    const h1=document.createElement("h1");
    h1.textContent=item.name;
    div.appendChild(h1);
    let isExpanded=false;
    div.addEventListener("click", function(){
        isExpanded=descriptionOfExclusiveDeals(item, div, isExpanded);

})
}




//box
// const box1=document.querySelector("#box1");

// box1.addEventListener("mouseover", function(){
//     box1.style.backgroundColor="yellow";
//     box1.style.transition="background-color 1s ease";
//     box1.innerText="BOX 1";
// })
// box1.addEventListener("mouseout", function(){
//         box1.style.backgroundColor="";
//         box1.innerText="";
//     })

// const tag=document.getElementById("appendElement");
// const newTag=document.createElement("p");
// newTag.innerText="This is a DOM Manipulation page";
// tag.appendChild(newTag);
// console.log(newTag);
// const newTag1=document.createElement("p");
// newTag1.innerText="This is a new paragraph";

// tag.insertBefore(newTag1,newTag);
// console.log(tag);




