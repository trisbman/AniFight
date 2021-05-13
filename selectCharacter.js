let { characters } = require("./characters");
const { getRandomCharacter } = require("./getOpponent");

const selectCharacter = (choice) =>
  new Promise((resolve, reject) => {
    choice = parseInt(choice.character);
    let playerChar = "";
    if (!choice) {
      playerChar = getRandomCharacter();
    } else playerChar = characters[choice - 1];

    console.log("\nYou choose " + playerChar + "\n");
    resolve(playerChar);
  });

module.exports = selectCharacter;
