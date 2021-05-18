const fight = require("./fight");
const { intro } = require("./intro");
const { countdown, confirmOpponent } = require("./countdown");
const { getOpponent } = require("./getOpponent");
const selectCharacter = require("./selectCharacter");
var playerChar = ''

intro()
  .then((value) => selectCharacter(value))
  .then((value) => {
    playerChar = value
    return getOpponent(value)
  })
  .then(value => confirmOpponent(value))
  .then((value) => countdown([playerChar, value]))
  .then((value) => fight(...value));

//.catch((err) => console.log("The battle is invalid!\nError:\n" + err));
