const prompt = require("prompt");
const prop = {
  name: "opponent",
};

const promptOpponent = () => {
  console.log("Welcome to AniFight!\nChoose your fighter!\n");
  for (let i in characters) {
    console.log(parseInt(i) + 1 + ". " + characters[i]);
    if (parseInt(i) + 1 === characters.length) console.log("0. Random\n");
  }
  prompt.start();
  return prompt.get(prop);
};

module.exports = promptOpponent;
