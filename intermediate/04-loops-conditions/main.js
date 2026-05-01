/*

    Loops and Conditionals

*/



// Loops

// For Loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-While Loop
    
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Conditionals

// If-Else Statement

let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult.");
} else {
    console.log("You are an adult.");
}

// Switch Statement

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
}   

// loops with conditionals

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    }
    else {  
        console.log(`${i} is odd.`);
    }
}   


//Loops with functiones and conditionals

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

for (let i = -2; i <= 2; i++) {
    checkNumber(i);
}   
