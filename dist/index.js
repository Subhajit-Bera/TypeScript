"use strict";
//Typescript Datatypes
// let a: string = "subha";
// console.log(a);
const myobj = {
    name: "Abhi",
    email: "abhI@gmail.com",
};
//Access  the value of object:
const getName = () => {
    // return myobj["name"];  //Both are correct way to access the value of a particular key
    return myobj.name;
};
const getEmail = () => {
    // return myobj["name"];
    return myobj.email;
};
//combination function for accessing multiple field (name,email)
//We will use keyof operator for accessing all keys
const getData = (key) => {
    return myobj[key];
};
const myobj2 = {
    "name": "Subh",
    "email": "abc@gmil.com"
};
//This can also be used insted of "keyof"
// const getData2=(key:string):string=>{
//     return myobj2[key]
// }
// getData2("lol");  
//But if we pass any key which is not present ts may consider that the key can be present
//Solving this problem :
// const getData2=(key: "name" | "email"):string=>{
//     return myobj2[key]
// }
// getData2("lol");  //Now ts is showing error in compile time
// But if the no of keys are huge then it is better to use "keyof" operator
// const getData2=(key:keyof Person2):string=>{
//     return myobj2[key];
// }
//Accessing value  of myobj using key
// const key="name";
// myobj[key]; //It will cause no error because key is const
// But if we use let then it will give error because now key can be changed
let key = "name";
// myobj[key] 
//here again we will use key of
// myobj[key as keyof Person] 
//If we only have the object and don't have knowledge abour interface in that case
myobj[key];
