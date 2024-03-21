"use strict";
//Typescript Datatypes
// let a: string = "subha";
// console.log(a);
//Another way of type declaration
// let a2 = <string>"subhajit"
// console.log(2);
// let b: number = 21;
// console.log(b);
// let check: boolean;
// check = true;
// console.log(check);
//Union type: can set multiple type to a variable
// let surname: string | number;
// surname="hd";
// surname = 243;
// console.log(surname);
//Type for function
// const func = (n: number, m: number) => {
//     console.log(n, m);
//     return String(n + m); //Here the return type string. 
//     return n + m; //Here the return type is number.
// } //because the return type is not mention we can return any type via type conversion
//We can explecitly mention the return type
// const func2 = (n: number, m: number): number => {
//     return n * m;
//     // return String(n*m);  //it will give error,because we can only return number type
// }
//Type Aliases 
// type userName = string | number;
// let n: userName = "Subh";
//Type Aliases with function
// type funcAliases = (x: number, y: number) => number ;
// const func3: funcAliases = (x, y) => {
//     return x * y;
// }
//Array
// const arr=[10,12,13,14];
//Declare type for arry
const arr = [1, 2, 3];
const arr1 = ["ab", "fdd"];
arr1.forEach(i => {
    console.log(i);
    //i.  ->by using i. we can access all the methods of stringg
});
// Another way of array type declaration
const arr3 = [];
//with size array declaration
const arr4 = new Array(20);
const arr5 = new Array(20);
//Union type array
const arr6 = [12, 10, "abc", "mm"];
arr6[0] = "th"; //updating the value;
