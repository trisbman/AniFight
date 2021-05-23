
const { Tiger, Wolf, Lion, Eagle, Elephant } = require("./characters");
const { toColor } = require("./toColor");


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

  return player.strength > comp.strength
    ? console.log(toColor(`You win!\nCongratulations!`))
    : console.log(toColor(`Computer win!\nBetter luck next time!`));
};

module.exports = fight;
