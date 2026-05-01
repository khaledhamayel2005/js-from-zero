
/*
    VAR:
      - Re-declarable
      - Access before declaration (Hoisting)
      - Variable scope is function scope
      - Function scoped      
    LET:
      - Not re-declarable
      - Not accessible before declaration (No Hoisting)
      - Variable scope is block scope
      - Block or function scoped
    CONST:
      - Not re-declarable
      - Not accessible before declaration (No Hoisting)
      - Variable scope is block scope
      - Block or function scoped
      - Must be initialized at the time of declaration
*/

var a = 1;
var a = 2; // Re-declaration is allowed
console.log(a); // Output: 2

let b = 1;
// let b = 2; // Re-declaration is not allowed, this will throw an error
console.log(b); // Output: 1

const c = 1;
// const c = 2; // Re-declaration is not allowed, this will throw an error
console.log(c); // Output: 1

// Hoisting example
console.log(d); // Output: undefined (due to hoisting)
var d = 1;

// console.log(e); // This will throw an error (ReferenceError: Cannot access 'e' before initialization)
let e = 1;

// console.log(f); // This will throw an error (ReferenceError: Cannot access 'f' before initialization)
const f = 1;
console.log(f); // Output: 1

// Scope example

  var g = 1; // in window scope

  let h = 1; // in block scope

  const i = 1; // in block scope

var x = 1;
x= 2;
console.log(x); // Output: 2

let x = 1;
console.log(x); // Output: 1

