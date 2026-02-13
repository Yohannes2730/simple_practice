function sum(...numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 

function multiply(...numbers : number[]) :number { 
  return numbers.reduce((accumulator, current) => accumulator * current, 1);

}
  console.log(multiply(1, 2, 3, 4, 5));

