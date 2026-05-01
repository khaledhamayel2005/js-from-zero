/*
    Arrays
    -create an array
    -access an array
    -add to an array
    -remove from an array
    -loop through an array
    -find an element in an array
*/


// create an array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// access an array
console.log(myArray[0]); // 1
console.log(myArray[2]); // 3

// add to an array
myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]

// remove from an array
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]

// loop through an array
for(let i = 0; i < myArray.length;i++){
    console.log(myArray[i]);
}

// find an element in an array
console.log(myArray.indexOf(3)); // 2
console.log(myArray.indexOf(10)); // -1 (not found)




