import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
  const rl = createInterface({ input, output });

  const name: string = await rl.question("Enter your name: ");
  const ageInput: string = await rl.question("Enter your age: ");

  const age: number = Number(ageInput);

  console.log(`Hello ${name}, next year you will be ${age + 1}`);

  rl.close();
}

main();
