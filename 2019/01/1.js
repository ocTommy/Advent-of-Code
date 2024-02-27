const fs = require("fs");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n").map(Number);

// summedLines = lines.map((line) => {
//   const lineSum = Math.floor(line / 3 - 2);
//   console.log(lineSum);
//   return lineSum;
// });

// console.log(summedLines);

// result = 0;
// for (let i = 0; i < summedLines.length; i++) {
//   result += summedLines[i];
// }

// console.log(result);

totalFuel = 0;
for (let i = 0; i < lines.length; i++) {
  let massFuel = Math.floor(lines[i] / 3 - 2);
  totalFuel += massFuel;
}

console.log(totalFuel);
