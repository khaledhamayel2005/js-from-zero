/*
String Methods

 -Access with index
 -length
 -trim()
 -toUpperCase()
 -toLowerCase()
 -chain methods
 - split()
 - slice()
 - replace()
 - includes()
 - startsWith()
 - endsWith()
 - repeat()
 - padStart()
 - padEnd()
 - charAt()
 - charCodeAt()
 - indexOf()
 - lastIndexOf()
 - search()
    - match()
    - matchAll()
    - concat()
    - fromCharCode()  

- substring()
- substr() (deprecated)
*/


let str = "  Hello World!  ";

console.log(str[0]); // H
console.log(str.length); // 15
console.log(str.trim()); // "Hello World!"
console.log(str.toUpperCase()); // "  HELLO WORLD!  "
console.log(str.toLowerCase()); // "  hello world!  "
console.log(str.trim().toUpperCase()); // "HELLO WORLD!"
console.log(str.split(" ")); // ["", "", "Hello", "World!", "", ""]
console.log(str.slice(2, 7)); // "Hello"
console.log(str.replace("World", "Everyone")); // "  Hello Everyone!  "
console.log(str.includes("Hello")); // true
console.log(str.startsWith("  He")); // true
console.log(str.endsWith("!  ")); // true
console.log(str.repeat(2)); // "  Hello World!    Hello World!  "
console.log(str.padStart(20, "*")); // "*****  Hello World!  "
console.log(str.padEnd(20, "*")); // "  Hello World!  *****"
console.log(str.charAt(0)); // " "
console.log(str.charCodeAt(0)); // 32 (ASCII code for space)
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 7
console.log(str.search("World")); // 8
console.log(str.match(/o/g)); // ["o", "o"]
console.log(str.matchAll(/o/g)); // [Array Iterator] { '0': 'o', index: 4, input: '  Hello World!  ' }, { '0': 'o', index: 7, input: '  Hello World!  ' }
console.log(str.concat(" How are you?")); // "  Hello World!   How are you?"
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
console.log(str.substring(2, 7)); // "Hello"
console.log(str.substring(7, 2)); // "Hello" (same as above, order doesn't matter)
console.log(str.substring(2)); // "Hello World!  "
console.log(str.substring(0, str.length)); // "  Hello World!  "
console.log(str.substring(0, 5)); // "  He"
console.log(str.substr(2, 5)); // "Hello" (deprecated, use substring instead)
console.log(str.substr(2)); // "Hello World!  " (deprecated, use substring instead)

