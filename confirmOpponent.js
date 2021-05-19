const { characters } = require("./characters");

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

module.exports = confirmOpponent;