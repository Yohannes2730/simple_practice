
for(let i :number = 0; i < 10; i++) {
    // console.log(i);
}
  var count :number = 10;
while(count > 0) {
    // console.log(count);
    count--;
}

var fruites :string[] = ["apple","banana","mango"];
for(let fruite of fruites){
    console.log(fruite);
    
}
var person = {
    name :"jovata",
    age : 23,
    department : "seng",
    city : "Addis Ababa"
}

for(let key in person){

    console.log(` ${key}: ${person[key]}`);
    
}
var num :number = 0;
do {
    console.log(num);
    num ++;
} while(num < 2);

var num1 :number = 12;
if(num1 %2==0){
    console.log(`${num1} is even number`);
}else{
    console.log(`${num1} is odd number`);
}


var number : number  = 0;
while (number <  5) {
    console.log(number);
    number ++;
}

const  student : {name : string , age : number } = {name :'jovata',age :27}
const age : number = 12

for(let key in student){
    console.log(`${key}  : ${student[key]} ,next year you are will be ${age + 1}`);
    
}
