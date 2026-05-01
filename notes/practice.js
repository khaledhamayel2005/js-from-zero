//=================
// 19. PRACTICE
//=================

    //Arrays

// isSorted function 
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false
console.log(isSorted([1, 3, 2, 4, 5])); // false

// Count zeros function
function countZeros(arr) {
    let count = 0;
    arr.forEach(num => {
        if (num === 0) {
            count++;
        }
    });
    return count;
}

// Example usage:
console.log(countZeros([0, 1, 2, 0, 3, 0])); // 3
console.log(countZeros([1, 2, 3, 4, 5])); // 0
console.log(countZeros([0, 0, 0, 0])); // 4

