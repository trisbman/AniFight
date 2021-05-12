const fight = require("./fight");
const intro = require("./intro");
const selectChar = require("./selectChar");
const countdown = require("./countdown");
const { findOpponent } = require("./findOpponent");

intro()
  .then((value) => selectChar(value))
  .then((value) => findOpponent(value))
  .then((value) => countdown(value))
  .then((value) => fight(...value));

//.catch((err) => console.log("The battle is invalid!\nError:\n" + err));
