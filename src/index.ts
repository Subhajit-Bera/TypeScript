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
//     return String(n + m); //Here the return type string. (type conversion)
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

//We can also mention some specific value in type aliases
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

//--

//Default parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

//--

//Anothery way Default parameter
// const func1 =(n:number, m:number, l:number = 20):number => {
//   return n * m * l;
// };

// func1(25, 23);

//--

//Rest Operator
// const func=(...m:number[])=>{   //...m : rest Operator
//     return m;
// }
// func(1,4,5,7,23);

//--

//Rest Operator with type Aliases
// type FuncType = ( ...m: number[]) => number[];
// const func:FuncType=(...m)=>{   //...m : rest Operator

//     return m;
// }
// func(1,4,5,7,23);

//--

//Function with function kwyword
// function lol(n:number):number{
//     return n
// }
// console.log(lol(40));

//--

//with type aliases
// type FuncType=(n:number)=>number
// const lol:FuncType=function lol(n){
//     return n;
// }

// const lol:FuncType=function lol(n){
//     return n;
// }

// console.log(lol(4));


//--

//Function with objext

// const getData=(product:{name:string,stock:number,price:number,pic:string}):void=>{
//     console.log(product);
// }


//--

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

//creating an sample product
// const sampleProduct={
//     name:"Iphone",
//     stock:20,
//     price:9991,
//     pic:"picurl"
// }

//We can also directly pass the object
// getData({
//     name:"Iphone",
//     stock:20,
//     price:9991,
//     pic:"picurl"
// });

// getData(sampleProduct);

//---

//Interface for Product(Object) Type:
// interface Product {
//     name: string;
//     stock: number;
//     price: number;
//     pic?: string,
//     readonly id:string //id is readonly field we can not update the value of id
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//     console.log(product);
//     // product.id="hidjf"; //It gives error because id is a readonly property
// }

// const sampleProduct: Product = {
//     name: "Iphone",
//     stock: 20,
//     price: 9991,
//     pic: "picurl",
//     id:"sufs"
// }
// getData(sampleProduct);

// --------------------------------------------------------------------------------------------


//Error and Never Type in TS
// const errorHandler=():never=>{
//     throw new Error();  //Here the return type is never
// }
// const errorHandler1=()=>{
//     return new Error();  //Here the return type is Error
// }


//----------------------------------------------------------------------------------------------

//Classes
class Player {
    readonly id: string;

    constructor(private height: number, public weight: number, protected power: number) {
        this.id = String(Math.random() * 100);
    }

    //Getter
    get getMyHeight(): number {
        return this.height;
    }

    // Setter
    set changeHeight(val: number) {  //For setter it will not return anything
        this.height = val;
    }
}

// const Subh=new Player(110,50,5);
// console.log(Subh.getMyHeight); //access height using getter
// Subh.changeHeight=170;  //modify height using setter
// console.log(Subh.getMyHeight);


//Subclass
// class Khiladi extends Player {
//     special: boolean;

//     constructor(height: number, weight: number, power: number, special: boolean) {
//         super(height, weight, power);
//         this.special = special;
//     }

//     get getPower():number{  //power is protected so we can access in this subclass 
//         return this.power;
//     }
// }

// const khiladi2 = new Khiladi(200, 70, 10, true);
// console.log(khiladi2.getMyHeight);
// console.log(khiladi2.special);
// console.log(khiladi2.getPower);

//---

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
// //   getId:()=>string; we can also define the function here
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType,GiveId {
//   private id: string = String(Math.random() * 1000);
  
//   constructor(
//     public name: string,
//     public price: number,
//     public stock:number
//   ) {
    
//   }
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);


//------------------------------------------------------------------------------------------------


// Type Assertion (DOM MANUPULATION)
// const btn = document.getElementById("btn"); //So its can be a HTMl element or null
// btn?.onclick  

//For Avoid this optional chaining
// const btn = document.getElementById("btn")!; =>By ! at the end we are confirming it could be anything without null
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

const form=document.getElementById("myform") as HTMLFormElement;
const myinput=document.querySelector("input") as HTMLInputElement;


form.onsubmit=(e)=>{
    e.preventDefault();
    const val:number=Number(myinput.value);
    

    //creating HTML element
    const h2=document.createElement("h2");
    h2.textContent=String(val+20);
    const body=document.querySelector("body")!;
    body.append(h2);
    
   
};