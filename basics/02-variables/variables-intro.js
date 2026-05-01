/**
 * Variables Introduction
 *
 * Variables are named containers for values.
 * JavaScript is loosely typed, so a variable can hold different value types.
 */

// Simple variable declaration
var user = "Khaled Hamayel";
console.log(user); // Output: Khaled Hamayel

// Reassigning a new value
user = "Khaled Hamayel 2";
console.log(user); // Output: Khaled Hamayel 2

// String concatenation
console.log("Hello " + user); // Output: Hello Khaled Hamayel 2

// Update an HTML element if it exists on the page
// hello.innerHTML = "Hello " + user;

// JavaScript is loosely typed
user = 100; // now number
console.log(user); // Output: 100

user = true; // now boolean
console.log(user); // Output: true

user = {
  name: "Khaled Hamayel",
  age: 30,
  isMarried: false,
}; // now object
console.log(user);

// Best-practice note:
// Prefer `let` and `const` in modern JavaScript instead of `var`.