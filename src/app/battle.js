const Tiger = require('./characters/tiger');
const Wolf = require('./characters/wolf');
const Lion = require('./characters/lion');
const Eagle = require('./characters/eagle');
const Elephant = require('./characters/elephant');

const InvalidOption = require("./errors/invalidOption");
const {
  getCurrentScore,
  plusCompScore,
  plusPlayerScore,
} = require("../config/score");
const { toColor, toColorLog } = require("./toColor");

const setChar = (char) => {
  switch (char) {
    case "Tiger":
      return new Tiger();
    case "Wolf":
      return new Wolf();
    case "Lion":
      return new Lion();
    case "Eagle":
      return new Eagle();
    case "Elephant":
      return new Elephant();
    default:
      return new InvalidOption("No such character!");
  }
};

const battle = (playerChar, compChar) => {
  const comp = setChar(compChar);
  const player = setChar(playerChar);

  console.log(toColor(`[YOU]  ${player.name}'s power: ${player.power}`, 1));
  console.log(toColor(`[COMP] ${comp.name}'s power: ${comp.power}\n`, 2));

  if (player.power === comp.power)
    console.log(
      toColor(
        `${player.name} and ${comp.name} have the same power, it's a draw!\n`
      )
    );

  if (player.hp <= 0) {
    plusCompScore();
    toColorLog(`Computer win!\nBetter luck next time!\n`);
  } else if (comp.hp <= 0) {
    plusPlayerScore();
    toColorLog(`You win!\nCongratulations!\n`);
  }

  getCurrentScore();
  toColorLog("(reset score is available from setting: `npm run setting`)");
};

module.exports = battle;
