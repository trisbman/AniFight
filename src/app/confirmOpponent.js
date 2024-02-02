const { characters } = require("./characters/character");
const { getRandomCharacter } = require("./getOpponent");
const { toColor } = require("./toColor");

const confirmOpponent = (compChoice, playerChoice) =>
  new Promise((resolve) => {
    const char = getRandomCharacter(playerChoice);
    console.log(toColor(`COMP choose ${toColor(char, 2)}\n`, 2));
    resolve(char);
  });

module.exports = confirmOpponent;
