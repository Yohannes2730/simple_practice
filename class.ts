import { log } from "node:console";
import * as readline from 'readline/promises'
import { stdin as input,stdout as output } from "node:process";


function messageApp(message: string) {
  return message;
}

console.time("timer");

console.log(messageApp("Hello, what's up man?"));

console.timeEnd("timer");

function multi(a: number, b: number): number {
  return a * b;
}
console.log(multi(3, 5));

let input = prompt("enter the day from(1-7):");
let day: number = Number(input);

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("thusday");
    break;
  case 3:
    console.log("wonsday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("frieday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid input");
    
    break;
}
