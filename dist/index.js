"use strict";
//Typescript Datatypes
// let a: string = "subha";
// console.log(a);
const getData = (product) => {
    console.log(product);
    // product.id="hidjf"; //It gives error because id is a readonly property
};
const sampleProduct = {
    name: "Iphone",
    stock: 20,
    price: 9991,
    pic: "picurl",
    id: "sufs"
};
getData(sampleProduct);
//Error and Never Type in TS
const errorHandler = () => {
    throw new Error(); //Here the return type is never
};
const errorHandler1 = () => {
    return new Error(); //Here the return type is Error
};
