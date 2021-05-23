const chalk = require("chalk");
const prompt = require("prompt");
const { characters } = require("./characters");
const charactersList = require("./charactersList");

const prop = {
  name: "character",
  validator: `^[0-${characters.length}]$`,
  warning: "Please enter a valid number",
};

const intro = () => {
  console.log(chalk.redBright("Welcome to AniFight!\n") + chalk.blue("Pick your character:"));
  charactersList();
  prompt.start();
  return prompt.get(prop);
};

module.exports = { intro, prop };
