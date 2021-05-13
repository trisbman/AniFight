let { characters } = require("./characters");

const getRandomCharacter = (playerChar) => {
  if (!playerChar)
    return characters[Math.floor(Math.random() * characters.length)];

  characters.splice(characters.indexOf(playerChar), 1);
  return characters[Math.floor(Math.random() * characters.length)];
};

//find available opponents and prompt user to choose,
//@param player's character string or number 0 if random character
const getOpponent = (playerChar) =>
  new Promise((resolve, reject) => {
    console.log("Finding opponents...");
    setTimeout(() => {
      const compChar = getRandomCharacter(playerChar);
      console.log("Available opponents: " + compChar);
      resolve([playerChar, compChar]);
    }, 1000);
  });

// findOpponent("Tiger").then((val) => console.log("//" + val));

module.exports = { getOpponent, getRandomCharacter };
