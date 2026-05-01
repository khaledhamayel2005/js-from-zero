/*

    Functions
        - A function is a block of code designed to perform a particular task.
        - A function is executed when "something" invokes it (calls it).

    Function Declaration
        - A function declaration (also called a function statement) consists of the function keyword, followed by:
            - The name of the function.
            - A list of parameters to the function, enclosed in parentheses and separated by commas.
            - The JavaScript statements that define the function, enclosed in curly brackets, { }.

    Function Expression
        - A function expression is similar to a function declaration but can be stored in a variable. 
        - It can be anonymous (without a name) or named.

    Arrow Functions
        - Arrow functions are a more concise syntax for writing function expressions. 
        - They do not have their own 'this' context and are often used for shorter functions.
*/


// Function Declaration
function sayHello(){
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

function sayHelloTo(name){
    console.log(`Hello, ${name}!`);
}
sayHelloTo("Alice"); // Output: Hello, Alice!

function generateYears(start, end, exclude){
    for(let i = start; i <= end; i++){
        if(i != exclude){
        console.log(i);
        }
    }
}
generateYears(2000, 2020, 2010); // Output: 2000, 2001, ..., 2009, 2011, ..., 2020

// Return functions

   function add(a, b){
      return a + b;
   }


   let result = add(5,3);
   console.log(result); // Output: 8


   function printer(){
     document.write("Hello, World!");
     return;
   }
    printer(); // Output: Hello, World!

   //function defualt parameters

    function greet(name = "Guest"){
        console.log(`Hello, ${name}!`);
    }
    greet(); // Output: Hello, Guest!
    greet("Alice"); // Output: Hello, Alice!


    //function rest parameters
    
    function sum(...numbers){
        let result = 0;
        for(let num = 0; num < numbers.length; num++){
            result += numbers[num];
        }
        return result;
    }
    console.log(sum(1, 2, 3)); // Output: 6
    console.log(sum(4, 5)); // Output: 9

    // Function Ultimate Example

    function showDetails(us = "Unknown", age = 0, rt = 0, show = false,...skills){
        document.write(`<div>`);
        document.write(`<h2>Username: ${us}</h2>`);
        document.write(`<p>Age: ${age}</p>`);
        document.write(`<p>Rating: ${rt}</p>`);
        if(show){
            
            document.write(`<h3>Skills:</h3>`);
            document.write(`<ul>`);
            for(let i = 0; i < skills.length; i++){
                document.write(`<li>${skills[i]}</li>`);
            }
            document.write(`</ul>`);
            
     
        }
        document.write(`</div>`);

    }

    showDetails("Alice", 30, 4.5, true, "JavaScript", "HTML", "CSS");


// write function again 

    function showDtails1( us , age ,rt , show , ...skills){
        us = us || "Unknown";
        age = age || 0;
        rt = rt || 0;
        show = show || false;

        document.write(`<div>`);
        document.write(`<h2> Username : ${us} </h2>`);
        document.write( `<p> age : ${age} </p>`);
        document.write( `<p> rating : ${rt} </p>`);
        if(show == true){
            document.write(`<h3> Skills : </h3>`);
            document.write(`<ul>`);
            for(let i = 0; i < skills.length; i++){
                document.write(`<li> ${skills[i]} </li>`);
            }
            document.write(`</ul>`);
        }
        document.write(`</div>`);

    }
    showDtails1("Alice", 30, 4.5, true, "JavaScript", "HTML", "CSS");

    // Anonymous Function 
     let calc = function(num1,num2){
        return num1 + num2;
     };
        console.log(calc(5, 3)); // Output: 8

    

   //Nested Function
   
   function outerFunction(fname , lname){
    let message = "Hello from the outer function!";
    function innerFunction(){
        message = `Hello, ${fname} ${lname}!`;
    }
    innerFunction();
    return message;
   }
    console.log(outerFunction("Alice", "Smith")); // Output: Hello, Alice Smith!



// Nested Function , 3 functions inside each other

function firstFunction(a){
    let message = "Hello from the first function!";
    function secondFunction(b){
        let message = "Hello from the second function!";
        function thirdFunction(c){
            let message = `Hello, ${a}, ${b}, and ${c}!`;
            return message;
        }
        return thirdFunction("Charlie");
    }
    return secondFunction("Bob");
}
console.log(firstFunction("Alice")); // Output: Hello, Alice, Bob, and Charlie!



    //Arrow Function

    let multiply = (x, y) => x * y;
    console.log(multiply(5, 3)); // Output: 15
    let greetArrow = name => `Hello, ${name}!`;
    console.log(greetArrow("Alice")); // Output: Hello, Alice!


    let numbers = [1, 2, 3, 4, 5];
    let squares = numbers.map(num => num * num);
    console.log(squares); // Output: [1, 4, 9, 16, 25]



    //Multiple Parameters with Arrow Function and lines

    let calculateArea = (width, height) => {
        let area = width * height;
        return area;
    };
    console.log(calculateArea(5, 3)); // Output: 15

   var num = 9/ 0 ;
   console.log(num); // Output: Infinity



   