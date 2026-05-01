/*
    Higher-Order Functions
    A higher-order function is a function that takes another function as an argument, or returns a function as a result.

    Map
    The map function takes an array and a function as arguments, and returns a new array where each element is the result of applying the function to the corresponding element in the original array.

    Filter
    The filter function takes an array and a function as arguments, and returns a new array containing only the elements of the original array for which the function returns true.

    Reduce
    The reduce function takes an array and a function as arguments, and returns a single value that is the result of applying the function cumulatively to the elements of the array, from left to right.
*/



// Example of Map

    //ex 1 : map with arrow function
const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


//ex 2 : map with anonymous function
let addSelf = numbers.map(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
    return element + element;
},10);
console.log(addSelf); // Output: [2, 4, 6, 8, 10]


//ex 3 : map with named function
    function addition(element) {
    return element + element;
    }
    let add = numbers.map(addition);
    console.log(add); // Output: [2, 4, 6, 8, 10]


// Example of Filter

    //ex 1 : filter with arrow function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

    //ex 2 : filter with anonymous function
const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5]

    //ex 3 : filter with named function
function isGreaterThanTwo(num) {
    return num > 2;
}
const greaterThanTwo = numbers.filter(isGreaterThanTwo);
console.log(greaterThanTwo); // Output: [3, 4, 5]


// Example of Reduce

    //ex 1 : reduce with arrow function
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

    //ex 2 : reduce with anonymous function
const product = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);
console.log(product); // Output: 120

    //ex 3 : reduce with named function
function multiply(accumulator, currentValue) {
    return accumulator * currentValue;
}
const totalProduct = numbers.reduce(multiply, 1);
console.log(totalProduct); // Output: 120


//====================================================
    // MAP PRACTICE
//====================================================


    /*
        Swap Cases
        inverted numbers
        ignore boolean values
    */




let swappingCases = "Hello World";
let invertedNumbers = [1, -2, 3, -4, 5];  
let ignoreNumberValues = ["Khaledqwwe21"];

// Swap Cases
let swappedCases = swappingCases.split('').map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    }
    return char.toUpperCase();
}).join('');
console.log(swappedCases); // Output: hELLO wORLD



let inverted = invertedNumbers.map(num => -num);
console.log(inverted); // Output: [-1, 2, -3, 4, -5]


let ignoredBooleans = ignoreNumberValues.map(value => {
    if (typeof value === 'boolean') {
        return null; // Ignore boolean values
    }
    return value;
});
console.log(ignoredBooleans); // Output: ["Khaledqwwe21"]   




//====================================================
    // FILTER PRACTICE
//====================================================



    let numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Filter even numbers
    let evenNums = numbersToFilter.filter(num => num % 2 === 0);
    console.log(evenNums); // Output: [2, 4, 6, 8, 10]



    // Filter odd numbers
    let oddNums = numbersToFilter.filter(num => num % 2 !== 0);
    console.log(oddNums); // Output: [1, 3, 5, 7, 9]



    // Filter numbers greater than 5
    let greaterThanFive = numbersToFilter.filter(num => num > 5);
    console.log(greaterThanFive); // Output: [6, 7, 8, 9, 10]

    // Filter numbers less than or equal to 5
    let lessThanOrEqualToFive = numbersToFilter.filter(num => num <= 5);
    console.log(lessThanOrEqualToFive); // Output: [1, 2, 3, 4, 5]



//====================================================
    // REDUCE PRACTICE
//====================================================

    let numbersToReduce = [1, 2, 3, 4, 5];
    
    // Sum of numbers
    let sumOfNumbers = numbersToReduce.reduce((acc, curr) => acc + curr, 0);
    console.log(sumOfNumbers); // Output: 15

    // Product of numbers
    let productOfNumbers = numbersToReduce.reduce((acc, curr) => acc * curr, 1);
    console.log(productOfNumbers); // Output: 120

    // Maximum number
    let maxNumber = numbersToReduce.reduce((max, curr) => (curr > max ? curr : max), numbersToReduce[0]);
    console.log(maxNumber); // Output: 5
    
    // Minimum number
    let minNumber = numbersToReduce.reduce((min, curr) => (curr < min ? curr : min), numbersToReduce[0]);
    console.log(minNumber); // Output: 1


let nums = [1, 2, 3, 4, 5];
let sumOfNumber = function(accumulator, currentValue) {
    return accumulator + currentValue;
};


let totalSum = nums.reduce(sumOfNumber, 0);
console.log(totalSum); // Output: 15
    
