const { characters } = require("./characters/character");
const { getRandomCharacter } = require("./getOpponent");
const { toColor } = require("./toColor");

const confirmOpponent = (compChoice, playerChoice) =>
  new Promise((resolve) => {
    const value = parseInt(compChoice.character, 10);
    let char = "";
    if (!value) {
      char = getRandomCharacter(playerChoice);
    } else char = characters[value - 1];

    console.log(toColor(`\nYou choose ${toColor(char, 2)}\n`, 2));
    resolve(char);
  });

module.exports = confirmOpponent;
