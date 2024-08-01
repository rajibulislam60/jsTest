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
// let fullName=prompt('Enter your full name without space');
// let userName='@'+fullName+fullName.length;
// alert(userName);
// ============================================
let heroes = ['ironman', 'hulk', 'thor', 'batman', 'superman'];
console.log(heroes[3]);
console.log(heroes);
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}
// Qs: For  a given array with marks of students [96, 85, 92, 98, 75] find the average marks of the entire class.

// Ans:
let marks = [96, 85, 92, 98, 75];
let sum=0;
for(let val of marks){
    sum += val;
}
console.log(sum);
let avg= sum/marks.length;
console.log(avg);

// Qs: For a given array with prices of 5 items [250, 100, 645, 50, 284] all items have an offer of 10% off ana them. Change the array to store final price after appling offer.

// Ans:
let items = [250, 100, 645, 50, 284];
let i=0;
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);
// ============================================
let veggies = ['potato', 'apple', 'litchi', 'tomato'];
console.log(veggies);
veggies.push('orange', 'okra');
console.log(veggies);

let deleteItem = veggies.pop();
console.log(veggies);
console.log(deleteItem);
// ============================================ Functions

// Qs: Create a function using the "function" keyword that takes a string as a argument & returns the number of vowels in the string.

// Ans:

function countVowel (str){
    let count =0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++
        }
    }
    console.log(count);
}
countVowel('rajibul');
// Qs: Create an arrow function to perform the some task.

// Ans:
let Vowel=(str)=>{
    let count = 0;
    for (let char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    console.log(count);
}
Vowel('rajibul islam');
// ===========================================