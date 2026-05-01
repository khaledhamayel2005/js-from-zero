/**
 * JavaScript Data Types
 *
 * Use `typeof` to inspect the type of a value.
 * JavaScript has primitive and complex/reference types.
 */

console.log("Hello, World!");

// Primitive types
console.log(typeof "Hello, World!"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical JavaScript quirk)
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(9007199254740991)); // bigint

// Complex/reference types
console.log(typeof { name: "Alice", age: 30 }); // object
console.log(typeof [1, 2, 3]); // object (arrays are objects)
console.log(typeof function () {}); // function

// Example object
console.log({
  name: "Khaled",
  age: 22,
  country: "Palestine",
});