const { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");


const countdown = (value) =>
  new Promise((resolve, reject) => {
    console.log(`Battle between ${value[0]} and ${value[1]}`);
    let j = 0;
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        console.log("\t ..." + parseInt(4 - i) + "...");
        if (i === 3) console.log("\t BEGIN!\n");
      }, i * 1000);
      j = i;
    }
    setTimeout(() => {
      resolve(value);
    }, (j + 1) * 1000);
  });

const confirmOpponent = (compChoice, playerChoice) =>
new Promise((resolve, reject) => {
  compChoice = parseInt(compChoice.character);
  let char = "";
  if (!compChoice) {
    char = getRandomCharacter(playerChoice);
  } else char = characters[compChoice - 1];

  console.log("\nYou choose " + char + "\n");
  resolve(char);
});



module.exports = { countdown, confirmOpponent };
