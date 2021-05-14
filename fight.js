const { Tiger, Wolf, Lion, Eagle, Elephant } = require("./characters");

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
  console.log(
    `[YOU]  ${player.name}'s strength: ${player.strength}\n[COMP] ${comp.name}'s strength: ${comp.strength}\n`
  );
  if (player.strength === comp.strength)
    return console.log(
      `${player.name} and ${comp.name} have the same strength, it's a draw!`
    );

  return player.strength > comp.strength
    ? console.log(`${player.name} win! Congratulations!`)
    : console.log(`${comp.name} win! Better luck next time!`);
};

module.exports = fight;
