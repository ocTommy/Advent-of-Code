const fs = require("fs");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n").map(Number);

// console.log(lines);

totalFuel = 0;
for (let i = 0; i < lines.length; i++) {
  let massFuel = Math.floor(lines[i] / 3 - 2);
  while (massFuel >= 0) {
    totalFuel += massFuel;
    massFuel = Math.floor(massFuel / 3 - 2);
  }
}

console.log(totalFuel);

// console.log(result);
