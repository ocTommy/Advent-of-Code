const fs = require("fs");

const f = fs.readFileSync("./input.txt", "utf-8");
const groups = f.split("\n\n");

const sum = groups.map((group) => {
  const lines = group
    .split("\n")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  //   console.log(lines);
  return lines;
});
// console.log(sum);

// console.log(Math.max(...sum));

const sorted = sum.sort((a, b) => b - a);
console.log(sorted);

console.log(68442 + 68218 + 68177);
