const { Tiger, Wolf, Lion } = require("./characters");

const setCharacter = (char) => {
  switch (char) {
    case "Tiger":
      return new Tiger();
    case "Wolf":
      return new Wolf();
    case "Lion":
      return new Lion();
  }
};

const fight = (playerChar, compChar) => {
  const comp = setCharacter(compChar),
    player = setCharacter(playerChar);
  console.log(
    `${player.name} strength: ${player.strength}\n${comp.name} strength: ${comp.strength}\n`
  );
  if (player.strength === comp.strength)
    return console.log("Tiger and Wolf have the same strength, it's a draw!");

  return player.strength > comp.strength
    ? console.log("You win!") + player.win()
    : console.log("You lose!") + comp.win();
};

module.exports = fight;
