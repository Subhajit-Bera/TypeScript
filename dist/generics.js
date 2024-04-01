"use strict";
// Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety.Generics enable you to write code that is more flexible and can be applied to different types without sacrificing type checking
const users = [
    {
        name: "Subh",
        age: 100,
    },
    {
        name: "Rishav",
        age: 100,
    },
    {
        name: "Rani",
        age: 52,
    },
    {
        name: "Random",
        age: 20,
    },
];
const filterPeople = (arr, //[{},{}]
property, // Key extends keyof T -> Here keyof T means ,key of type Person ,so Key is basically key of Person(name,age)
value // Person obj[key]  : key -> name,age
) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterPeople(users, "name", "Rishav");
const filteredPeopleByAge = filterPeople(users, "age", 100);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
//---
//Generic Class
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Creating a box for numbers
let numberBox = new Box(42);
console.log(numberBox.getValue()); // Output: 42
// Creating a box for strings
let stringBox = new Box("Hello, generics!");
console.log(stringBox.getValue()); // Output: Hello, generics!
