// Qs: Print all even numbers from 0 to 100.

// Ans:
for (let num=0; num<=100; num++){
    if (num%2 === 0) { 
        console.log(num);
    }
}
// And odd numbers
for (let num = 0; num <= 100; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
// =========================================
let obj = {
    item : 'pen',
    price: 10,
}
let output =`The cost of ${obj.item} is ${obj.price} takas`;
console.log(output);
//  This is call string interpolation.

//Qs: User give the name and you create a username prev @ and name last lenth.

// Ans:
let fullName=prompt('Enter your full name without space');
let userName='@'+fullName+fullName.length;
alert(userName);