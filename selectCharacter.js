let { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");
const { toColor } = require("./toColor");

const selectCharacter = (choice) =>
  new Promise((resolve, reject) => {
    choice = parseInt(choice.character);
    let char = "";
    if (!choice) {
      char = getRandomCharacter();
    } else char = characters[choice - 1];

    console.log(toColor("\nYou choose " + toColor(char, 1) + "\n", 1));
    resolve(char);
  });

module.exports = selectCharacter;
