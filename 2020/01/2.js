const fs = require("fs");
const f = fs.readFileSync("./input.txt", "utf-8");
const lines = f.split("\n");
const numbersArray = lines.map(Number);

for (let i = 0; i < numbersArray.length; i++) {
  const diff = 2020 - numbersArray[i];
  console.log(diff);
  const diffIndex = numbersArray.indexOf(diff, i + 1);
  console.log(diffIndex);
  if (diffIndex !== -1) {
    console.log(numbersArray[i] * diff);
  }
}
