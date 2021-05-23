const { Tiger, Wolf, Lion, Eagle, Elephant } = require("./characters");
const { plusScore, minusScore, getCurrentScore } = require("./score");
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
  }
};

const fight = (playerChar, compChar) => {
  const comp = setChar(compChar),
    player = setChar(playerChar);
    console.log(toColor(`[YOU]  ${player.name}'s strength: ${player.strength}`, 1))
    console.log(toColor(`[COMP] ${comp.name}'s strength: ${comp.strength}\n`, 2))
  
  if (player.strength === comp.strength)
    return console.log(
      toColor(`${player.name} and ${comp.name} have the same strength, it's a draw!`)
    );

  if(player.strength > comp.strength) {
    plusScore()
    toColorLog(`You win!\nCongratulations!`)
  }
  else {
    minusScore()
    toColorLog(`Computer win!\nBetter luck next time!`)
  }
return getCurrentScore()  
};

module.exports = fight;
