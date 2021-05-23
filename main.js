const fight = require("./fight");
const intro = require("./intro");
const countdown = require("./countdown");
const { getOpponent } = require("./getOpponent");
const selectCharacter = require("./selectCharacter");
const tryAgain = require("./tryAgain.js");

const main = () =>
  intro()
    .then((value) => selectCharacter(value))
    .then((value) => getOpponent(value))
    .then((value) => countdown(value))
    .then((value) => fight(...value))
//.catch((err) => console.log("The battle is invalid!\nError:\n" + err));

module.exports = main;
