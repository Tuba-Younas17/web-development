
const text=document.getElementById('text');
text.innerText='Welcome to Grocify World!';
text.style.color='red';
text.style.fontSize='38px';
text.innerHTML="<b>"+text.innerText+"</b>";

const text1=document.getElementById('changetext');
text1.innerText="Click me!!!";
text1.innerHTML="<i>Click me!!!</i>";
text1.style.color='red';



const button=document.getElementById('changetext');
let count=0;
button.addEventListener("click", () => {
  count++;
  button.innerText = `Button Clicked: ${count} times`;
});
