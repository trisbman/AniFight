const { characters } = require("./characters/character");
const { getRandomCharacter } = require("./getOpponent");
const { toColor } = require("./toColor");

const selectCharacter = (choice) =>
  new Promise((resolve) => {
    const value = parseInt(choice.character, 10);
    let char = "";
    if (!value) {
      char = getRandomCharacter();
    } else char = characters[value - 1];

    console.log(toColor(`\nYou choose ${toColor(char, 1)}\n`, 1));
    resolve(char);
  });

module.exports = selectCharacter;
