const prompt = require("prompt");
const { characters } = require("./characters");

const prop = {
  name: "character",
  validator: `^[0-${characters.length}]$`,
  warning: "Please enter a valid number",
};

const intro = () => {
  console.log("Welcome to AniFight!\nPick your character!");
  for (let i in characters) {
    console.log(parseInt(i) + 1 + ". " + characters[i]);
    if (parseInt(i) + 1 === characters.length) console.log("0. Random\n");
  }
  prompt.start();
  return prompt.get(prop);
};

module.exports = { intro, prop };
