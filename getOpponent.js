let { characters } = require("./characters");
const prompt = require("prompt");
const { prop } = require("./intro.js")

const getRandomCharacter = (playerChar) => {
  if (!playerChar)
    return characters[Math.floor(Math.random() * characters.length)];

  characters.splice(characters.indexOf(playerChar), 1);
  return characters[Math.floor(Math.random() * characters.length)];
};

//find available opponents and prompt user to choose
//@param playerChar: character string or number 0 if random character
const getOpponent = (char) =>{
      console.log("Pick your opponent:")
      let i = 1
      characters.map(e => console.log(`${i++}. ${e}`))
      console.log("0. Random\n");
      prompt.start();
      return prompt.get(prop)
  };

// findOpponent("Tiger").then((val) => console.log("//" + val));

module.exports = { getOpponent, getRandomCharacter  };
