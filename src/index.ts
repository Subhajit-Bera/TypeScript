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


//-------------------------------------------------------------------------------------------

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


//----------------------------------------------------------------------------------

//Type Aliases 
// type userName = string | number;
// let n: userName = "Subh";

// type themeMode="light" | "dark";
// const mode:themeMode="light"; //We can assign only light or dark to this variable,otherwise it will give error 


//Type Aliases with function
// type funcAliases = (x: number, y: number) => number ;

// const func3: funcAliases = (x, y) => {
//     return x * y;
// }


//------------------------------------------------------------------------------------

//Array
// const arr=[10,12,13,14];
//Declare type for arry
// const arr: number[] = [1, 2, 3];

// const arr1: string[] = ["ab", "fdd"];
// arr1.forEach(i => {
//     console.log(i);
//     //i.  ->by using i. we can access all the methods of stringg
// })

// Another way of array type declaration
// const arr3: Array<string> = [];

// //with size array declaration
// const arr4: Array<string> = new Array(20);
// const arr5: Array<boolean> = new Array(20);

//Fill array with defult value:
// const arr4: Array<string> = new Array(20).fill("default_value");

//Union type array
// const arr6: Array<number | string> = [12, 10, "abc", "mm"];
// arr6[0] = "th"; //updating the value;

// //Creating tuple for fixed size array
// const arr7: [number, number, number] = [12.3, 45, 11];
// arr7.forEach(i => {
//     console.log(i);
// })


//------------------------------------------------------------------------------------

//Object:
// const obj: {
//     height: number,
//     weight: number,
//     gender: boolean
// } = {
//     height: 100,
//     weight: 288,
//     gender: true
// }


//Another way

// type Obj = {
//     height: number,
//     weight: number,
//     gender?: boolean  //making this field optional
// }

// const obj1: Obj = {
//     height: 1700,
//     weight: 454,
//     gender: false
// }


// const obj2: Obj = {
//     height: 1790,
//     weight: 564,
//     gender: true
// }

//If there someone who doesn't want to provide gender:
//In that case we make this field optional by putting ? after the field
// const obj3: Obj = {
//     height: 1790,
//     weight: 564,
// }


//---------------------------------------------------------------------------------

//Interface
// interface Obj2 {
//     height: number,
//     weight: number,
//     gender?: boolean
// }


// interface newObj extends Obj2 {  //extends Obj2
//     scollar: boolean
//     func: (n: number, m: number) => void
//     // func?: (n: number, m: number) => void  //make function optional
// }

// const ob1: newObj = {
//     height: 170,
//     weight: 50,
//     scollar: true,
//     func: (n, m) => {
//         console.log(n * m)
//     }
// }

// ob1.func(10,20);

//Calling function if it is optional
// ob1?.func?.(10, 20);

//declaring seperate functype for function
// type FuncType = (n: number, m: number) => void

// interface newObj2 extends Obj2 {
//     scollar: boolean,
//     func: FuncType;
// }

// const ob2: newObj2 = {
//     height: 180,
//     weight: 68,
//     scollar: false,
//     func: (n, m) => {
//         console.log(n * m);
//     }
// }

// ob2.func(12, 13);


//---------------------------------------------------------------------------

//Function

// Type aliasis for function
// type FuncType=(n:number,m:number,l?:number)=>number;

//Optional Parameter
// const func:FuncType=(n,m,l)=>{
//     //using typeguard for l
//     if(typeof l==="undefined") return n*m;
//     return n*m*l;
// }

// console.log(func(2,3));


//Default parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

//Anothery way Default parameter
// const func1 =(n:number, m:number, l:number = 20):number => {
//   return n * m * l;
// };

// func1(25, 23);

//Rest Operator
// const func=(...m:number[])=>{   //...m : rest Operator
//     return m;
// }
// func(1,4,5,7,23);

//Rest Operator with type Aliases
// type FuncType = ( ...m: number[]) => number[];
// const func:FuncType=(...m)=>{   //...m : rest Operator

//     return m;
// }
// func(1,4,5,7,23);


//Function with function kwyword
// function lol(n:number):number{
//     return n
// }
// console.log(lol(40));

//with type aliases
// type FuncType=(n:number)=>number
// const lol:FuncType=function lol(n){
//     return n;
// }

// console.log(lol(4));



//Function with objext

// const getData=(product:{name:string,stock:number,price:number,pic:string}):void=>{
//     console.log(product);
// }


//Type aliases for Object
// type GetDataType =(product:{
//     name:string;
//     stock:number;
//     price:number;
//     pic:string
// })=>void;


// const getData:GetDataType =(product)=>{
//     console.log(product)
// }

// const sampleProduct={
//     name:"Iphone",
//     stock:20,
//     price:9991,
//     pic:"picurl"
// }

//We can directly pass the object
// getData({
//     name:"Iphone",
//     stock:20,
//     price:9991,
//     pic:"picurl"
// });

// getData(sampleProduct);

//Interface for Product(Object) Type:
interface Product {
    name: string;
    stock: number;
    price: number;
    pic?: string,
    readonly id:string //id is readonly field we can not update the value of id
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
    console.log(product);
    // product.id="hidjf"; //It gives error because id is a readonly property
}

const sampleProduct: Product = {
    name: "Iphone",
    stock: 20,
    price: 9991,
    pic: "picurl",
    id:"sufs"
}
getData(sampleProduct);


//Error and Never Type in TS
const errorHandler=()=>{
    throw new Error();  //Here the return type is never
}
const errorHandler1=()=>{
    return new Error();  //Here the return type is Error
}