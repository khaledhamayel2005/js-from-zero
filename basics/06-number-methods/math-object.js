/*
    Math Object

    *round()
    *ceil()
    *floor()
    *min()
    *max()
    *random()
    *pow()
    *sqrt()
    *abs()
    *trunc()
*/


// round() => Rounds a number to the nearest integer
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5

// ceil() => Rounds a number up to the next largest integer
console.log(Math.ceil(4.3)); // 5
console.log(Math.ceil(4.7)); // 5

// floor() => Rounds a number down to the next smallest integer
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.3)); // 4

// min() => Returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(-1, -2, -3)); // -3

// max() => Returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-1, -2, -3)); // -1

// random() => Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g. 0.123456789

// pow() => Returns the base to the exponent power
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

// sqrt() => Returns the square root of a number
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5

// abs() => Returns the absolute value of a number
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

// trunc() => Returns the integer part of a number by removing any fractional digits
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(-4.7)); // -4    

