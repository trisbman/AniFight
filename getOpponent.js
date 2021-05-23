const prompt = require("prompt");
const { characters } = require("./characters");
const { prop } = require("./intro");
const charactersList = require("./charactersList");
const { toColor } = require("./toColor");

const getRandomCharacter = (playerChar) => {
  if (!playerChar)
    return characters[Math.floor(Math.random() * characters.length)];

  characters.splice(characters.indexOf(playerChar), 1);
  return characters[Math.floor(Math.random() * characters.length)];
};

const getOpponent = () => {
  console.log(toColor(`Pick ${toColor("your opponent", 2)}`));
  charactersList();
  prompt.start();
  return prompt.get(prop);
};

// findOpponent("Tiger").then((val) => console.log("//" + val));

module.exports = { getOpponent, getRandomCharacter };
