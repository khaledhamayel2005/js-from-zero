let user = {
    //property: value
    name: "khaled",
    age: 22,
    //method: function
    sayHello: function() {
        return "Hello";
    }
};
console.log(user.name); //khaled
console.log(user.age); //22
console.log(user.sayHello()); //Hello

//add new property
user.country = "palestine";
console.log(user.country); //palestine

console.log(user); //{name: 'khaled', age: 22, country: 'palestine'}


//===============================
//DotNotation and BracketNotation

//DotNotation
console.log(user.name); //khaled

//BracketNotation
console.log(user["name"]); //khaled

//add new property using BracketNotation    
user["city"] = "gaza";
console.log(user.city); //gaza

console.log(user); //{name: 'khaled', age: 22, country: 'palestine', city: 'gaza'}

//=======================
//Daynamic property name and compare between DotNotation and BracketNotation in accessing property
let propertyName = "name";
console.log(user[propertyName]); //khaled
//console.log(user.propertyName); //undefined

//=======================
//Delete property
delete user.age;
console.log(user); //{name: 'khaled', country: 'palestine', city: 'gaza'}



// Nested Object
let student = {
    name: "khaled",
    age: 22,
    address: {
        city: "gaza",
        country: "palestine"
    }
};
console.log(student.address.city); //gaza
console.log(student["address"]["country"]); //palestine
console.log(student.address); //{city: 'gaza', country: 'palestine'}

// create object using with new keyword new object()
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car); //{make: 'Toyota', model: 'Camry', year: 2020}

// create object using with Object.create()
let person = {
    name: "khaled",
    age: 22
};
let employee = Object.create(person);
employee.job = "developer";
console.log(employee.name);
console.log(employee.age);
console.log(employee.job);

// create object using with Object.assign()
let source = {
    name: "khaled",
    age: 22
};
let target = {};
Object.assign(target, source);
console.log(target); //{name: 'khaled', age: 22}


// create object using with Object.fromEntries()
let entries = [
    ["name", "khaled"],
    ["age", 22]
];
let obj = Object.fromEntries(entries);
console.log(obj); //{name: 'khaled', age: 22}


// create object using with Object.keys() and Object.values()
let user1 = {
    name: "khaled",
    age: 22
};
console.log(Object.keys(user1)); //['name', 'age']
console.log(Object.values(user1)); //['khaled', 22]


//this keyword in object method

console.log(this); //window object
console.log(this === window); //true

function showThis() {
    return this;

}
console.log(showThis()); //window object


