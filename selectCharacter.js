let { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");

const selectCharacter = (choice) =>
  new Promise((resolve, reject) => {
    choice = parseInt(choice.character);
    let char = "";
    if (!choice) {
      char = getRandomCharacter();
    } else char = characters[choice - 1];

    console.log("\nYou choose " + char + "\n");
    resolve(char);
  });

module.exports = selectCharacter;
