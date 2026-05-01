/*

    Scope: Global and Local Scope

*/

let a = 1;
let b = 2;

console.log(`From Glopal Scope: a = ${a} and b = ${b}`);

function showText() {
    console.log(`From Glopal Function Scope: a = ${a} and b = ${b}`);
}
showText(); // Output: From Glopal Function Scope: a = 1 and b = 2

function showText2() {
    let a = 10;
    let b = 20;
    console.log(`From Local Function Scope: a = ${a} and b = ${b}`);
}
showText2(); // Output: From Local Function Scope: a = 10 and b = 20

console.log(`From Glopal Scope after Local Function: a = ${a} and b = ${b}`); // Output: From Glopal Scope after Local Function: a = 1 and b = 2


// Block Scope

if (true) {
    let c = 3;
    console.log(`From Block Scope: c = ${c}`); // Output: From Block Scope: c = 3
}
// console.log(c); // Uncaught ReferenceError: c is not defined 



var d = 4;

if (true) {
    var d = 5;
    console.log(`From Block Scope with var: d = ${d}`); // Output: From Block Scope with var: d = 5
}
console.log(`From Glopal Scope after Block with var: d = ${d}`); // Output: From Glopal Scope after Block with var: d = 5

//Lexical Scope

function outerFunction() {
    let outerVariable = "I am from the outer function.";
    
    function innerFunction() {
        console.log(outerVariable); // Output: I am from the outer function.
    }
    
    innerFunction();
}
outerFunction();



