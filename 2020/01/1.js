const fs = require("fs");
const f = fs.readFileSync("./input.txt", "utf-8");
const lines = f.split("\n");
const numbersArray = lines.map(Number);

for (let i = 0; i < numbersArray.length; i++) {
  const first = numbersArray[i];
  const second = numbersArray.find((num) => first + num === 2020);
  if (first + second === 2020) {
    console.log(first * second);
  }
}
