const { Tiger, Wolf, Lion, Eagle, Elephant } = require("./characters");
const InvalidOption = require("./error");
const {
  getCurrentScore,
  plusCompScore,
  plusPlayerScore,
} = require("../config/score");
const { toColor, toColorLog } = require("./toColor");

const setChar = (char) => {
  switch (char) {
    case "Tiger":
      return Tiger;
    case "Wolf":
      return Wolf;
    case "Lion":
      return Lion;
    case "Eagle":
      return Eagle;
    case "Elephant":
      return Elephant;
    default:
      return new InvalidOption("No such character!");
  }
};

const fight = (playerChar, compChar) => {
  const comp = setChar(compChar);
  const player = setChar(playerChar);
  console.log(
    toColor(`[YOU]  ${player.name}'s strength: ${player.strength}`, 1)
  );
  console.log(toColor(`[COMP] ${comp.name}'s strength: ${comp.strength}\n`, 2));

  if (player.strength === comp.strength)
    console.log(
      toColor(
        `${player.name} and ${comp.name} have the same strength, it's a draw!\n`
      )
    );

  if (player.strength > comp.strength) {
    plusPlayerScore();
    toColorLog(`You win!\nCongratulations!\n`);
  } else if (comp.strength > player.strength) {
    plusCompScore();
    toColorLog(`Computer win!\nBetter luck next time!\n`);
  }

  getCurrentScore();
  toColorLog("(reset score is available from setting: `npm run setting`)");
};

module.exports = fight;
