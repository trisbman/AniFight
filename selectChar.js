let { characters } = require("./characters");

const selectChar = (choice) =>
  new Promise((resolve, reject) => {
    const playerChar = characters[choice.character - 1];
    console.log("\nYou choose " + playerChar);
    resolve(playerChar);
  });

module.exports = selectChar;
