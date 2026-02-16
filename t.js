const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const temprature = t =>
    t < 0 ? "freezing" :
    t < 15 ? "cold" :
    t < 25 ? "mild" :
    t < 35 ? "warm" :
    "hot";

rl.question("Enter temperature: ", input => {
    const t = Number(input);
    console.log(isNaN(t) ? "Invalid number" : `Weather is: ${temprature(t)}`);
    rl.close();
});
