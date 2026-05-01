/*
 Concatenation 
*/


let a = "Hello, ";
let b = "World!";
let c = a + b; // Concatenation using the + operator
document.write(c); // Output: Hello, World!


console.log(`Concatenation using template literals: ${a}${b}`); // Output: Hello, World!

let markUp = `
    <div class = "card">
      <div class = "child">
        <h1>${a}</h1>
        <h1>${b}</h1>
      </div>  
    </div>
`;

