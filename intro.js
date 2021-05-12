const prompt = require("prompt");
const { characters } = require("./characters");

const prop = {
  name: "character",
  validator: /^[0-3]?$/,
  warning: "Please enter a valid number",
};

const intro = () => {
  console.log("Welcome to AniFight!\nChoose your fighter!\n");
  for (let i in characters) {
    console.log(parseInt(i) + 1 + ". " + characters[i]);
    if (parseInt(i) + 1 === characters.length) console.log("");
  }
  prompt.start();
  return prompt.get(prop);
};

module.exports = intro;
