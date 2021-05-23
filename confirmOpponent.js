const { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");
const { toColor } = require("./toColor");

const confirmOpponent = (compChoice, playerChoice) =>
new Promise((resolve, reject) => {
  compChoice = parseInt(compChoice.character);
  let char = "";
  if (!compChoice) {
    char = getRandomCharacter(playerChoice);
  } else char = characters[compChoice - 1];

  console.log(toColor("\nYou choose " + toColor(char, 2) + "\n", 2));
  resolve(char);
});

module.exports = confirmOpponent;