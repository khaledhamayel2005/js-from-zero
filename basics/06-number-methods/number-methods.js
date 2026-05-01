/*
    Tow dots to call methods
    toString()
    toFixed()
    parseInt()
    parseFloat()
    isInteger()
    inNan()
*/


let num = 10.123456789;

console.log(num.toString()); // "10.123456789"
console.log(num.toFixed(2)); // "10.12"
console.log(parseInt(num)); // 10
console.log(parseFloat(num)); // 10.123456789
console.log(Number.isInteger(num)); // false
console.log(Number.isNaN(num)); // false    
