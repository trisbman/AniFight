const battle = require("./battle");
const { intro } = require("./intro");
const countdown = require("./countdown");
const selectCharacter = require("./selectCharacter");
const confirmOpponent = require("./confirmOpponent");
const { setColor } = require("./toColor");
const UnknownError = require("./errors/unknownError");

(async () => {
  try {
    // clear terminal
    process.stdout.write('\033c');
    
    await setColor()
    const introVal = await intro()
    const playerChar = await selectCharacter(introVal)
    const opponentChar = await confirmOpponent();
    const battleVars = await countdown([playerChar, opponentChar]);
    await battle(...battleVars);

    return 0;
  } catch (err) {
    return new UnknownError(err);
  }
})();