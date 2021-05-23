const chalk = require("chalk");
const prompt = require("prompt");
const { characters } = require("./characters");
const charactersList = require("./charactersList");
const toColor = require("./toColor");

const prop = {
  name: "character",
  validator: `^[0-${characters.length}]$`,
  warning: "Please enter a valid number",
};

const intro = () => {
  console.log(toColor("Welcome to AniFight!\n\nPick " + toColor("your character", 1)));
  charactersList();
  prompt.start();
  return prompt.get(prop);
};

module.exports = { intro, prop };
