import * as readline from 'readline';

const temprature = (temp: number): string => {
    if (temp < 0) return "freezing";
    if (temp < 15) return "cold";
    if (temp < 25) return "mild";
    if (temp < 35) return "warm";
    return "hot";
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter temperature: ", input => {
    const temp = Number(input);
    console.log(isNaN(temp) ? "Invalid number" : `Weather is: ${temprature(temp)}`);
    rl.close();
});
