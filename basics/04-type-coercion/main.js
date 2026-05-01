/*
    TYPE COERCION

    - +
    - -
    - false - true


*/


let a = "10";
let b = 5;
let c = true;


console.log(a + b); // "105" (string concatenation)
console.log(a - b); // 5 (numeric subtraction)
console.log(c - true); // 0 (true is coerced to 1, so 1 - 1 = 0)

