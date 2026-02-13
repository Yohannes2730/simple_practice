"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var temprature = function (temp) {
    if (temp < 0)
        return "freezing";
    if (temp < 15)
        return "cold";
    if (temp < 25)
        return "mild";
    if (temp < 35)
        return "warm";
    return "hot";
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter temperature: ", function (input) {
    var temp = Number(input);
    console.log(isNaN(temp) ? "Invalid number" : "Weather is: ".concat(temprature(temp)));
    rl.close();
});
