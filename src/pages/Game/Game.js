const button=document.getElementById('btn');
const button1=document.getElementById('btn1');
const uservalue=document.getElementById('text')
const randomnumber=Math.floor(Math.random() * 100)
let guess=0;



console.log(randomnumber);
button.addEventListener('click', function(e) {
  e.preventDefault();
  guess++;
  
  const userValue=parseInt(uservalue.value);
  if(userValue=='' || userValue<0 || userValue>100  ){
    alert('Please enter a valid number between 0 and 100');
    return;
  }
  
  if(userValue==randomnumber ){

  
    button.innerText = 'Congratulations!!! You guessed it right in ' + guess + ' attempts!';
    button.style.backgroundColor='green';
    button.disabled=true;
    button1.innerText="Play Again!!"
    button1.style.backgroundColor='red';

    
    
}
else if(userValue<randomnumber){
  button.innerText='Too Low!!! Try Again!';
  button.style.backgroundColor='red';
  button1.innerText="Enjoy the game!!!"

  
}
  else if(userValue>randomnumber){
    button.innerText='Too High!!! Try Again!';
    button.style.backgroundColor='red';
    button1.innerText="Enjoy the game!!!"
    
   
  }
  uservalue.value = '';
});
// let balance = 500; 
// let pin=prompt("Enter your pin");

// console.log("Choose your option: 1. Check balance,\n 2. Deposit money,\n 3. Withdraw money,\n 4. Exit");
//  let userChoice;

// do {

//   let choice = parseInt(prompt("Enter your choice:"));

//   switch (choice) {
//     case 1:
//       console.log("Your current balance is: $" + balance);
//       break;

//     case 2:
//       let deposit = parseInt(prompt("Enter the amount to deposit:"));
//       if (deposit > 0) {
//         balance += deposit;
//         console.log("Your new balance is: $" + balance);
//       } else {
//         console.log("Invalid deposit amount.");
//       }
//       break;

//     case 3: // Withdraw money
//       let withdraw = parseInt(prompt("Enter the amount to withdraw:"));
//       if ( withdraw <= 0) {
//         console.log("Invalid withdrawal amount.");
//       } else if (withdraw > balance) {
//         console.log("Insufficient funds.");
//       } else {
//         balance -= withdraw;
//         console.log("Your new balance is: $" + balance);
//       }
//       break;

//     case 4:
//       console.log("Thank you for using our ATM. Goodbye!");
//       break;

//     default: 
//       console.log("Invalid choice. Please try again.");
//   }


//    userChoice = parseInt(prompt("Do you want to continue? 1. Yes 2. No"));
// } while (userChoice === 1);

// console.log("Process ended.");

