"use strict";
// --------- TypeScript Basic ---------
// (----- Vaiable const = ชนิดข้อมูลค่าคงที่ let= สามารถเปลี่ยนแปลงค่าได้ -----)
// let fname: string = "Wichapad";
// let age: number = 30;
// let isWorking: boolean = false;
// console.log(`Name = ${fname.toUpperCase()}`);
// (----- Any = ไม่มีการตรวตสอบชนิดข้อมูล , Unknow = มีการตรวตสอบชนิดข้อมูล -----)
// function formatNumber(num: number) {
//   return num.toFixed(2);
// }
// let amount: unknown = "50.1234";
// amount = 50.1234;
// if (typeof amount === "number") {
//   console.log(formatNumber(amount));
// }
// (----- Type Assertion ระบุชนิดข้อมูลด้วยตนเอง -----)
// let username:unknown;
// username="Wichapad";
// console.log((<string>username).toUpperCase());
// (----- if, else -----)
// let amount:number = 50;
// let result: string;
// if (amount % 2 === 0) {
//     result = "เลขคู่"
// } else{
//     result = "เลขคี่"
// }
// (----- Ternary = ลดรุป if,else -----)
// amount % 2 === 0  ? result = "เลขคู่" :  result = "เลขคี่"
// console.log(result);
// (----- Switch..case -----)
// let services: number = 3;
// let result: string;
// switch (services) {
//   case 1:
//     result = "ยอดเงินคงเหลือ";
//     break;
//   case 2:
//     result = "ฝากเงิน";
//     break;
//   case 3:
//     result = "ถอนเงิน";
//     break;
//   default:
//     result = "หมายเลขไม่ถูกต้อง";
//     break;
// }
// console.log(result);
// (----- For loop = โปรแกรมจะทำงานไปเรื่อยๆ จนกว่าเงื่อนไขจะเป็นเท็จถึงจะหยุดทำงาน -----)
// for (let count = 1; count <= 10; count++) {
//   console.log(count);
// }
// let users: string[] = ["Guy", "Mook"];
// for (let i = 0; i < users.length; i++) {
//    console.log(users[i]);
// }
// (----- forEach -----)
// users.forEach((e) => {
//   console.log(e);
// });
//--------- TypeScript Advance ---------
// (----- Function void = functionแบบไม่มีการรับค่า parameter = functionแบบมีการรับค่า return = functionแบบมีการส่งค่า parameter & return = functionแบบรับและส่งค่า -----)
// (void = functionแบบไม่มีการรับค่า)
// function sayHi():void {
//   console.log("Hello World");
// }
// sayHi();
// (parameter = functionแบบมีการรับค่า)
// function sayHi(name:string):void {
//   console.log(`Hello World ${name}`);
// }
// sayHi("Wichapad");
// (return = functionแบบมีการส่งค่า)
// function getDiscount(): number {
//   return 500;
// }
// console.log(getDiscount());
// parameter & return = functionแบบรับและส่งค่า
// function total(a: number, b: number): number {
//   return a + b;
// }
// console.log(total(500, 1000));
// (----- Arrow Function ------)
// const total = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(total(500, 1000));
// (----- Default Parameter = สร้าง function โดยกำหนดค่าเริ่มต้นให้กับพารามิเตอร์ ------)
// function showEmp(name: string, age: number, address: string="Bangkok") {
//   console.log(`${name},${age},${address}`);
// }
// showEmp("Guy",28,"Bangkok");
// showEmp("Wichapad",28,"Bangkok");
// showEmp("John",28);
// (----- Object ------)
// const person: { name: string; age: number } = {
//   name: "John",
//   age: 30,
// };
// const position: { lat: number; long: number } = { lat: 40, long: 25.66 };
// (----- Function รับค่า Object ------)
// const person: { name: string; age: number } = {
//   name: "John",
//   age: 30,
// };
// function showDetail(data: { name: string; age: number }) {
//   console.log(`name = ${data.name}, age = ${data.age}`);
// }
// showDetail(person);
// (----- Function return Object ------)
// const position: { lat: number; long: number } = { lat: 40, long: 25.66 };
// const randomPosition = (): { lat: number; long: number } => {
//   return {
//     lat: Math.random(),
//     long: Math.random(),
//   };
// };
// console.log(randomPosition());
// (----- Excess Properties Check การตรวจสอบ Properties ที่ส่งเข้ามาใน Funciton------)
// function showDetail(data: { name: string; age: number }) {
//   console.log(`Name = ${data.name}, age = ${data.age}`);
// }
// showDetail({
//   name: "Wichpad",
//   age: 30,
//   address: "Bangkok",
// });
// (----- Type Aliases (Custom Type) ------)
// type Employee = {
//   id:number,
//   name:string,
//   salary:number,
//   phone:string
// }
// let Emp1:Employee = {id:1,name:"Wichapad",salary:35000,phone:"123-456-7890"}
// let Emp2:Employee = {id:2,name:"Guy",salary:55000,phone:"123-456-7890"}
// console.log(Emp1,Emp2);
// (----- Type Aliases (Optional Properties) ใช้เครื่องหมาย ? ตรง properties เพื่อระบุว่า ่าตรงนี้ใส่หรือไม่ใส่ก็ได้ ------)
// type Employee = {
//   id:number,
//   name:string,
//   salary:number,
//   phone?:string
// }
// let Emp1:Employee = {id:1,name:"Wichapad",salary:35000,phone:"123-456-7890"}
// let Emp2:Employee = {id:2,name:"Guy",salary:55000,phone:"123-456-7890"}
// let Emp3:Employee = {id:3,name:"G",salary:25000}
// console.log(Emp1);
// console.log(Emp2);
// console.log(Emp3);
// (----- Type Aliases (ReadOnly Modifier)ใส่ readonly หน้า properties ที่ต้องการให้ไม่สามารถแก้ไขได้ ------)
// type Employee = {
//   readonly id:number,
//   name:string,
//   salary:number,
//   phone?:string
// }
// let Emp1:Employee = {id:1,name:"Wichapad",salary:35000,phone:"123-456-7890"}
// console.log(Emp1);
// (------ Array Basic ------)
//  Array ไม่กำหนดค่าเริ่มต้น
// const users: string[] = [];
// users.push("Guy", "G", "U", "Y");
// console.log(users);
// เข้าถึงสมาชิกใน Array
// const users: string[] = ["Guy", "G", "Y"];
// console.log(users.length);
// for (let i = 0; i < users.length; i++) {
//   console.log(`ลำดับที่ ${i} = ${users[i]}`);
// }
// users.forEach(e=>{
//   console.log(e);
// })
// Array & Type Aliases
// type Emplyoee = {
//   name: string;
//   salary: number;
//   department?: string;
// };
// const Emplyoees: Emplyoee[] = [];
// Emplyoees.push({ name: "Guy", salary: 25000, department: "IT" });
// Emplyoees.push({ name: "G", salary: 50000});
// for(let person of Emplyoees){
//   console.log(person);
// }
// (------ Function Overloading การสร้าง function ที่มีชื่อเหมือนกัน แต่รับ parameter ที่มีค่าต่างกันได้ ------)
// Example 1
// function sayHi():string
// function sayHi(name:string):string
// function sayHi(name?:unknown):unknown{
//   if(!name){
//     return "Hello JS"
//   }
//   if(typeof name === 'string'){
//     return `Hello ${name}`
//   }else{
//     throw new Error("Not Found")
//   }
// }
// console.log(sayHi("Wicjhapa"));
// Example 2
// function total(a:number,b:number):number
// function total(a:string,b:string):string
// function total(a:unknown,b:unknown):unknown{
//   if(typeof a ==="number" && typeof b === "number"){
//     return a+b
//   }
//   if(typeof a ==="string" && typeof b === "string"){
//     return (parseInt(a)+parseInt(b))
//   }else{
//     throw new Error("Not found")
//   }
// }
// console.log(total(100,200));
// console.log(total("100","200"));
// (------ Spread Operator = กระจายสมาชิกด้วยเครื่องหมาย ... ด้านหหน้า Array ------)
// const section: string[] = ["Acc", "Money"];
// const departments: string[] = ["Programmer", "Marketing", "Graphic"];
// departments.push(...section);
// console.log(departments);
// (------ Rest Operator = ส่ง parameter ที่เป็น array เข้าไปทำงานใน function โดยไม่จำกัดจำนวน โดยใช้เครื่องหมาย... ------)
// const total = (...numbers: number[]) => {
//   return numbers.reduce((result, value) => {
//     return result + value;
//   }, 0);
// };
// console.log(total(100, 200));
// console.log(total(100, 200, 300));
// console.log(total(100, 200, 300, 400));
// (------ Destructuring = การกำหนดค่าที่อยู่ภายใน Array หรือ Object ให้กับตัวแปร โดยวิธีการจับคู่ตัวแปรกับค่าใน Array หรือ Object ------)
// Array
// const colors:string[]=["Red","Green",'Blue']
// const red:string = colors[0]
// const green:string = colors[1]
// const blue:string = colors[2]
// console.log(red);
// console.log(green);
// console.log(blue);
// oBject
// const person = {
//   fname: "Guy",
//   age: 30,
//   address: "Phichit"
// }
// const {fname,age,address} = person
// console.log(fname);
// console.log(age);
// console.log(address);
// (------ Tuple ------)
// type HttpStatusCode=[number,string]
// const goodStatus: HttpStatusCode = [200, "OK"];
// const notFound: HttpStatusCode = [404, "Not found"];
// const badRequest: HttpStatusCode = [400, "Not Request"];
// const serverErr: HttpStatusCode = [500, "Internal Server Error"];
// console.log(notFound);
