// Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety.Generics enable you to write code that is more flexible and can be applied to different types without sacrificing type checking

// const func = <T>(n: T): T => {
//     return n;
// };

// const ans = func(20); //When we pass 20 : T will be replaced by number type
// const ans2 = func("20"); //When we pass 20 : T will be replaced by string type
// const ans3 = func(true); //When we pass 20 : T will be replaced by boolean type

//---

//Generics whith custom types

// type Person = {
//     name: string;
//     age: number;
// };

// const func2 = <T>(n: T): T => {
//     return n;
// };

// const person1: Person = {
//     name: "Abhi",
//     age: 109,
// };

// const result = func2<Person>(person1);
//Properties are accessible
// console.log(result.name);
// console.log(result.age);


//---

//Function with multiple Generics

// const func3 = <T, U>(n: T, o: U): { n: T, o: U } => {
//     return { n, o };
// };

//Or we can simply write the function without return type
// const func3 = <T, U>(n: T, o: U) => {
//     return { n, o };
// };

// const result2 = func3<number, string>(20, "Lol");

//Properties are accessible
// console.log(result2.n);
// console.log(result2.o);


//---

//Generic with extends

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "Subh",
//   age: 23,
// };

// const user2: Person2 = {
//   name: "Rohit",
//   age: 25,
//   email: "abc@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);

// console.log("user age "+ans.n.age);
// console.log("user2 email "+ans.o.email);


//---

type Person = {
    name: string;
    age: number;
};

const users: Person[] = [
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

const filterPeople = <T, Key extends keyof T>(
    arr: T[], //[{},{}]
    property: Key, // Key extends keyof T -> Here keyof T means ,key of type Person ,so Key is basically key of Person(name,age)
    value: T[Key] // Person obj[key]  : key -> name,age
): T[] => {
    return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterPeople(users, "name", "Rishav");
const filteredPeopleByAge = filterPeople(users, "age", 100);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);


//---

//Generic Class

class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Creating a box for numbers
let numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // Output: 42

// Creating a box for strings
let stringBox = new Box<string>("Hello, generics!");
console.log(stringBox.getValue()); // Output: Hello, generics!
