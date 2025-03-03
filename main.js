let age = 20;
//  in js or = || and &&
// if (age == 15 || age > 15){
if (age >= 15 ){
    console.log("You are an adult");
} 

let time = 14;
/**
 * () grouper for conditions and function signature
 *  in python indentations are groupers
 *  if x > b:
 *      ...
 *      ...
 * in js braces are groupers
 * if (x > b){
 * 
 * }
 * function x(x, b)| const x = (x,b) => {}
 * def x(x, b) 
 *      x, and b are function parameters or signatures
 * {} grouper for code lines
 * 
 * do not forget to put `;` which is sign of end of statement in js
 * but in python new line is the sign of end of statement
 */

if (time < 12){
    console.log("Good morning!");
}
//elif in python
else if(time < 20){
    console.log("Good afternoon!");
}
else{
    // a single line of code is a statement
    //
    console.log("Good evening!");
}


let day = 3;

switch(day){
    case 1: // if (day == 1)
        console.log("Monday");
        break;
    case 2: // if (day == 2)
        console.log("Tuesday");
        break;
    case  3: // if (day == 3)
        console.log("Wednesday");
        break;
    default: // else
        console.log("Another day")
}

const gender = "male"

// ternary operation
//  is_male = gender == "male" and True or False
//  is_male = if gender == "male" True else False

const isMale = gender == "male" ? true: false;

console.log(isMale);


console.log("********For Loop****************");
/**
 * i = 0;
 * step = i+1
 * condition when i < 5
 */
for(let i=0; i < 5; i++){
    console.log(`Count: ${i+1}`);
}
console.log("********While Do Loop****************");
/**
 *  count = 0
 *  step = count + 1; 
 *  condition when condition < 5
 *  ', ", `
 *  f"{count}""
 *   `${count}`
 */
let count = 0;
while(count < 5){
    console.log(`Count: ${count}`);
    count++; // count = count + 1;
}

console.log("*********Do while Loop***************");
let x = 0;

do {
    console.log(`Value: ${x}`);
    x++;
}while(x < 5);

console.log("*********For of Loop***************");

let fruits = ["apple", "banana", "orange"];

// for(let i=0; i < fruits.length; i++){
//     console.log(`Fruit : ${fruits[i]}`);
// }

for (let fruit of fruits){
    console.log(`Fruit : ${fruit}`);
}

console.log("*********For in Loop***************");

let person = {name: "Alice", age: 25}

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

let number = 6;

// check equality and type
/**
 * number % 2 = 0 how is it equal "0"
 */
if( number % 2 === 0){
    console.log(`${number} is even`);
}
else{
    console.log(`${number} is odd`);
}

console.log("************ MAP **************");

let numbers = [1, 2, 3, 4 ];
//  numbers = [1*2=2, 2*2=4, 3*2=6, 4*2=8 ]
// numbers[0] = numbers[0] * 2;
// numbers[1] = numbers[1] * 2;
// numbers[2] = numbers[2] * 2;
// numbers[2] = numbers[2] * 2;
/**
 *  1st loop  number = 1, doubling(1) = 2
 *  2nd loop  number = 2, doubling(2)  = 4
 *  3rd loop  number = 3, doubling(3)  = 6
 *  4th loop  number = 4, doubling(4)  = 8
 */
const doublingOne = (number) =>{
    return number *2;
} 
const doublingTwo = number => number * 2;
// let doubled = numbers.map(doublingOne)


// let doubled = numbers.map((number) =>{
//     return number *2;
// })

// lambda function
let doubled = numbers.map(number => number * 2)

console.log(doubled);


console.log("************ FILTER **************");
// let evens = numbers.filter((number)=>{
//     return number % 2 === 0;
// })
/**
 * evens = []
 * numbers = [1, 2, 3, 4];
 * 1st loop number = 1, number % 2 === 0 = False
 * 2nd loop number = 2, number % 2 === 0 = True => even = [2]
 * 3nd loop number = 3, number % 3 === 0 = False => even = [2]
 * 4th loop number = 4, number % 4 === 0 = True => even = [2, 4]
 */
let evens = numbers.filter(number =>number % 2 === 0)

console.log(evens);

console.log("************ REDUCE **************");
// let sum = numbers.reduce((total, number) => {
//     total = total+ number;
//    return total;
// }, 0);

let sum = numbers.reduce((total, number) =>  total = total+ number, 0);

console.log(sum);


console.log("************ FILTER MAP REDUCE **************");
let otherNumbers = [1, 2, 3, 4, 5, 6];
/**
 *  result = otherNumbers.filter(num => num % 2 !== 0) produces a list
 *  result = [1, 3, 5]
 *  result.map(num => num * 2) produces a list
 *  result = [1*2, 3*2, 5*2]
 *  result = [2, 6, 10]
 *  result.reduce((total, num) => acc + curr, 0) will add all elements
 *  result.reduce((acc, curr) => acc + curr, 0) will add all elements
 *  result = 18;
 */
let result = otherNumbers
            .filter(num => num % 2 !== 0)
            .map(num => num * 2)
            .reduce((total, num) => total + num, 0)

console.log(result);


let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true }
  ];
/**
 *     activeAdultsCount  =  users 
 *                          .filter(user => user.age >= 18 && user.active)
 *  activeAdultsCount = [
 * { name: "Alice", age: 25, active: true },
 * { name: "Charlie", age: 30, active: true }
 * ]
 *  activeAdultsCount  =  activeAdultsCount .map(user => user.name)
 * activeAdultsCount = ["Alice", "Charlie"]
 * activeAdultsCount  = activeAdultsCount.reduce(count => count +1, 0)
 *  1st loop count = 0  count = count + 1, count = 1
 *  2nd loop count = 1    count = count + 1, count = 2
 */
let activeAdultsCount = users
                        .filter(user => user.age >= 18 && user.active)
                        .map(user => user.name)
                        .reduce(count => count +1, 0)

console.log(activeAdultsCount);