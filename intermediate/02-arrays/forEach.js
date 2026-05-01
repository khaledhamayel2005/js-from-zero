//For Each
let numbers = [1, 2, 3, 4, 5];

// Example of forEach

    //ex 1 : forEach with arrow function
numbers.forEach(num => console.log(num)); // Output: 1 2 3 4 5

    //ex 2 : forEach with anonymous function
numbers.forEach(function(num) {
    console.log(num);
}); // Output: 1 2 3 4 5

    //ex 3 : forEach with named function
function printNumber(num) {
    console.log(num);
}
numbers.forEach(printNumber); // Output: 1 2 3 4 5
