const chalk = require("chalk");
const { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");


const countdown = (value) =>
  new Promise((resolve, reject) => {
    console.log(chalk.red(`Battle between ${chalk.blue(value[0])} and ${chalk.magenta(value[1])}`));
    let j = 0;
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        console.log("\t ..." + parseInt(4 - i) + "...");
        if (i === 3) console.log("\t  BEGIN\n");
      }, i * 1000);
      j = i;
    }
    setTimeout(() => {
      resolve(value);
    }, (j + 1) * 1000);
  });

module.exports = countdown;
