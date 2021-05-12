let characters = require("./characters/charactersIndex");

const getRandomChar = (val) => {
  if (!val) return characters[Math.floor(Math.random() * characters.length)];
  characters.splice(characters.indexOf(val), 1);
  return characters[Math.floor(Math.random() * characters.length)];
};

const findOpponent = (val) =>
  new Promise((resolve, reject) => {
    console.log("Finding Opponent...");
    setTimeout(() => {
      const opponent = getRandomChar(val);
      console.log("Opponent Found! Your opponent: " + opponent);
      resolve([val, opponent]);
    }, 1000);
  });

module.exports = { findOpponent, getRandomChar };
