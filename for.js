for (var i = 0; i < 10; i++) {
    // console.log(i);
}
var count = 10;
while (count > 0) {
    // console.log(count);
    count--;
}
var fruites = ["apple", "banana", "mango"];
for (var _i = 0, fruites_1 = fruites; _i < fruites_1.length; _i++) {
    var fruite = fruites_1[_i];
    console.log(fruite);
}
var person = {
    name: "jovata",
    age: 23,
    department: "seng",
    city: "Addis Ababa"
};
for (var key in person) {
    console.log(" ".concat(key, ": ").concat(person[key]));
}
var num = 0;
do {
    console.log(num);
    num++;
} while (num < 2);
var num1 = 12;
if (num1 % 2 == 0) {
    console.log("".concat(num1, " is even number"));
}
else {
    console.log("".concat(num1, " is odd number"));
}
var number = 0;
while (number < 5) {
    console.log(number);
    number++;
}
var student = { name: 'jovata', age: 27 };
var age = 12;
for (var key in student) {
    console.log("".concat(key, "  : ").concat(student[key], " ,next year you are will be ").concat(age + 1));
}
