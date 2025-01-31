//create
const arr=[];
arr.push(1);
arr.push(2);
arr.push(3);
arr.unshift("integer");
let arr1 = []; 
arr1 = arr1.concat(arr)
console.log(arr1);
console.log(arr);
//read
arr.forEach(element => console.log(element));
const mapfunction=arr.map(element=> element);
console.log(mapfunction);
console.log(arr.slice(0,3));
//update
console.log(arr.splice(1,1,4));
console.log(arr.reverse());
const sortedarray=arr.sort();
const newarr=arr.fill(1);
console.log(newarr);
console.log(arr);
//delete
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,0,5,6);
console.log(arr);
//OBJECTS
const showrroom={
    name:"car showroom",
    location:"Lahore",
    year:2022,
     cars:[
        {name:"BMW",
        model:"X5",
        year:2022},
    ]
}
//create
 showrroom.cars.push(
    {name:"Audi",
    model:"A8",
    year:2020});
console.log(showrroom.cars);
//update
showrroom.name="Car Showroom in Lahore";
console.log(showrroom);
//delete
delete showrroom.year;
 showrroom.cars.splice(1,1);
console.log(showrroom);


//DOM manipulation
const box1=document.querySelector("#box1");

box1.addEventListener("mouseover", function(){
    box1.style.backgroundColor="yellow";
    box1.style.transition="background-color 1s ease";
    box1.innerText="BOX 1";
})
box1.addEventListener("mouseout", function(){
        box1.style.backgroundColor="";
        box1.innerText="BOX 1";
    })

const tag=document.getElementById("appendElement");
const newTag=document.createElement("p");
newTag.innerText="This is a DOM Manipulation page";
tag.append(newTag);
console.log(newTag);
const newTag1=document.createElement("p");
newTag1.innerText="This is a new paragraph";

tag.insertBefore(newTag1,newTag);
console.log(tag);




