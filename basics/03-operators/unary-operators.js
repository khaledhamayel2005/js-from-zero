/*
Unary Operators in JavaScript
Unary Negation (-)
Unary Plus (+)

Normal numbers
String numbers
Non-numeric strings
Boolean values
Null and Undefined
String number
String text
String Negative number
Floating-point number
false
true
null
undefined
*/

// Unary Negation (-)
console.log(-10); // Output: -10

// Unary Plus (+)
console.log(+10); // Output: 10

// Normal numbers
console.log(-5); // Output: -5
console.log(+5); // Output: 5

// String numbers
console.log(-"5"); // Output: -5
console.log(+"5"); // Output: 5

// Non-numeric strings
console.log(-"Hello"); // Output: NaN (Not a Number)
console.log(+"Hello"); // Output: NaN (Not a Number)

// Boolean values
console.log(-true); // Output: -1
console.log(+true); // Output: 1
console.log(-false); // Output: 0
console.log(+false); // Output: 0

// Null and Undefined
console.log(-null); // Output: 0
console.log(+null); // Output: 0
console.log(-undefined); // Output: NaN (Not a Number)
console.log(+undefined); // Output: NaN (Not a Number)

// String number
console.log(-"123"); // Output: -123
console.log(+"123"); // Output: 123

// String text
console.log(-"abc"); // Output: NaN (Not a Number)
console.log(+"abc"); // Output: NaN (Not a Number)

// String Negative number
console.log(-"-123"); // Output: 123
console.log(+"-123"); // Output: -123

// Floating-point number
console.log(-3.14); // Output: -3.14
console.log(+3.14); // Output: 3.14


