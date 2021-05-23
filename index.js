const fight = require("./fight");
const { intro } = require("./intro");
const countdown = require("./countdown");
const { getOpponent } = require("./getOpponent");
const selectCharacter = require("./selectCharacter");
const confirmOpponent = require("./confirmOpponent");
const { setColor } = require("./toColor");

let playerChar = "";

setColor()
  .then(() => intro())
  .then((value) => selectCharacter(value))
  .then((value) => {
    playerChar = value;
    return getOpponent(value);
  })
  .then((value) => confirmOpponent(value))
  .then((value) => countdown([playerChar, value]))
  .then((value) => fight(...value))
  .catch((err) =>
    console.log(`\nThe battle is invalid!\n
Please contact developer for more information!\n
${err}`)
  );
