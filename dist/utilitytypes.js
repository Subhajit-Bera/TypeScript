"use strict";
//Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>
//Partial<Type>:Constructs a type with all properties of Type set to optional.
// type User = {
//     name: string,
//     email: string
// }
//making optional using "?"
// type User2 = {
//     name?:string,
//     email:string
// }
//Making optional using Partial<Type>
// type User2 = Partial<User>
//----------------------------------------------------
//Required<Type> : Constructs a type consisting of all properties of Type set to required
//It is opposite of Partial<Type> 
// type User = {
//     name?: string,
//     email?: string
// }
// type User2=Required<User>
// const user:Required<User> = {
//     name:"subh",
//     email:"abc@gmail.com"
// }
//----------------------------------------------------
// Readonly<Type> : Makes every property readonly
// type User = {
//     name: string,
//     email: string
// }
// type User2=Readonly<User>;
// const user:Readonly<User>={
//     name:"subh",
//     email:"abc@gmail.com"
// }
// const user:User2={
//     name:"subh",
//     email:"abc@gmail.com"
// }
//----------------------------------------------------
// Record<Keys, Type>
// interface UserInfo {
//     age: number;
// }
// type UserName = "john" | "levi" | "elon" | "jack";
// const users: Record<UserName, UserInfo> = {
//     john: { age: 34 },
//     levi: { age: 44 },
//     elon: { age: 54 },
//     jack: { age: 24 },
// };
//----------------------------------------------------
// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) 
// interface OrderInfo {
//     readonly id: string;
//     user: string;
//     city: string;
//     state: string;
//     country: string;
//     status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
// const address: ShippingInfo = {
//     city: "Kolkata",
//     state: "WB",
//     country: "India"
// }
//----------------------------------------------------
// Omit<Type, Keys> 
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals
// interface OrderInfo {
//     readonly id: string;
//     user: string;
//     city: string;
//     state: string;
//     country: string;
//     status: string;
// }
// type ShippinAdress = Omit<OrderInfo,"id"|"status">
// const userAddress:ShippinAdress={
//     user: "user1",
//     city: "Kolkata",
//     state: "WB",
//     country:"India"
// }
//----------------------------------------------------
// Exclude<Type, ExcludedUnion>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers
// type T0 = Exclude<"a" | "b" | "c", "a">;
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>
//----------------------------------------------------
// Extract<Type, Union> 
//Constructs a type by extracting from Type all union members that are assignable to Union.
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>
//----------------------------------------------------
// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>
// //We can did the same by Exclude<>
// type Random2 = Exclude<MyUnion,undefined| null>
//----------------------------------------------------
// Parameters<Type>
// Constructs a tuple type from the types used in the parameters of a function type Type.
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>
//----------------------------------------------------
// ConstructorParameters<Type>
// Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>
//----------------------------------------------------
// ReturnType<Type>
// Constructs a type consisting of the return type of function Type.
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>
//----------------------------------------------------
// InstanceType<Type>
// Constructs a type consisting of the instance type of a constructor function in Type
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>
// const user:Random ={
//     s:"dgf",
//     t:"ssds"
// }
